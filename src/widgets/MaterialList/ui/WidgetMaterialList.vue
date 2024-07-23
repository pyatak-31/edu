<script setup lang="ts">
import type { MaterialLink } from '@/shared/types';
import { MaterialItem } from './components';

interface Props {
  materialList: Array<MaterialLink>,
}
defineProps<Props>();
</script>

<template>
  <ul :class="$style.material_list">
    <MaterialItem
      v-for="materialItem in materialList"
      :key="materialItem.label"
      :materialItem="materialItem"
    />
  </ul>
</template>

<style lang="scss" module>
.material_list {
  display: inline-flex;
  flex-direction: column;
  gap: 15px;
}
</style>
