import { ref, shallowRef } from '@vue/reactivity'
import { provide } from '@vue/runtime-core'
import type { Component } from '@vue/runtime-core'

const useModalInjection = () => {
  const hide = ref(true)
  const containerClass = ref('')
  const component = shallowRef<Component>({ template: '<h1>xD</h1>' })
  const modalInjection = {
    showModal: ({ className, children }: { className: string; children: Component }) => {
      hide.value = false
      containerClass.value = className
      component.value = children
    },
    hideModal: () => {
      hide.value = true
    },
  }

  provide('modal', modalInjection)
  return { modalInjection, hide, containerClass, component }
}

export interface ModalInjection {
  showModal: ReturnType<(typeof useModalInjection)>['modalInjection']['showModal']
  hideModal: ReturnType<(typeof useModalInjection)>['modalInjection']['hideModal']
}

export default useModalInjection
