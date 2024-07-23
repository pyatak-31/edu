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
  height: 100%;
  background-color: $green_light_2;
}

.container {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto; 
  padding-right: 15px;
  padding-left: 15px;

  @include sm {
    padding-right: 20px;
    padding-left: 20px;
  }
}
</style>
