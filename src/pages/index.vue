<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const name = ref('April')
const { t } = useI18n()
</script>

<template>
  <div>
    <TitleInput />
  </div>
</template>
