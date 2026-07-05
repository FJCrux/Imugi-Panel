<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  NCard, NForm, NFormItem, NButton, NSpace, NSelect, NInputNumber, NInput, NAlert, useMessage, useDialog,
} from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { api, ApiError } from '../api/client'
import type { NetworkConfig, PortBinding } from '../api/client'
import HelpLabel from '../components/HelpLabel.vue'

const message = useMessage()
const dialog = useDialog()
const { t } = useI18n()

interface BindingRow {
  kind: 'port' | 'range'
  port: number
  portRange: string
  protocol: string
}

const bindings = ref<BindingRow[]>([])
const mtu = ref(1400)
const loggingLevel = ref('INFO')
const loading = ref(false)
const managed = ref(false)

const protocolOptions = ['TCP', 'UDP'].map((p) => ({ label: p, value: p }))
const levelOptions = ['FATAL', 'ERROR', 'WARN', 'INFO', 'DEBUG', 'TRACE'].map((l) => ({ label: l, value: l }))

function toRow(b: PortBinding): BindingRow {
  return {
    kind: b.portRange ? 'range' : 'port',
    port: b.port ?? 2012,
    portRange: b.portRange ?? '',
    protocol: b.protocol,
  }
}

async function load() {
  loading.value = true
  try {
    const cfg = await api.get<NetworkConfig>('/api/config/network')
    bindings.value = cfg.portBindings.map(toRow)
    mtu.value = cfg.mtu || 1400
    loggingLevel.value = cfg.loggingLevel === 'DEFAULT_LOGGING_LEVEL' ? 'INFO' : cfg.loggingLevel
    managed.value = cfg.portsManaged ?? false
  } catch (e) {
    message.error(e instanceof ApiError ? e.message : t('network.loadFailed'))
  } finally {
    loading.value = false
  }
}

function addBinding() {
  bindings.value.push({ kind: 'port', port: 2012, portRange: '', protocol: 'TCP' })
}

function confirmSave() {
  dialog.warning({
    title: t('network.applyTitle'),
    content: t('network.applyBody'),
    positiveText: t('common.apply'),
    negativeText: t('common.cancel'),
    onPositiveClick: save,
  })
}

async function save() {
  const payload: NetworkConfig = {
    portBindings: bindings.value.map((b) =>
      b.kind === 'range'
        ? { portRange: b.portRange, protocol: b.protocol }
        : { port: b.port, protocol: b.protocol },
    ),
    mtu: mtu.value,
    loggingLevel: loggingLevel.value,
  }
  try {
    await api.put('/api/config/network', payload)
    message.success(t('network.applied'))
    await load()
  } catch (e) {
    message.error(e instanceof ApiError ? e.message : t('common.saveFailed'))
  }
}

onMounted(load)
</script>

<template>
  <h2 class="page-title">{{ t('network.title') }}</h2>
  <n-card :loading="loading">
    <n-alert v-if="managed" type="info" :show-icon="false" style="margin-bottom: 16px">
      {{ t('network.managedAlert') }}
    </n-alert>
    <n-alert v-else type="info" :show-icon="false" style="margin-bottom: 16px">
      {{ t('network.infoAlert') }}
    </n-alert>
    <n-form>
      <n-form-item>
        <template #label>
          <HelpLabel :label="t('network.portBindings')" :help="t('network.portBindingsHelp')" />
        </template>
        <n-space vertical style="width: 100%">
          <n-space v-for="(b, i) in bindings" :key="i" align="center">
            <n-select v-model:value="b.kind" :disabled="managed" :options="[{ label: t('network.port'), value: 'port' }, { label: t('network.range'), value: 'range' }]" style="width: 120px" />
            <n-input-number v-if="b.kind === 'port'" v-model:value="b.port" :disabled="managed" :min="1025" :max="65535" style="width: 140px" />
            <n-input v-else v-model:value="b.portRange" :disabled="managed" :placeholder="t('network.rangePlaceholder')" style="width: 140px" />
            <n-select v-model:value="b.protocol" :disabled="managed" :options="protocolOptions" style="width: 90px" />
            <n-button v-if="!managed" size="tiny" quaternary type="error" @click="bindings.splice(i, 1)">✕</n-button>
          </n-space>
          <n-button v-if="!managed" size="small" dashed @click="addBinding">{{ t('network.addBinding') }}</n-button>
        </n-space>
      </n-form-item>
      <n-form-item>
        <template #label>
          <HelpLabel :label="t('network.mtu')" :help="t('network.mtuHelp')" />
        </template>
        <n-input-number v-model:value="mtu" :min="1280" :max="1500" />
      </n-form-item>
      <n-form-item>
        <template #label>
          <HelpLabel :label="t('network.loggingLevel')" :help="t('network.loggingLevelHelp')" />
        </template>
        <n-select v-model:value="loggingLevel" :options="levelOptions" style="width: 160px" />
      </n-form-item>
      <n-button type="primary" @click="confirmSave">{{ t('common.apply') }}</n-button>
    </n-form>
  </n-card>
</template>
