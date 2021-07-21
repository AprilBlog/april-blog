
<script setup lang="ts">
import { inject, toRefs } from 'vue'
import closeIconSvg from '@/assets/close-icon.svg'
import type { ModalInjection } from '@/utils/useModalInjection'

const props = defineProps({
  containerClass: String,
  hide: {
    type: Boolean,
    required: true,
  },
})

const { hide, containerClass } = toRefs(props)

const { hideModal } = inject<ModalInjection>('modal')!

</script>

<template>
  <div :class="{hidden: hide}" class="w-[100vw] h-[100vh] inset-0 absolute">
    <div
      :class="containerClass"
      class="absolute inset-0 m-auto border rounded-[20px] py-[27px] px-[35px]"
    >
      <img
        class="cursor-pointer absolute top-[30px] right-[30px] text-[#282828] w-[18px] h-[18px]"
        :src="closeIconSvg"
        @click="hideModal"
      />
      <slot />
    </div>
  </div>
</template>
