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
  position: relative;
  display: inline-block;
  max-width: 500px;
  color: $gray-960;
  font-size: 35px;
  line-height: 42px;
  font-weight: 700;

  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: $gray-800;
    border-radius: 30px;
  }
  
  &:before {
    top: 100%;
    left: 0;
    width: 100%;
    height: 3px;
    transform: rotate(2deg);
  }

  &:after {
    top: calc(100% + 7px);
    left: 5px;
    width: 95%;
    height: 2px;
    transform: rotate(3deg);
  }
}
</style>
