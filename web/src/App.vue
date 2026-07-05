<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { NConfigProvider, NMessageProvider, NDialogProvider, darkTheme, ruRU, dateRuRU, enUS, dateEnUS } from 'naive-ui'

// Dark-only theme.
const themeOverrides = {
  common: {
    primaryColor: '#63e2b7',
    primaryColorHover: '#7fe7c4',
    primaryColorPressed: '#5acea7',
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
/* Consistent page heading across pages. */
.page-title {
  margin: 0 0 18px;
  font-size: 20px;
  font-weight: 650;
  letter-spacing: 0.2px;
}
/* Dark background behind the app (covers areas outside Naive layout, e.g. the
   login and public share pages). */
html,
body {
  background: #101014;
  color: #ffffffd1;
}
</style>
