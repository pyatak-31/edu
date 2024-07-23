<script setup lang="ts">
import { GIT_PAGE_NAME } from '@/shared/constants';
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
    text="Git"
    :routeName="GIT_PAGE_NAME"
    :disabled="disabled"
  />
</template>
