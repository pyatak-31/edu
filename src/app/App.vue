<script setup lang="ts">
import UICirclesBG from '@/shared/ui/CirclesBG/UICirclesBG.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <UICirclesBG />
  <main :class="$style.main">
    <RouterView />
  </main>
</template>

<style lang="scss" module>
.main {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
}
</style>
