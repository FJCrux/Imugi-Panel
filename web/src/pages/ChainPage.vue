<script setup lang="ts">
import { h, ref, computed, onMounted } from 'vue'
import {
  NCard, NButton, NSpace, NInput, NAlert, NTag, NDataTable, NModal, NText, NForm, NFormItem, useMessage,
} from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { api, ApiError } from '../api/client'
import type { Peer, ChainKey } from '../api/client'
import HelpLabel from '../components/HelpLabel.vue'

const message = useMessage()
const { t } = useI18n()
const peers = ref<Peer[]>([])
const loading = ref(false)

// add peer
const newName = ref('')
const newKey = ref('')
const adding = ref(false)

// generated key modal
const keyModal = ref(false)
const generated = ref<ChainKey | null>(null)
const generating = ref(false)

const columns = computed<DataTableColumns<Peer>>(() => [
  { title: t('common.name'), key: 'name' },
  { title: t('chain.colLocalSocks'), key: 'socks5Port', render: (p) => `127.0.0.1:${p.socks5Port}` },
  {
    title: t('chain.colStatus'),
    key: 'status',
    render: (p) =>
      h(NTag, { type: p.running ? 'success' : 'warning', size: 'small' }, { default: () => (p.running ? t('chain.statusConnected') : t('chain.statusStarting')) }),
  },
  {
    title: '',
    key: 'actions',
    render: (p) =>
      h(NButton, { size: 'small', type: 'error', quaternary: true, onClick: () => remove(p.name) }, { default: () => t('common.remove') }),
  },
])

async function load() {
  loading.value = true
  try {
    peers.value = await api.get<Peer[]>('/api/chain')
  } catch (e) {
    message.error(e instanceof ApiError ? e.message : t('chain.loadFailed'))
  } finally {
    loading.value = false
  }
}

async function addPeer() {
  if (!newName.value.trim() || !newKey.value.trim()) {
    message.error(t('chain.nameKeyRequired'))
    return
  }
  adding.value = true
  try {
    peers.value = await api.post<Peer[]>('/api/chain', { name: newName.value.trim(), key: newKey.value.trim() })
    newName.value = ''
    newKey.value = ''
    message.success(t('chain.connected'))
  } catch (e) {
    message.error(e instanceof ApiError ? e.message : t('chain.addFailed'))
  } finally {
    adding.value = false
  }
}

async function remove(name: string) {
  try {
    peers.value = await api.del<Peer[]>(`/api/chain/${encodeURIComponent(name)}`)
  } catch (e) {
    message.error(e instanceof ApiError ? e.message : t('chain.removeFailed'))
  }
}

async function generateKey() {
  generating.value = true
  try {
    generated.value = await api.post<ChainKey>('/api/chain/key', {})
    keyModal.value = true
  } catch (e) {
    message.error(e instanceof ApiError ? e.message : t('chain.generateFailed'))
  } finally {
    generating.value = false
  }
}

function copy(text: string) {
  navigator.clipboard.writeText(text).then(
    () => message.success(t('common.copied')),
    () => message.error(t('common.copyFailed')),
  )
}

onMounted(load)
</script>

<template>
  <h2 class="page-title">{{ t('chain.title') }}</h2>
  <n-space vertical :size="16">
    <n-card :title="t('chain.upstreamTitle')">
      <n-alert type="info" :show-icon="false" style="margin-bottom: 12px">
        {{ t('chain.upstreamAlert') }}
      </n-alert>
      <n-form inline style="margin-bottom: 6px">
        <n-form-item>
          <template #label>
            <HelpLabel :label="t('chain.peerName')" :help="t('chain.peerNameHelp')" />
          </template>
          <n-input v-model:value="newName" :placeholder="t('chain.peerNamePlaceholder')" style="width: 180px" />
        </n-form-item>
        <n-form-item>
          <template #label>
            <HelpLabel :label="t('chain.peerKey')" :help="t('chain.peerKeyHelp')" />
          </template>
          <n-input v-model:value="newKey" :placeholder="t('chain.peerKeyPlaceholder')" style="width: 380px" />
        </n-form-item>
        <n-form-item>
          <n-button type="primary" :loading="adding" @click="addPeer">{{ t('chain.connect') }}</n-button>
        </n-form-item>
      </n-form>
      <n-data-table :columns="columns" :data="peers" :loading="loading" :row-key="(p: Peer) => p.name" size="small" :scroll-x="520" />
    </n-card>

    <n-card :title="t('chain.asUpstreamTitle')">
      <template #header-extra>
        <n-button :loading="generating" @click="generateKey">{{ t('chain.generateKey') }}</n-button>
      </template>
      <n-text depth="3" style="font-size: 13px">
        {{ t('chain.asUpstreamText') }}
      </n-text>
    </n-card>

    <n-modal v-model:show="keyModal" preset="card" :title="t('chain.keyModalTitle')" style="width: 520px">
      <n-space v-if="generated" vertical>
        <n-text depth="3" style="font-size: 12px">
          {{ t('chain.keyModalText', { name: generated.name }) }}
        </n-text>
        <n-input :value="generated.key" type="textarea" readonly :autosize="{ minRows: 3, maxRows: 6 }" />
        <n-button size="small" @click="copy(generated.key)">{{ t('chain.copyKey') }}</n-button>
      </n-space>
    </n-modal>
  </n-space>
</template>
