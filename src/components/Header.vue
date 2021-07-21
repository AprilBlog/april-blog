<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import logoPng from '@/assets/logo.png'
import defaultAvatarSvg from '@/assets/default-avatar.svg'
import notificationIconSvg from '@/assets/user-notification-icon.svg'
import homePageIconSvg from '@/assets/user-home-page-icon.svg'
import log from '@/utils/log'
import { inject } from '@vue/runtime-core'
import type { ModalInjection } from '@/utils/useModalInjection'

const { t } = useI18n()

const { showModal } = inject<ModalInjection>('modal')!

const handlePost = (ev: MouseEvent) => {
  showModal({ className: 'w-[479px] h-[326px]', children: { template: '<h1>zaa</h1>' } })
}

</script>

<template>
  <header class="flex justify-between mb-4">
    <img class="min-w-[78px] h-[52px]" :src="logoPng" />
    <div class="flex justify-center items-center">
      <PostButton @click="handlePost" />
      <img class="h-[52px] ml-5" :src="defaultAvatarSvg" />
      <img class="w-7 h-8 ml-5" :src="notificationIconSvg" />
      <img class="w-7 h-8 ml-5" :src="homePageIconSvg" />
    </div>
  </header>
</template>
