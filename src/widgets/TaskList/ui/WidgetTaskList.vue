<script setup lang="ts">
import type { Task } from '@/entities/tasks';
import { TaskItem } from './components';

interface Props {
  taskList: Array<Task>,
}
defineProps<Props>();
</script>

<template>  
  <ul :class="$style.material_list">
    <TaskItem
      v-for="task in taskList"
      :key="task.id"
      :task="task"
    />
  </ul>
</template>

<style lang="scss" module>
.material_list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
