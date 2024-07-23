<script setup lang="ts">
import { ICONS } from '@/shared/constants';
import type { IconName } from '@/shared/types';
import { computed, useCssModule } from 'vue';

type Size = 'S' | 'M' | 'L';

interface Props {
  name: IconName,
  size: Size,
}
const props = withDefaults(defineProps<Props>(), {
  size: 'M',
});

const $style = useCssModule();

const activeIcon = computed(() => ICONS[props.name])

const iconSizeClassName = computed(() => {
  switch (props.size) {
    case 'S': return $style.size_s;
    case 'M': return $style.size_m;
    case 'L': return $style.size_l;
  }
});

const iconClassList = computed(() => ({
  [$style.icon]: true,
  [iconSizeClassName.value]: true,
}));
</script>

<template>
  <i :class="iconClassList">
    <Component :is="activeIcon" />
  </i>
</template>

<style lang="scss" module>
.icon {
  display: flex;
}

.size {

  &_s {
    font-size: 10px;
  }

  &_m {
    font-size: 16px;
  }

  &_l {
    font-size: 24px;
  }
}
</style>
