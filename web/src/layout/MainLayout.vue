<script setup lang="ts">
import { h, ref, onMounted, onUnmounted, computed } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import {
  NLayout, NLayoutSider, NLayoutHeader, NLayoutContent, NMenu, NButton, NSpace,
  NText, NIcon, NTag, NDropdown,
} from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  GridOutline, PeopleOutline, GitNetworkOutline, SwapHorizontalOutline,
  LinkOutline, OptionsOutline, SettingsOutline, PersonCircleOutline,
  LogOutOutline, LanguageOutline,
} from '@vicons/ionicons5'
import { useI18n } from 'vue-i18n'
import { api } from '../api/client'
import type { Dashboard } from '../api/client'
import { LOCALES, setLocale } from '../i18n'
import type { LocaleCode } from '../i18n'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const username = ref('')
const status = ref('')
const version = ref('')
let timer: number | undefined

function icon(c: unknown) {
  return () => h(NIcon, null, { default: () => h(c as never) })
}

const menuOptions = computed<MenuOption[]>(() => [
  { label: () => h(RouterLink, { to: '/' }, { default: () => t('menu.dashboard') }), key: '/', icon: icon(GridOutline) },
  { label: () => h(RouterLink, { to: '/users' }, { default: () => t('menu.users') }), key: '/users', icon: icon(PeopleOutline) },
  { label: () => h(RouterLink, { to: '/network' }, { default: () => t('menu.network') }), key: '/network', icon: icon(GitNetworkOutline) },
  { label: () => h(RouterLink, { to: '/outbounds' }, { default: () => t('menu.outbounds') }), key: '/outbounds', icon: icon(SwapHorizontalOutline) },
  { label: () => h(RouterLink, { to: '/chain' }, { default: () => t('menu.chain') }), key: '/chain', icon: icon(LinkOutline) },
  { label: () => h(RouterLink, { to: '/advanced' }, { default: () => t('menu.advanced') }), key: '/advanced', icon: icon(OptionsOutline) },
  { label: () => h(RouterLink, { to: '/settings' }, { default: () => t('menu.settings') }), key: '/settings', icon: icon(SettingsOutline) },
])

const statusType = computed(() =>
  status.value === 'RUNNING' ? 'success' : status.value === 'IDLE' ? 'warning' : status.value ? 'error' : 'default',
)

const userMenu = computed(() => [
  { label: t('layout.logout'), key: 'logout', icon: icon(LogOutOutline) },
])

const localeMenu = LOCALES.map((l) => ({ label: l.label, key: l.code }))

async function poll() {
  try {
    const d = await api.get<Dashboard>('/api/dashboard')
    status.value = d.mitaStatus
    version.value = d.mitaVersion
  } catch {
    /* handled by router on 401 */
  }
}

onMounted(async () => {
  try {
    const me = await api.get<{ username: string }>('/api/me')
    username.value = me.username
  } catch {
    /* 401 already redirected to /login */
  }
  poll()
  timer = window.setInterval(() => {
    if (!document.hidden) poll()
  }, 8000)
})
onUnmounted(() => window.clearInterval(timer))

async function onUser(key: string) {
  if (key === 'logout') {
    try {
      await api.post('/api/logout')
    } finally {
      router.push('/login')
    }
  }
}
</script>

<template>
  <n-layout position="absolute" has-sider>
    <n-layout-sider bordered :collapsed-width="64" :width="220" collapse-mode="width" show-trigger="bar">
      <div class="brand">
        <span class="dot" />
        <span class="name">Mieru Web UI</span>
      </div>
      <n-menu :value="route.path" :options="menuOptions" :indent="20" />
    </n-layout-sider>

    <n-layout>
      <n-layout-header bordered class="header">
        <n-space align="center" :size="10">
          <n-tag :type="statusType" size="small" round>{{ status || '…' }}</n-tag>
          <n-text v-if="version" depth="3" style="font-size: 12px">mita v{{ version }}</n-text>
        </n-space>
        <n-space align="center" :size="4">
          <n-dropdown :options="localeMenu" @select="(k: string) => setLocale(k as LocaleCode)" trigger="click">
            <n-button text>
              <template #icon><n-icon :component="LanguageOutline" /></template>
            </n-button>
          </n-dropdown>
          <n-dropdown :options="userMenu" @select="onUser" trigger="click">
            <n-button text>
              <template #icon><n-icon :component="PersonCircleOutline" /></template>
              {{ username || 'admin' }}
            </n-button>
          </n-dropdown>
        </n-space>
      </n-layout-header>

      <n-layout-content class="content" content-style="padding: 24px; max-width: 1100px; margin: 0 auto;">
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style scoped>
.brand {
  height: 56px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.3px;
  white-space: nowrap;
}
.brand .dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #63e2b7;
  box-shadow: 0 0 10px #63e2b7aa;
  flex-shrink: 0;
}
.header {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.content {
  overflow: auto;
}
</style>
