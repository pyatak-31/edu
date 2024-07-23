<script setup lang="ts">
interface Props {
  title: string,
}
defineProps<Props>();
</script>

<template>
  <h1 :class="$style.title">
    {{ title }}
  </h1>
</template>

<style lang="scss" module>
.title {
  color: $gray-960;
  font-size: 35px;
  line-height: 42px;
  font-weight: 700;
}
</style>
