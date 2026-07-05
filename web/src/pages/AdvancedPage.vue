<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import {
  NCard, NForm, NFormItem, NButton, NSpace, NSelect, NInput, NInputNumber,
  NSwitch, NAlert, NDynamicInput, useMessage,
} from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { api, ApiError } from '../api/client'
import type { AdvancedConfig } from '../api/client'
import HelpLabel from '../components/HelpLabel.vue'

const message = useMessage()
const { t } = useI18n()
const loading = ref(false)

const dualStack = ref('USE_FIRST_IP')
const hosts = ref<{ domain: string; ip: string }[]>([])
const metricsLoggingInterval = ref('')
const userHintIsMandatory = ref(false)

const seed = ref<number | null>(null)
const unlockAll = ref(false)
const fragEnable = ref(false)
const fragMaxSleepMs = ref<number | null>(null)
const nonceType = ref('NONCE_TYPE_RANDOM')
const nonceAllUDP = ref(false)
const nonceMinLen = ref<number | null>(null)
const nonceMaxLen = ref<number | null>(null)
const nonceHexes = ref<string[]>([])
const padMiddle = ref<number | null>(null)
const padEnd = ref<number | null>(null)

const dualStackOptions = computed(() => [
  { label: t('advanced.dsUseFirst'), value: 'USE_FIRST_IP' },
  { label: t('advanced.dsPrefer4'), value: 'PREFER_IPv4' },
  { label: t('advanced.dsPrefer6'), value: 'PREFER_IPv6' },
  { label: t('advanced.dsOnly4'), value: 'ONLY_IPv4' },
  { label: t('advanced.dsOnly6'), value: 'ONLY_IPv6' },
])

const nonceTypeOptions = computed(() => [
  { label: t('advanced.nonceRandom'), value: 'NONCE_TYPE_RANDOM' },
  { label: t('advanced.noncePrintable'), value: 'NONCE_TYPE_PRINTABLE' },
  { label: t('advanced.noncePrintableSubset'), value: 'NONCE_TYPE_PRINTABLE_SUBSET' },
  { label: t('advanced.nonceFixed'), value: 'NONCE_TYPE_FIXED' },
])

async function load() {
  loading.value = true
  try {
    const cfg = await api.get<AdvancedConfig>('/api/config/advanced')
    dualStack.value = cfg.dns.dualStack || 'USE_FIRST_IP'
    hosts.value = Object.entries(cfg.dns.hosts ?? {}).map(([domain, ip]) => ({ domain, ip }))
    metricsLoggingInterval.value = cfg.metricsLoggingInterval
    userHintIsMandatory.value = cfg.userHintIsMandatory
    const tp = cfg.trafficPattern
    seed.value = tp.seed
    unlockAll.value = tp.unlockAll
    fragEnable.value = tp.tcpFragment.enable
    fragMaxSleepMs.value = tp.tcpFragment.maxSleepMs
    nonceType.value = tp.nonce.type || 'NONCE_TYPE_RANDOM'
    nonceAllUDP.value = tp.nonce.applyToAllUDPPacket
    nonceMinLen.value = tp.nonce.minLen
    nonceMaxLen.value = tp.nonce.maxLen
    nonceHexes.value = tp.nonce.customHexStrings ?? []
    padMiddle.value = tp.padding.maxMiddlePaddingLen
    padEnd.value = tp.padding.maxEndPaddingLen
  } catch (e) {
    message.error(e instanceof ApiError ? e.message : t('advanced.loadFailed'))
  } finally {
    loading.value = false
  }
}

async function save() {
  const hostMap: Record<string, string> = {}
  for (const h of hosts.value) {
    if (h.domain.trim()) hostMap[h.domain.trim()] = h.ip.trim()
  }
  const payload: AdvancedConfig = {
    dns: { dualStack: dualStack.value, hosts: hostMap },
    metricsLoggingInterval: metricsLoggingInterval.value.trim(),
    userHintIsMandatory: userHintIsMandatory.value,
    trafficPattern: {
      seed: seed.value,
      unlockAll: unlockAll.value,
      tcpFragment: { enable: fragEnable.value, maxSleepMs: fragMaxSleepMs.value },
      nonce: {
        type: nonceType.value,
        applyToAllUDPPacket: nonceAllUDP.value,
        minLen: nonceMinLen.value,
        maxLen: nonceMaxLen.value,
        customHexStrings: nonceHexes.value.filter((h) => h.trim() !== ''),
      },
      padding: { maxMiddlePaddingLen: padMiddle.value, maxEndPaddingLen: padEnd.value },
    },
  }
  try {
    await api.put('/api/config/advanced', payload)
    message.success(t('advanced.applied'))
    await load()
  } catch (e) {
    message.error(e instanceof ApiError ? e.message : t('common.saveFailed'))
  }
}

onMounted(load)
</script>

<template>
  <h2 class="page-title">{{ t('advanced.title') }}</h2>
  <n-space vertical :size="16">
    <n-card :title="t('advanced.dnsTitle')" :loading="loading">
      <n-form>
        <n-form-item>
          <template #label>
            <HelpLabel :label="t('advanced.dualStack')" :help="t('advanced.dualStackHelp')" />
          </template>
          <n-select v-model:value="dualStack" :options="dualStackOptions" style="width: 260px" />
        </n-form-item>
        <n-form-item>
          <template #label>
            <HelpLabel :label="t('advanced.hosts')" :help="t('advanced.hostsHelp')" />
          </template>
          <n-space vertical style="width: 100%">
            <n-space v-for="(h, i) in hosts" :key="i" align="center">
              <n-input v-model:value="h.domain" :placeholder="t('advanced.hostsDomainPlaceholder')" style="width: 240px" />
              <span>→</span>
              <n-input v-model:value="h.ip" placeholder="10.0.0.5" style="width: 160px" />
              <n-button size="tiny" quaternary type="error" @click="hosts.splice(i, 1)">✕</n-button>
            </n-space>
            <n-button size="small" dashed @click="hosts.push({ domain: '', ip: '' })">{{ t('advanced.addMapping') }}</n-button>
          </n-space>
        </n-form-item>
      </n-form>
    </n-card>

    <n-card :title="t('advanced.obfuscationTitle')">
      <n-alert type="info" :show-icon="false" style="margin-bottom: 16px">
        {{ t('advanced.obfuscationAlert') }}
      </n-alert>
      <n-form>
        <n-form-item>
          <template #label>
            <HelpLabel :label="t('advanced.seed')" :help="t('advanced.seedHelp')" />
          </template>
          <n-input-number v-model:value="seed" :placeholder="t('advanced.auto')" style="width: 160px" />
        </n-form-item>
        <n-form-item>
          <template #label>
            <HelpLabel :label="t('advanced.unlockAll')" :help="t('advanced.unlockAllHelp')" />
          </template>
          <n-switch v-model:value="unlockAll" />
        </n-form-item>

        <n-form-item>
          <template #label>
            <HelpLabel :label="t('advanced.tcpFragment')" :help="t('advanced.tcpFragmentHelp')" />
          </template>
          <n-space align="center">
            <n-switch v-model:value="fragEnable" />
            <template v-if="fragEnable">
              <HelpLabel :label="t('advanced.maxSleep')" :help="t('advanced.maxSleepHelp')" />
              <n-input-number v-model:value="fragMaxSleepMs" :min="0" :max="100" :placeholder="t('advanced.auto')" style="width: 140px">
                <template #suffix>ms</template>
              </n-input-number>
            </template>
          </n-space>
        </n-form-item>

        <n-form-item>
          <template #label>
            <HelpLabel :label="t('advanced.noncePattern')" :help="t('advanced.noncePatternHelp')" />
          </template>
          <n-space vertical style="width: 100%">
            <n-space align="center">
              <n-select v-model:value="nonceType" :options="nonceTypeOptions" style="width: 240px" />
              <HelpLabel :label="t('advanced.allUDP')" :help="t('advanced.allUDPHelp')" />
              <n-switch v-model:value="nonceAllUDP" />
            </n-space>
            <n-space
              v-if="nonceType === 'NONCE_TYPE_PRINTABLE' || nonceType === 'NONCE_TYPE_PRINTABLE_SUBSET'"
              align="center"
            >
              <HelpLabel :label="t('advanced.nonceBytes')" :help="t('advanced.nonceBytesHelp')" />
              <n-input-number v-model:value="nonceMinLen" :min="0" :max="12" :placeholder="t('advanced.min')" style="width: 110px" />
              <span>—</span>
              <n-input-number v-model:value="nonceMaxLen" :min="0" :max="12" :placeholder="t('advanced.max')" style="width: 110px" />
            </n-space>
            <div v-if="nonceType === 'NONCE_TYPE_FIXED'">
              <n-dynamic-input v-model:value="nonceHexes" :min="0" @create="() => ''">
                <template #default="{ index }">
                  <n-input
                    :value="nonceHexes[index]"
                    @update:value="(v: string) => (nonceHexes[index] = v)"
                    :placeholder="t('advanced.hexPlaceholder')"
                  />
                </template>
              </n-dynamic-input>
              <p class="hint">{{ t('advanced.hexHint') }}</p>
            </div>
          </n-space>
        </n-form-item>

        <n-form-item>
          <template #label>
            <HelpLabel :label="t('advanced.padding')" :help="t('advanced.paddingHelp')" />
          </template>
          <n-space align="center">
            <span>{{ t('advanced.padMiddle') }}</span>
            <n-input-number v-model:value="padMiddle" :min="0" :max="255" :placeholder="t('advanced.auto')" style="width: 110px" />
            <span>{{ t('advanced.padEnd') }}</span>
            <n-input-number v-model:value="padEnd" :min="0" :max="255" :placeholder="t('advanced.auto')" style="width: 110px" />
            <span>{{ t('advanced.bytes') }}</span>
          </n-space>
        </n-form-item>
      </n-form>
    </n-card>

    <n-card :title="t('advanced.serverTitle')">
      <n-form>
        <n-form-item>
          <template #label>
            <HelpLabel :label="t('advanced.metricsInterval')" :help="t('advanced.metricsIntervalHelp')" />
          </template>
          <n-input v-model:value="metricsLoggingInterval" :placeholder="t('advanced.metricsIntervalPlaceholder')" style="width: 200px" />
        </n-form-item>
        <n-form-item>
          <template #label>
            <HelpLabel :label="t('advanced.userHint')" :help="t('advanced.userHintHelp')" />
          </template>
          <n-switch v-model:value="userHintIsMandatory" />
        </n-form-item>
      </n-form>
    </n-card>

    <n-button type="primary" @click="save">{{ t('common.apply') }}</n-button>
  </n-space>
</template>

<style scoped>
.hint {
  font-size: 12px;
  opacity: 0.6;
  margin-top: 8px;
}
</style>
