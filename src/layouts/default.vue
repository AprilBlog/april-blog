<script setup lang="ts">
import useModalInjection from '@/utils/useModalInjection'

const { hide, containerClass, component } = useModalInjection()

</script>

<template>
  <main class="py-9 px-[132px] min-h-[100vh]">
    <Header />
    <router-view />
    <Modal :hide="hide" :container-class="containerClass">
      <component :is="component" />
    </Modal>
  </main>
</template>
