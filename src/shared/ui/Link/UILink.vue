<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  text: string,
  href?: string,
  to?: Object,
}
const props = defineProps<Props>();

const componentName = ref(props.href ? 'a' : 'RouterLink');
</script>

<template>
  <Component :is="componentName" :href="href" :class="$style.material_link" :to="to">
    {{ text }}
  </Component>

  <!-- <RouterLink
      :class="taskLinkClassList"
      :to="{ name:  TASK_PAGE_NAME, params: { id: task.id } }"
    >
      {{ task.title }}
    </RouterLink> -->
</template>

<style lang="scss" module>
.material_link {
  color: $blue-640;
  font-size: 20px;
  line-height: 24px;

  &:hover {
    text-decoration: underline; 
  }
}
</style>
