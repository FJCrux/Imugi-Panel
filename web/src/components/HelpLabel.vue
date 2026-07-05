<script setup lang="ts">
import { NTooltip, NIcon } from 'naive-ui'
import { HelpCircleOutline } from '@vicons/ionicons5'

// Form label with a hoverable "?" explaining the field.
defineProps<{ label: string; help: string }>()
</script>

<template>
  <span class="help-label">
    {{ label }}
    <n-tooltip trigger="hover" style="max-width: 340px">
      <template #trigger>
        <n-icon :component="HelpCircleOutline" class="icon" />
      </template>
      {{ help }}
    </n-tooltip>
  </span>
</template>

<style scoped>
.help-label {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}
.icon {
  opacity: 0.45;
  cursor: help;
  font-size: 15px;
}
.icon:hover {
  opacity: 0.9;
}
</style>
