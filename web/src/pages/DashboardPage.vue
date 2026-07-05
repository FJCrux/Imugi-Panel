<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { NCard, NGrid, NGi, NTag, NTooltip, NDataTable, NCollapse, NCollapseItem, NCode, NButton, NSpace, NAlert, useMessage } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { api, ApiError } from '../api/client'
import type { Dashboard, SessionInfo } from '../api/client'

const message = useMessage()
const { t } = useI18n()
const dash = ref<Dashboard | null>(null)
const sessions = ref<SessionInfo[]>([])
const mitaLogs = ref<string[]>([])
let timer: number | undefined

function fmtBytes(n: number): string {
  if (n < 1024) return `${n} B`
  const units = ['KiB', 'MiB', 'GiB', 'TiB']
  let v = n
  let i = -1
  do {
    v /= 1024
    i++
  } while (v >= 1024 && i < units.length - 1)
  return `${v.toFixed(1)} ${units[i]}`
}

function fmtUptime(s: number): string {
  if (s <= 0) return '—'
  const d = Math.floor(s / 86400)
  const h = Math.floor((s % 86400) / 3600)
  const m = Math.floor((s % 3600) / 60)
  return d > 0 ? `${d}d ${h}h` : h > 0 ? `${h}h ${m}m` : `${m}m`
}

const traffic = computed(() => {
  const t = dash.value?.metrics?.['traffic'] ?? {}
  return { down: t['DownloadBytes'] ?? 0, up: t['UploadBytes'] ?? 0 }
})

const statusType = computed(() =>
  dash.value?.mitaStatus === 'RUNNING' ? 'success' : dash.value?.mitaStatus === 'UNREACHABLE' ? 'error' : 'warning',
)

const sessionColumns = computed<DataTableColumns<SessionInfo>>(() => [
  { title: 'ID', key: 'id' },
  { title: t('dashboard.colProtocol'), key: 'protocol' },
  { title: t('dashboard.colLocal'), key: 'localAddr' },
  { title: t('dashboard.colRemote'), key: 'remoteAddr' },
  { title: t('dashboard.colState'), key: 'state' },
])

async function poll() {
  try {
    dash.value = await api.get<Dashboard>('/api/dashboard')
    sessions.value = await api.get<SessionInfo[]>('/api/sessions')
  } catch {
    /* transient errors surface on next poll */
  }
}

async function loadLogs() {
  try {
    const res = await api.get<{ lines: string[] }>('/api/mita/logs?lines=200')
    mitaLogs.value = res.lines
  } catch (e) {
    if (e instanceof ApiError && e.status === 501) mitaLogs.value = [t('dashboard.notSupervising')]
  }
}

async function restartMita() {
  try {
    await api.post('/api/mita/restart')
    message.success(t('dashboard.restartRequested'))
  } catch (e) {
    message.error(e instanceof ApiError ? e.message : t('dashboard.restartFailed'))
  }
}

function startPolling() {
  poll()
  timer = window.setInterval(() => {
    if (!document.hidden) poll()
  }, 5000)
}

onMounted(startPolling)
onUnmounted(() => window.clearInterval(timer))
</script>

<template>
  <h2 class="page-title">{{ t('dashboard.title') }}</h2>
  <n-space vertical :size="16">
    <n-alert v-if="dash?.warnings?.length" type="warning" :title="t('dashboard.hardening')">
      <ul class="warnlist">
        <li v-for="(wmsg, i) in dash.warnings" :key="i">{{ wmsg }}</li>
      </ul>
    </n-alert>
    <n-grid :cols="5" :x-gap="12" :y-gap="12" item-responsive responsive="screen">
      <n-gi span="5 m:1">
        <div class="tile">
          <div class="tile-label">mita</div>
          <div class="tile-foot">
            <n-tag :type="statusType" size="small" round>{{ dash?.mitaStatus ?? '…' }}</n-tag>
            <span class="tile-up">{{ t('dashboard.mitaSub', { version: dash?.mitaVersion || '-', uptime: fmtUptime(dash?.mitaUptimeSeconds ?? 0) }) }}</span>
          </div>
        </div>
      </n-gi>
      <n-gi span="5 m:1">
        <div class="tile"><div class="tile-label">{{ t('dashboard.users') }}</div><div class="tile-value">{{ dash?.userCount ?? 0 }}</div></div>
      </n-gi>
      <n-gi span="5 m:1">
        <div class="tile">
          <n-tooltip trigger="hover">
            <template #trigger>
              <div class="tile-label tile-label-help">{{ t('dashboard.onlineNow') }}</div>
            </template>
            {{ t('dashboard.onlineHint') }}
          </n-tooltip>
          <div class="tile-value">{{ dash?.activeUserCount ?? 0 }}</div>
        </div>
      </n-gi>
      <n-gi span="5 m:1">
        <div class="tile"><div class="tile-label">{{ t('dashboard.download') }}</div><div class="tile-value">{{ fmtBytes(traffic.down) }}</div></div>
      </n-gi>
      <n-gi span="5 m:1">
        <div class="tile"><div class="tile-label">{{ t('dashboard.upload') }}</div><div class="tile-value">{{ fmtBytes(traffic.up) }}</div></div>
      </n-gi>
    </n-grid>

    <n-card title="mita">
      <template #header-extra>
        <n-button size="small" type="warning" secondary @click="restartMita">{{ t('dashboard.restartMita') }}</n-button>
      </template>
      <n-collapse @item-header-click="loadLogs">
        <n-collapse-item :title="t('dashboard.logs')" name="logs">
          <n-code :code="mitaLogs.join('\n') || t('dashboard.empty')" language="text" word-wrap />
        </n-collapse-item>
        <n-collapse-item :title="t('dashboard.rawConnections', { n: sessions.length })" name="sessions">
          <n-alert type="default" :show-icon="false" style="margin-bottom: 10px">
            {{ t('dashboard.rawConnectionsNote') }}
          </n-alert>
          <n-data-table :columns="sessionColumns" :data="sessions" :row-key="(s: SessionInfo) => s.id" size="small" :scroll-x="640" />
        </n-collapse-item>
        <n-collapse-item :title="t('dashboard.rawMetrics')" name="metrics">
          <n-code :code="JSON.stringify(dash?.metrics ?? {}, null, 2)" language="json" word-wrap />
        </n-collapse-item>
      </n-collapse>
    </n-card>
  </n-space>
</template>

<style scoped>
.tile {
  position: relative;
  background: linear-gradient(160deg, #12211b, #0d1814);
  border: 1px solid #1e2e28;
  border-radius: 14px;
  padding: 16px 18px;
  min-height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  overflow: hidden;
  transition: border-color 0.18s ease, transform 0.18s ease;
}
.tile::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(18, 201, 140, 0.35), transparent);
}
.tile:hover {
  border-color: #2b453b;
  transform: translateY(-1px);
}
.tile-label {
  font-size: 11.5px;
  text-transform: uppercase;
  letter-spacing: 0.7px;
  opacity: 0.5;
}
.tile-label-help {
  cursor: help;
  border-bottom: 1px dotted rgba(255, 255, 255, 0.25);
  align-self: flex-start;
}
.tile-value {
  font-size: 24px;
  font-weight: 650;
  line-height: 1;
}
/* Foot row keeps the mita status tile's value baseline aligned with the
   number tiles. */
.tile-foot {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.tile-up {
  font-size: 12px;
  opacity: 0.55;
}
/* Tighter tiles on phones so they don't waste vertical space. */
@media (max-width: 760px) {
  .tile {
    min-height: 0;
    padding: 14px 16px;
    gap: 10px;
  }
  .tile-value {
    font-size: 22px;
  }
}
.warnlist {
  margin: 0;
  padding-left: 18px;
}
.warnlist li {
  margin: 2px 0;
}
</style>
