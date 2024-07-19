<template>
  <div>
    <h1>HI</h1>
    p {{ loading }}
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

const loading = ref(false)

onMounted(async () => {
  loading.value = true;
  
 
});

</script>

<style scoped>

</style>