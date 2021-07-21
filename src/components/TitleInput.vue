<script setup lang="ts">
import postButtonIconPng from '@/assets/post-button-icon.png'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>
<template>
  <input
    class="text-7xl  placeholder-[#ACACAC] font-cg outline-none bg-transparent"
    :placeholder="t('titleInput.placeholder', 'Title')"
  />
</template>
