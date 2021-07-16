<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import logoPng from '@/assets/logo.png'

const { t } = useI18n()

</script>

<template>
  <header class="flex justify-between">
    <img class="w-[75px] h-[52px]" :src="logoPng" />
    <button>{{ t('test') }}</button>
  </header>
</template>
