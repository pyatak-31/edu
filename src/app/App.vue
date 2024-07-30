<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main :class="$style.main">
    <RouterView />
  </main>
</template>

<style lang="scss" module>
.main {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  background-color: $green_light_2;
}
</style>
