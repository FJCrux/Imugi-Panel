<script setup lang="ts">
import { h, ref, computed, onMounted } from 'vue'
import {
  NCard, NButton, NSpace, NInput, NInputNumber, NSelect, NAlert, NTag, NText,
  NDataTable, NDrawer, NDrawerContent, NForm, NFormItem, NDynamicInput, useMessage,
} from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { api, ApiError } from '../api/client'
import type { EgressConfig, EgressProxy, EgressRule, GeoDataset, GeoCategory, GeoipState, Peer } from '../api/client'
import HelpLabel from '../components/HelpLabel.vue'

const message = useMessage()
const { t } = useI18n()
const loading = ref(false)
const proxies = ref<EgressProxy[]>([])
const rules = ref<EgressRule[]>([])
const peers = ref<Peer[]>([])

const actionOptions = ['PROXY', 'DIRECT', 'REJECT'].map((a) => ({ label: a, value: a }))
// Rules can route through user-defined proxies and chained upstream peers.
const proxyOptions = computed(() => [
  ...proxies.value.map((p) => ({ label: p.name, value: p.name })),
  ...peers.value.map((p) => ({ label: `${p.name} (peer)`, value: p.name })),
])

// --- geoip datasets (xray geoip.dat format) ---
const datasets = ref<GeoDataset[]>([])
const categories = ref<GeoCategory[]>([])
const geoBusy = ref(false)
const dsName = ref('')
const dsUrl = ref('')
const presets = [
  { name: 'geoip', url: 'https://github.com/Loyalsoldier/geoip/releases/latest/download/geoip.dat', label: 'Loyalsoldier (countries)' },
  { name: 'ru-blocked', url: 'https://github.com/runetfreedom/russia-blocked-geoip/releases/latest/download/ru-blocked.dat', label: 'RU blocked (Roskomnadzor)' },
]
const catOptions = computed(() =>
  categories.value.map((c) => ({ label: `${c.code} (${c.cidrs})`, value: c.code })),
)

function usePreset(p: { name: string; url: string }) {
  dsName.value = p.name
  dsUrl.value = p.url
}

async function loadGeo() {
  try {
    const res = await api.get<GeoipState>('/api/geoip')
    datasets.value = res.datasets
    categories.value = res.categories
  } catch {
    /* geoip is optional */
  }
}
async function addDataset() {
  if (!dsName.value.trim() || !dsUrl.value.trim()) {
    message.error(t('outbounds.nameUrlRequired'))
    return
  }
  geoBusy.value = true
  try {
    const res = await api.post<GeoipState>('/api/geoip/datasets', { name: dsName.value.trim(), url: dsUrl.value.trim() })
    datasets.value = res.datasets
    categories.value = res.categories
    dsName.value = ''
    dsUrl.value = ''
    message.success(t('outbounds.datasetAdded'))
  } catch (e) {
    message.error(e instanceof ApiError ? e.message : t('outbounds.downloadFailed'))
  } finally {
    geoBusy.value = false
  }
}
async function deleteDataset(name: string) {
  try {
    const res = await api.del<GeoipState>(`/api/geoip/datasets/${encodeURIComponent(name)}`)
    datasets.value = res.datasets
    categories.value = res.categories
  } catch (e) {
    message.error(e instanceof ApiError ? e.message : t('common.deleteFailed'))
  }
}
function fmtMB(b: number): string {
  return `${(b / 1024 / 1024).toFixed(1)} MB`
}

// --- proxy editor drawer ---
const proxyDrawer = ref(false)
const proxyIndex = ref<number | null>(null)
const proxyForm = ref<EgressProxy>({ name: '', host: '', port: 1080, username: '', password: '' })

function openProxy(i: number | null) {
  proxyIndex.value = i
  proxyForm.value = i === null
    ? { name: '', host: '', port: 1080, username: '', password: '' }
    : { ...proxies.value[i] }
  proxyDrawer.value = true
}
function saveProxy() {
  if (!proxyForm.value.name || !proxyForm.value.host) {
    message.error(t('outbounds.nameHostRequired'))
    return
  }
  if (proxyIndex.value === null) proxies.value.push({ ...proxyForm.value })
  else proxies.value[proxyIndex.value] = { ...proxyForm.value }
  proxyDrawer.value = false
}

const proxyColumns = computed<DataTableColumns<EgressProxy>>(() => [
  { title: t('common.name'), key: 'name' },
  { title: t('outbounds.colAddress'), key: 'addr', render: (p) => `${p.host}:${p.port}` },
  { title: t('outbounds.colAuth'), key: 'auth', render: (p) => (p.username ? t('outbounds.authYes') : '—') },
  {
    title: t('common.actions'),
    key: 'actions',
    render: (_p, i) =>
      h(NSpace, null, {
        default: () => [
          h(NButton, { size: 'small', onClick: () => openProxy(i) }, { default: () => t('common.edit') }),
          h(NButton, { size: 'small', type: 'error', quaternary: true, onClick: () => proxies.value.splice(i, 1) }, { default: () => t('common.delete') }),
        ],
      }),
  },
])

function addRule() {
  rules.value.push({ domains: [], cidrs: [], geo: [], action: 'PROXY', proxies: [] })
}

async function load() {
  loading.value = true
  try {
    const cfg = await api.get<EgressConfig>('/api/config/egress')
    proxies.value = cfg.proxies
    rules.value = cfg.rules.map((r) => ({ ...r, geo: r.geo ?? [] }))
  } catch (e) {
    message.error(e instanceof ApiError ? e.message : t('outbounds.loadFailed'))
  } finally {
    loading.value = false
  }
}

async function save() {
  try {
    await api.put('/api/config/egress', { proxies: proxies.value, rules: rules.value })
    message.success(t('outbounds.applied'))
    await load()
  } catch (e) {
    message.error(e instanceof ApiError ? e.message : t('common.saveFailed'))
  }
}

async function loadPeers() {
  try {
    peers.value = await api.get<Peer[]>('/api/chain')
  } catch {
    /* chain is optional */
  }
}

onMounted(() => {
  load()
  loadGeo()
  loadPeers()
})
</script>

<template>
  <h2 class="page-title">{{ t('outbounds.title') }}</h2>
  <n-space vertical :size="16">
    <n-card :title="t('outbounds.proxiesTitle')" :loading="loading">
      <template #header-extra>
        <n-button type="primary" @click="openProxy(null)">{{ t('outbounds.addProxy') }}</n-button>
      </template>
      <n-alert type="info" :show-icon="false" style="margin-bottom: 12px">
        {{ t('outbounds.proxiesAlert') }}
      </n-alert>
      <n-data-table :columns="proxyColumns" :data="proxies" :row-key="(p: EgressProxy) => p.name" size="small" />
    </n-card>

    <n-card :title="t('outbounds.geoTitle')">
      <n-alert type="info" :show-icon="false" style="margin-bottom: 12px">
        {{ t('outbounds.geoAlert') }}
      </n-alert>
      <n-space style="margin-bottom: 10px">
        <n-button v-for="p in presets" :key="p.name" size="small" tertiary @click="usePreset(p)">
          {{ p.label }}
        </n-button>
      </n-space>
      <n-space align="center" style="margin-bottom: 12px">
        <n-input v-model:value="dsName" :placeholder="t('outbounds.dsNamePlaceholder')" style="width: 130px" />
        <n-input v-model:value="dsUrl" :placeholder="t('outbounds.dsUrlPlaceholder')" style="width: 420px" />
        <n-button type="primary" :loading="geoBusy" @click="addDataset">{{ t('common.add') }}</n-button>
      </n-space>
      <n-space>
        <n-tag v-for="d in datasets" :key="d.name" closable @close="deleteDataset(d.name)">
          {{ d.name }} · {{ fmtMB(d.bytes) }}
        </n-tag>
        <n-text v-if="!datasets.length" depth="3">{{ t('outbounds.noDatasets') }}</n-text>
      </n-space>
      <div v-if="categories.length" class="cats">{{ t('outbounds.categoriesAvailable', { n: categories.length }) }}</div>
    </n-card>

    <n-card :title="t('outbounds.rulesTitle')">
      <template #header-extra>
        <n-button @click="addRule">{{ t('outbounds.addRule') }}</n-button>
      </template>
      <n-alert type="info" :show-icon="false" style="margin-bottom: 12px">
        {{ t('outbounds.rulesAlert') }}
      </n-alert>
      <n-space vertical>
        <n-card v-for="(rule, i) in rules" :key="i" size="small" embedded>
          <n-space vertical>
            <n-space align="center" wrap>
              <span class="lbl">#{{ i + 1 }}</span>
              <n-select v-model:value="rule.action" :options="actionOptions" style="width: 130px" />
              <n-select
                v-if="rule.action === 'PROXY'"
                v-model:value="rule.proxies"
                multiple
                :options="proxyOptions"
                :placeholder="t('outbounds.viaProxies')"
                style="min-width: 200px"
              />
              <n-button size="tiny" quaternary type="error" @click="rules.splice(i, 1)">{{ t('common.remove') }}</n-button>
            </n-space>
            <n-select
              v-model:value="rule.geo"
              multiple
              filterable
              :options="catOptions"
              :placeholder="t('outbounds.matchGeo')"
            />
            <n-space>
              <n-dynamic-input v-model:value="rule.domains" :min="0">
                <template #default="{ value, index }">
                  <n-input :value="value" @update:value="(v: string) => (rule.domains[index] = v)" :placeholder="t('outbounds.domainPlaceholder')" />
                </template>
              </n-dynamic-input>
              <n-dynamic-input v-model:value="rule.cidrs" :min="0">
                <template #default="{ value, index }">
                  <n-input :value="value" @update:value="(v: string) => (rule.cidrs[index] = v)" :placeholder="t('outbounds.cidrPlaceholder')" />
                </template>
              </n-dynamic-input>
            </n-space>
          </n-space>
        </n-card>
      </n-space>
      <n-button type="primary" style="margin-top: 16px" @click="save">{{ t('common.apply') }}</n-button>
    </n-card>

    <n-drawer v-model:show="proxyDrawer" :width="400">
      <n-drawer-content :title="proxyIndex === null ? t('outbounds.addProxy') : t('outbounds.editProxy')">
        <n-form>
          <n-form-item>
            <template #label>
              <HelpLabel :label="t('outbounds.proxyName')" :help="t('outbounds.proxyNameHelp')" />
            </template>
            <n-input v-model:value="proxyForm.name" placeholder="upstream1" />
          </n-form-item>
          <n-form-item>
            <template #label>
              <HelpLabel :label="t('outbounds.host')" :help="t('outbounds.hostHelp')" />
            </template>
            <n-input v-model:value="proxyForm.host" placeholder="1.2.3.4 / proxy.example.com" />
          </n-form-item>
          <n-form-item>
            <template #label>
              <HelpLabel :label="t('common.port')" :help="t('outbounds.portHelp')" />
            </template>
            <n-input-number v-model:value="proxyForm.port" :min="1" :max="65535" />
          </n-form-item>
          <n-form-item>
            <template #label>
              <HelpLabel :label="t('outbounds.usernameOpt')" :help="t('outbounds.socksAuthHelp')" />
            </template>
            <n-input v-model:value="proxyForm.username" />
          </n-form-item>
          <n-form-item>
            <template #label>
              <HelpLabel :label="t('outbounds.passwordOpt')" :help="t('outbounds.socksAuthHelp')" />
            </template>
            <n-input v-model:value="proxyForm.password" type="password" show-password-on="click" />
          </n-form-item>
        </n-form>
        <template #footer>
          <n-space>
            <n-button @click="proxyDrawer = false">{{ t('common.cancel') }}</n-button>
            <n-button type="primary" @click="saveProxy">{{ t('common.save') }}</n-button>
          </n-space>
        </template>
      </n-drawer-content>
    </n-drawer>
  </n-space>
</template>

<style scoped>
.lbl {
  font-weight: 600;
  opacity: 0.6;
}
.cats {
  margin-top: 10px;
  font-size: 12px;
  opacity: 0.6;
}
</style>
