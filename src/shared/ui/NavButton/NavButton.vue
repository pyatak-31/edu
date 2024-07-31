<script setup lang="ts">
import { UIButton } from '@/shared/ui';
import { RouterLink } from 'vue-router';
import { computed, useCssModule } from 'vue';

interface Props {
  text: string,
  to: Object,
  disabled?: boolean,
};

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
});

const $style = useCssModule();

const linkClassList = computed(() => {
  return {
    [$style.link]: true,
    [$style.disabled]: props.disabled,
  };
});
</script>

<template>
  <RouterLink
    :class="linkClassList"
    :to="to"
    v-slot="{ navigate }"
  >
    <UIButton
      :text="text"
      :disabled="disabled"
      @click="navigate"
    />
  </RouterLink>
</template>

<style lang="scss" module>
.disabled {
  pointer-events: none;
}
</style>
