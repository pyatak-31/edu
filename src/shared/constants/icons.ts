import { defineAsyncComponent, markRaw } from 'vue';

export const ICONS = {
  'x': markRaw(defineAsyncComponent(() => import('icons/X.vue'))),
  'check': markRaw(defineAsyncComponent(() => import('icons/Check.vue'))),
};
