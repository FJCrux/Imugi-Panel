<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { NForm, NFormItem, NInput, NButton, useMessage } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { api, ApiError } from '../api/client'
import ImugiMark from '../components/ImugiMark.vue'

const router = useRouter()
const message = useMessage()
const { t } = useI18n()
const username = ref('')
const password = ref('')
const loading = ref(false)

async function login() {
  loading.value = true
  try {
    await api.post('/api/login', { username: username.value, password: password.value })
    router.push('/')
  } catch (e) {
    message.error(e instanceof ApiError ? e.message : t('login.failed'))
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="wrap">
    <!-- drifting water-light glows -->
    <div class="aura aura-a" />
    <div class="aura aura-b" />

    <div class="card">
      <div class="brand">
        <ImugiMark :size="34" glow />
        <span class="wordmark">Imugi Panel</span>
      </div>
      <p class="sub">{{ t('login.subtitle') }}</p>
      <n-form @keyup.enter="login">
        <n-form-item :label="t('login.username')">
          <n-input v-model:value="username" placeholder="admin" autofocus size="large" />
        </n-form-item>
        <n-form-item :label="t('login.password')">
          <n-input v-model:value="password" type="password" show-password-on="click" size="large" />
        </n-form-item>
        <n-button type="primary" block size="large" :loading="loading" class="cta" @click="login">
          {{ t('login.logIn') }}
        </n-button>
      </n-form>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  overflow: hidden;
  background:
    radial-gradient(1200px 700px at 50% -20%, rgba(18, 201, 140, 0.12), transparent 62%),
    radial-gradient(800px 600px at 100% 100%, rgba(43, 184, 196, 0.08), transparent 55%),
    #08110e;
}
/* Slow-drifting aquatic glows behind the card. */
.aura {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.5;
  pointer-events: none;
}
.aura-a {
  width: 460px;
  height: 460px;
  top: -120px;
  left: 20%;
  background: radial-gradient(circle, rgba(18, 201, 140, 0.4), transparent 65%);
  animation: drift-a 16s ease-in-out infinite;
}
.aura-b {
  width: 380px;
  height: 380px;
  bottom: -100px;
  right: 16%;
  background: radial-gradient(circle, rgba(43, 184, 196, 0.32), transparent 65%);
  animation: drift-b 20s ease-in-out infinite;
}
@keyframes drift-a {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(40px, 30px);
  }
}
@keyframes drift-b {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-36px, -24px);
  }
}
.card {
  position: relative;
  width: 372px;
  background: linear-gradient(180deg, rgba(20, 34, 29, 0.86), rgba(12, 22, 18, 0.9));
  backdrop-filter: blur(16px);
  border: 1px solid rgba(90, 140, 120, 0.22);
  border-radius: 18px;
  padding: 30px 28px;
  box-shadow:
    0 30px 70px rgba(0, 0, 0, 0.55),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
}
.brand {
  display: flex;
  align-items: center;
  gap: 11px;
}
.wordmark {
  font-weight: 750;
  font-size: 21px;
  letter-spacing: -0.01em;
  background: linear-gradient(92deg, #eafff6, #7ff0cb);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.sub {
  margin: 8px 0 22px;
  font-size: 13px;
  opacity: 0.55;
}
.cta {
  box-shadow: 0 8px 24px rgba(18, 201, 140, 0.28);
}
</style>
