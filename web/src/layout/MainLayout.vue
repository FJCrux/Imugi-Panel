<script setup lang="ts">
import { h, ref, onMounted, onUnmounted, computed } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { watch } from 'vue'
import {
  NLayout, NLayoutSider, NLayoutHeader, NLayoutContent, NMenu, NButton, NSpace,
  NText, NIcon, NTag, NDropdown, NDrawer, NDrawerContent,
} from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  GridOutline, PeopleOutline, GitNetworkOutline, SwapHorizontalOutline,
  LinkOutline, OptionsOutline, SettingsOutline, PersonCircleOutline,
  LogOutOutline, LanguageOutline, MenuOutline,
} from '@vicons/ionicons5'
import { useI18n } from 'vue-i18n'
import { api } from '../api/client'
import type { Dashboard, VersionInfo } from '../api/client'
import { LOCALES, setLocale } from '../i18n'
import type { LocaleCode } from '../i18n'
import ImugiMark from '../components/ImugiMark.vue'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const username = ref('')
const status = ref('')
const version = ref('')
const panel = ref<VersionInfo | null>(null)
let timer: number | undefined

// Below this width the fixed sidebar is replaced by a hamburger + slide-out
// drawer so the panel is usable on phones.
const MOBILE_BREAKPOINT = 760
const isMobile = ref(false)
const drawerOpen = ref(false)
function onResize() {
  isMobile.value = window.innerWidth < MOBILE_BREAKPOINT
}

// Close the mobile menu after navigating.
watch(() => route.path, () => (drawerOpen.value = false))

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
  try {
    panel.value = await api.get<VersionInfo>('/api/version')
  } catch {
    /* version display is best-effort */
  }
  onResize()
  window.addEventListener('resize', onResize)
})
onUnmounted(() => {
  window.clearInterval(timer)
  window.removeEventListener('resize', onResize)
})

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
  <n-layout position="absolute" :has-sider="!isMobile">
    <!-- Desktop: fixed sidebar. Mobile: replaced by the drawer below. -->
    <n-layout-sider
      v-if="!isMobile"
      bordered
      :collapsed-width="64"
      :width="222"
      collapse-mode="width"
      show-trigger="bar"
      class="sider"
    >
      <div class="brand">
        <ImugiMark :size="26" glow />
        <span class="name">Imugi Panel</span>
      </div>
      <n-menu :value="route.path" :options="menuOptions" :indent="20" class="nav" />
    </n-layout-sider>

    <n-layout>
      <n-layout-header bordered class="header">
        <n-space align="center" :size="isMobile ? 6 : 10" :wrap="false">
          <n-button v-if="isMobile" quaternary circle @click="drawerOpen = true">
            <template #icon><n-icon :component="MenuOutline" /></template>
          </n-button>
          <n-tag :type="statusType" size="small" round>{{ status || '…' }}</n-tag>
          <n-text v-if="version && !isMobile" depth="3" style="font-size: 12px">mita v{{ version }}</n-text>
          <n-text v-if="panel && !isMobile" depth="3" style="font-size: 12px">
            · panel {{ panel.current === 'dev' ? 'dev' : panel.current }}
          </n-text>
          <a
            v-if="panel?.updateAvailable"
            :href="panel.releaseUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="update-link"
          >
            <n-tag size="small" type="success" round :bordered="false">
              {{ t('layout.updateAvailable', { v: panel.latest }) }}
            </n-tag>
          </a>
        </n-space>
        <n-space align="center" :size="14" :wrap="false">
          <n-dropdown :options="localeMenu" @select="(k: string) => setLocale(k as LocaleCode)" trigger="click">
            <n-button text style="font-size: 18px">
              <template #icon><n-icon :component="LanguageOutline" /></template>
            </n-button>
          </n-dropdown>
          <n-dropdown :options="userMenu" @select="onUser" trigger="click">
            <n-button text :focusable="false">
              <template #icon><n-icon :component="PersonCircleOutline" /></template>
              <span v-if="!isMobile" style="margin-left: 4px">{{ username || 'admin' }}</span>
            </n-button>
          </n-dropdown>
        </n-space>
      </n-layout-header>

      <n-layout-content class="content" :content-style="`padding: ${isMobile ? 16 : 24}px; max-width: 1100px; margin: 0 auto;`">
        <router-view />
      </n-layout-content>
    </n-layout>

    <!-- Mobile navigation drawer -->
    <n-drawer v-model:show="drawerOpen" :width="240" placement="left">
      <n-drawer-content :native-scrollbar="false" body-content-style="padding: 0">
        <div class="brand">
          <ImugiMark :size="26" glow />
          <span class="name">Imugi Panel</span>
        </div>
        <n-menu :value="route.path" :options="menuOptions" :indent="20" />
      </n-drawer-content>
    </n-drawer>
  </n-layout>
</template>

<style scoped>
/* Sidebar: deep jade gradient with a faint scale texture, so it reads as the
   serpent's flank rather than a flat panel. */
.sider {
  background:
    linear-gradient(180deg, rgba(18, 40, 32, 0.55), rgba(9, 17, 14, 0.2)),
    radial-gradient(14px 14px at 7px 7px, rgba(18, 201, 140, 0.05) 40%, transparent 42%),
    #0b1512;
  background-size: auto, 14px 14px, auto;
}
.brand {
  height: 60px;
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 0 20px;
  white-space: nowrap;
}
.brand .name {
  font-weight: 750;
  font-size: 16px;
  letter-spacing: -0.01em;
  background: linear-gradient(92deg, #eafff6, #74e9c1);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.nav {
  padding: 4px 8px;
}
.update-link {
  display: inline-flex;
  text-decoration: none;
}
.header {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  backdrop-filter: blur(10px);
}
.content {
  overflow: auto;
}
</style>
