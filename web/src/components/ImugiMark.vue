<script setup lang="ts">
// The Imugi brand mark: a cresting water-serpent with a wisdom pearl, drawn
// inline so it can be tinted and glow via CSS. Used in the sidebar and login.
withDefaults(defineProps<{ size?: number; glow?: boolean }>(), { size: 28, glow: false })
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 40 40"
    fill="none"
    class="imugi-mark"
    :class="{ glow }"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="imugi-body" x1="4" y1="34" x2="36" y2="8" gradientUnits="userSpaceOnUse">
        <stop stop-color="#0e9e6e" />
        <stop offset="0.55" stop-color="#12c98c" />
        <stop offset="1" stop-color="#4fe4b5" />
      </linearGradient>
    </defs>
    <!-- coiled, cresting serpent -->
    <path
      d="M6 32 C 4 22, 13 18, 18 24 C 22 28, 15 33, 12 28 C 10 24, 15 22, 18 25
         C 24 31, 33 27, 33 18 C 33 12, 27 10, 24 14"
      stroke="url(#imugi-body)"
      stroke-width="3.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
    <!-- head -->
    <circle cx="24" cy="13.4" r="3" fill="#4fe4b5" />
    <circle cx="25.2" cy="12.4" r="0.9" fill="#08110e" />
    <!-- wisdom pearl -->
    <circle cx="32" cy="30" r="2.4" fill="#f0d18a" />
    <circle cx="32" cy="30" r="2.4" fill="#f0d18a" opacity="0.4" class="pearl-halo" />
  </svg>
</template>

<style scoped>
.imugi-mark {
  display: block;
  flex-shrink: 0;
}
.imugi-mark.glow {
  filter: drop-shadow(0 0 6px rgba(18, 201, 140, 0.5));
}
.pearl-halo {
  transform-box: fill-box;
  transform-origin: center;
  animation: pearl 3.6s ease-in-out infinite;
}
@keyframes pearl {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.35;
  }
  50% {
    transform: scale(1.9);
    opacity: 0;
  }
}
</style>
