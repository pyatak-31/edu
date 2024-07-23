<script setup lang="ts">
import { computed, useCssModule } from "vue";

type Theme = 'primary'; // | 'dark' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'light'
type Size = 'S' | 'M' | 'L';

interface Props {
  text?: string,
  theme?: Theme,
  size?: Size,
  disabled?: boolean,
};

const props = withDefaults(defineProps<Props>(), {
  theme: 'primary',
  size: 'M',
  disabled: false,
});

const emit = defineEmits(['click']);

const $style = useCssModule();

const themeClassName = computed(() => {
  return $style[`theme_${props.theme}`];
});

const sizeClassName = computed(() => {
  switch (props.size) {
    case 'S': return $style.size_s;
    case 'M': return $style.size_m;
    case 'L': return $style.size_l;
  }
});

const classList = computed(() => {
  return {
    [$style.button]: true,
    [themeClassName.value]: true,
    [sizeClassName.value]: true,
  };
});
</script>

<template>
<button
  :class="classList"
  :disabled="disabled"
  @click="emit('click')"
>
  <slot v-if="!text" />
  {{ text }}
</button>
</template>

<style module lang="scss">
.button {
  padding: 15px 20px;
  border-radius: 35px;
  transition: transform .3s, background-color .5s;
  cursor: pointer;

  &:active {
    transform: translateY(2px);
  }

  &:disabled,
  &[disabled] {
    background-color: $gray-400;
    pointer-events: none;
  }
}

.theme {
  &_primary {
    color: $white;
    background-color: $primary;
    
    &:hover {
      background-color: rgba($primary, .8);
    }
  }
  
  &_success {
    background-color: $success;

    &:hover {}
  }

  &_error {
    background-color: $error;

    &:hover {}
  }

  &_warning {
    background-color: $warning;

    &:hover {}
  }

  &_info {
    background-color: $info;

    &:hover {}
  }
}

.size {

  &_s {
    font-size: 30px;
  }

  &_m {
    font-size: 20px;
  }

  &_l {
    font-size: 12px;
  }
}
</style>
