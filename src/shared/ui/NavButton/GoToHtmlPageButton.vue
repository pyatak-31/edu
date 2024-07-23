<script setup lang="ts">
import { HTML_PAGE_NAME } from '@/shared/constants';
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
    text="HTML"
    :routeName="HTML_PAGE_NAME"
    :disabled="disabled"
  />
</template>
