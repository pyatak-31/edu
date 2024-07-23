<script setup lang="ts">
import { CSS_PAGE_NAME } from '@/shared/constants';
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
    text="CSS"
    :routeName="CSS_PAGE_NAME"
    :disabled="disabled"
  />
</template>
