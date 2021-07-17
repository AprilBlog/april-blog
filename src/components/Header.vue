<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import logoPng from '@/assets/logo.png'
import postButtonIconPng from '@/assets/post-button-icon.png'
import log from '@/utils/log'

const { t } = useI18n()

const handlePost = (ev: MouseEvent) => {
  log('Post')
}

</script>

<template>
  <header class="flex justify-between">
    <img class="min-w-[78px] h-[52px] " :src="logoPng" />
    <PostButton @click="handlePost">
      <span class="text-2xl font-semibold font-cg">
        {{ t('button.post', 'Post') }}
      </span>
      <img class="ml-1" :src="postButtonIconPng" />
    </PostButton>
  </header>
</template>
