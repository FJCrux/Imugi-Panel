<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { NConfigProvider, NMessageProvider, NDialogProvider, darkTheme, ruRU, dateRuRU, enUS, dateEnUS } from 'naive-ui'

// Imugi theme — a jade water-dragon: emerald accent on deep teal-black
// surfaces. Tuned beyond a plain dark theme so the panel has its own identity.
const themeOverrides = {
  common: {
    primaryColor: '#12c98c',
    primaryColorHover: '#2fddA0',
    primaryColorPressed: '#0e9e6e',
    primaryColorSuppl: '#12c98c',
    successColor: '#12c98c',
    successColorHover: '#2fddA0',
    successColorPressed: '#0e9e6e',
    infoColor: '#2bb8c4',
    borderRadius: '10px',
    borderRadiusSmall: '7px',
    // Deep teal-black surfaces with a faint jade cast.
    bodyColor: '#0a1310',
    cardColor: '#0f1a16',
    modalColor: '#111d18',
    popoverColor: '#131f1a',
    tableColor: '#0f1a16',
    tableHeaderColor: '#121e19',
    inputColor: '#0c1713',
    borderColor: '#20302a',
    dividerColor: '#1b2a25',
    textColorBase: '#e9f2ee',
    scrollbarColor: '#25382f',
    scrollbarColorHover: '#2f4a3f',
  },
  Card: {
    borderColor: '#1c2b25',
    color: '#0f1a16',
  },
  Layout: {
    siderColor: 'transparent',
    headerColor: 'rgba(10,19,16,0.72)',
  },
}

// Built-in naive-ui strings (confirm buttons, empty states) follow the app locale.
const { locale } = useI18n()
const naiveLocale = computed(() => (locale.value === 'ru' ? ruRU : enUS))
const naiveDateLocale = computed(() => (locale.value === 'ru' ? dateRuRU : dateEnUS))
</script>

<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides" :locale="naiveLocale" :date-locale="naiveDateLocale">
    <n-message-provider>
      <n-dialog-provider>
        <router-view />
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<style>
html,
body,
#app {
  margin: 0;
  height: 100%;
  font-family:
    'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
}
/* Consistent page heading across pages. */
.page-title {
  margin: 0 0 20px;
  font-size: 22px;
  font-weight: 680;
  letter-spacing: -0.01em;
}
/* Deep jade-black canvas with soft water-light glows drifting from the top,
   evoking a serpent moving under dark water. */
html,
body {
  color: #e9f2eed1;
  background:
    radial-gradient(1100px 620px at 78% -8%, rgba(18, 201, 140, 0.08), transparent 60%),
    radial-gradient(900px 520px at 8% 4%, rgba(43, 184, 196, 0.06), transparent 55%),
    #0a1310;
  background-attachment: fixed;
}
/* Slim, jade-tinted scrollbars. */
* {
  scrollbar-width: thin;
  scrollbar-color: #294036 transparent;
}
*::-webkit-scrollbar {
  width: 9px;
  height: 9px;
}
*::-webkit-scrollbar-thumb {
  background: #294036;
  border-radius: 8px;
  border: 2px solid transparent;
  background-clip: content-box;
}
*::-webkit-scrollbar-thumb:hover {
  background: #35544705;
  background: #355447;
  background-clip: content-box;
}
</style>
