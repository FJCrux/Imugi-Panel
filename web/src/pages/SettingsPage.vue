<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { NCard, NForm, NFormItem, NInput, NButton, NSpace, NAlert, NUpload, NText, useMessage, useDialog } from 'naive-ui'
import type { UploadFileInfo } from 'naive-ui'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { api, ApiError } from '../api/client'
import { BASE } from '../base'
import type { Settings } from '../api/client'
import HelpLabel from '../components/HelpLabel.vue'

const message = useMessage()
const dialog = useDialog()
const router = useRouter()
const { t } = useI18n()

const backupPass = ref('')
const restorePass = ref('')
const restoreFile = ref<File | null>(null)
const busy = ref(false)

async function downloadBackup() {
  busy.value = true
  try {
    // Passphrase goes in the body: query strings end up in proxy logs.
    const res = await fetch(`${BASE}/api/backup`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/json' },
      body: JSON.stringify({ passphrase: backupPass.value }),
    })
    if (!res.ok) throw new Error(await res.text())
    const blob = await res.blob()
    const cd = res.headers.get('Content-Disposition') || ''
    const name = /filename="?([^"]+)"?/.exec(cd)?.[1] || 'imugi-panel-backup.tar.gz'
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = name
    a.click()
    URL.revokeObjectURL(a.href)
    backupPass.value = ''
  } catch (e) {
    message.error(e instanceof Error ? e.message : t('backup.downloadFailed'))
  } finally {
    busy.value = false
  }
}

function onRestoreFile(options: { fileList: UploadFileInfo[] }) {
  restoreFile.value = options.fileList[0]?.file ?? null
}

function confirmRestore() {
  if (!restoreFile.value) {
    message.error(t('backup.pickFile'))
    return
  }
  dialog.warning({
    title: t('backup.restoreTitle'),
    content: t('backup.restoreConfirm'),
    positiveText: t('backup.restore'),
    negativeText: t('common.cancel'),
    onPositiveClick: doRestore,
  })
}

async function doRestore() {
  busy.value = true
  try {
    const fd = new FormData()
    fd.append('archive', restoreFile.value as File)
    if (restorePass.value) fd.append('passphrase', restorePass.value)
    const res = await fetch(`${BASE}/api/restore`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
      body: fd,
    })
    if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || 'restore failed')
    message.info(t('backup.restoring'))
    setTimeout(() => window.location.reload(), 6000)
  } catch (e) {
    message.error(e instanceof Error ? e.message : t('backup.restoreFailed'))
  } finally {
    busy.value = false
  }
}

const publicHost = ref('')
const panelUrl = ref('')
const basePath = ref('')
const sharePath = ref('')
const restartPending = ref(false)
const currentPassword = ref('')
const newUsername = ref('')
const newPassword = ref('')

async function load() {
  try {
    const s = await api.get<Settings>('/api/settings')
    publicHost.value = s.publicHost
    panelUrl.value = s.panelUrl
    basePath.value = s.basePath
    sharePath.value = s.sharePath
    restartPending.value = s.restartPending
  } catch (e) {
    message.error(e instanceof ApiError ? e.message : t('settings.loadFailed'))
  }
}

async function saveServer() {
  try {
    await api.put('/api/settings', {
      publicHost: publicHost.value,
      panelUrl: panelUrl.value,
      basePath: basePath.value,
      sharePath: sharePath.value,
    })
    message.success(t('settings.saved'))
    await load()
  } catch (e) {
    message.error(e instanceof ApiError ? e.message : t('common.saveFailed'))
  }
}

function confirmRestart() {
  dialog.warning({
    title: t('settings.restartTitle'),
    content: t('settings.restartBody'),
    positiveText: t('settings.restartTitle'),
    negativeText: t('common.cancel'),
    onPositiveClick: restartPanel,
  })
}

async function restartPanel() {
  try {
    // Persist current settings first so the restart picks them up.
    await api.put('/api/settings', {
      publicHost: publicHost.value,
      panelUrl: panelUrl.value,
      basePath: basePath.value,
      sharePath: sharePath.value,
    })
    await api.post('/api/panel/restart')
    message.info(t('settings.restarting'))
    setTimeout(() => window.location.reload(), 5000)
  } catch (e) {
    message.error(e instanceof ApiError ? e.message : t('settings.restartFailed'))
  }
}

async function changePassword() {
  try {
    await api.put('/api/settings/password', {
      currentPassword: currentPassword.value,
      newUsername: newUsername.value,
      newPassword: newPassword.value,
    })
    message.success(t('settings.credsChanged'))
    router.push('/login')
  } catch (e) {
    message.error(e instanceof ApiError ? e.message : t('settings.changeFailed'))
  }
}

onMounted(load)
</script>

<template>
  <h2 class="page-title">{{ t('settings.title') }}</h2>
  <n-space vertical :size="16">
    <n-card :title="t('settings.serverTitle')">
      <n-alert type="info" :show-icon="false" style="margin-bottom: 16px">
        {{ t('settings.serverIntro') }}
      </n-alert>
      <n-form>
        <n-form-item style="margin-bottom: 14px">
          <template #label>
            <HelpLabel :label="t('settings.publicHost')" :help="t('settings.publicHostHelp')" />
          </template>
          <n-input v-model:value="publicHost" :placeholder="t('settings.publicHostPlaceholder')" style="max-width: 380px" />
          <template #feedback>{{ t('settings.publicHostHint') }}</template>
        </n-form-item>
        <n-form-item>
          <template #label>
            <HelpLabel :label="t('settings.panelUrl')" :help="t('settings.panelUrlHelp')" />
          </template>
          <n-input v-model:value="panelUrl" placeholder="https://vpn.example.com" style="max-width: 380px" />
          <template #feedback>{{ t('settings.panelUrlHint') }}</template>
        </n-form-item>
        <n-button type="primary" @click="saveServer">{{ t('common.save') }}</n-button>
      </n-form>
    </n-card>

    <n-card :title="t('settings.pathsTitle')">
      <n-alert v-if="restartPending" type="warning" :title="t('settings.restartRequired')" style="margin-bottom: 14px">
        {{ t('settings.restartPendingBody') }}
      </n-alert>
      <n-alert type="info" :show-icon="false" style="margin-bottom: 14px">
        {{ t('settings.pathsAlert') }}
      </n-alert>
      <n-form>
        <n-form-item>
          <template #label>
            <HelpLabel :label="t('settings.basePath')" :help="t('settings.basePathHelp')" />
          </template>
          <n-input v-model:value="basePath" :placeholder="t('settings.basePathPlaceholder')" style="max-width: 380px" />
        </n-form-item>
        <n-form-item>
          <template #label>
            <HelpLabel :label="t('settings.sharePath')" :help="t('settings.sharePathHelp')" />
          </template>
          <n-input v-model:value="sharePath" placeholder="/s" style="max-width: 380px" />
        </n-form-item>
        <n-space>
          <n-button type="primary" @click="saveServer">{{ t('common.save') }}</n-button>
          <n-button type="warning" secondary @click="confirmRestart">{{ t('settings.saveRestart') }}</n-button>
        </n-space>
      </n-form>
    </n-card>

    <n-card :title="t('backup.title')">
      <n-alert type="info" :show-icon="false" style="margin-bottom: 14px">
        {{ t('backup.intro') }}
      </n-alert>
      <n-form>
        <n-form-item>
          <template #label>
            <HelpLabel :label="t('backup.passphrase')" :help="t('backup.passphraseHelp')" />
          </template>
          <n-input
            v-model:value="backupPass"
            type="password"
            show-password-on="click"
            :placeholder="t('backup.passphraseOptional')"
            style="max-width: 380px"
          />
        </n-form-item>
        <n-button type="primary" :loading="busy" @click="downloadBackup">{{ t('backup.download') }}</n-button>
      </n-form>

      <div class="restore">
        <n-text depth="3" style="font-size: 13px">{{ t('backup.restoreHeading') }}</n-text>
        <n-form style="margin-top: 10px">
          <n-form-item :label="t('backup.file')">
            <n-upload :max="1" :default-upload="false" @change="onRestoreFile">
              <n-button>{{ t('backup.chooseFile') }}</n-button>
            </n-upload>
          </n-form-item>
          <n-form-item :label="t('backup.restorePassphrase')">
            <n-input
              v-model:value="restorePass"
              type="password"
              show-password-on="click"
              :placeholder="t('backup.passphraseIfEncrypted')"
              style="max-width: 380px"
            />
          </n-form-item>
          <n-button type="warning" secondary :loading="busy" @click="confirmRestore">{{ t('backup.restore') }}</n-button>
        </n-form>
      </div>
    </n-card>

    <n-card :title="t('settings.adminTitle')">
      <n-form style="max-width: 380px">
        <n-form-item :label="t('settings.currentPassword')">
          <n-input v-model:value="currentPassword" type="password" show-password-on="click" />
        </n-form-item>
        <n-form-item :label="t('settings.newUsername')">
          <n-input v-model:value="newUsername" :placeholder="t('settings.newUsernamePlaceholder')" />
        </n-form-item>
        <n-form-item :label="t('settings.newPassword')">
          <n-input v-model:value="newPassword" type="password" show-password-on="click" />
        </n-form-item>
        <n-button type="primary" @click="changePassword">{{ t('settings.changeCreds') }}</n-button>
      </n-form>
      <p class="hint">{{ t('settings.logoutNote') }}</p>
    </n-card>
  </n-space>
</template>

<style scoped>
.hint {
  font-size: 12px;
  opacity: 0.6;
  margin-top: 12px;
}
.restore {
  margin-top: 22px;
  padding-top: 18px;
  border-top: 1px solid var(--n-border-color, #26262c);
}
</style>
