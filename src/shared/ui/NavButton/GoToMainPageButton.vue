<script setup lang="ts">
import { MAIN_PAGE_NAME } from '@/shared/constants';
import NavButton from './NavButton.vue';

interface Props {
  disabled?: boolean,
};
withDefaults(defineProps<Props>(), {
  disabled: false,
});
</script>

<template>
  <NavButton
    text="На главную"
    :to="{ name: MAIN_PAGE_NAME }"
    :disabled="disabled"
  />
</template>
