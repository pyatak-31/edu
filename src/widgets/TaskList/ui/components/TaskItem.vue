<script setup lang="ts">
import { TASK_PAGE_NAME } from '@/shared/constants';
import type { Task } from '@/shared/types';
import { UIIcon } from '@/shared/ui';
import { computed, useCssModule } from 'vue';

interface Props {
  task: Task,
}
const props = defineProps<Props>();

const $style = useCssModule();

const taskLinkClassList = computed(() => ({
  [$style.task_link]: true,
  [$style.task_link_done]: props.task.isDone,
}));

const iconClassList = computed(() => ({
  [$style.task_icon]: true,
  [$style.task_icon_done]: props.task.isDone,
}));

const iconName = computed(() => props.task.isDone ? 'check' : 'x');
</script>

<template>  
  <li :class="$style.task_item">
    <RouterLink
      :class="taskLinkClassList"
      :to="{ name:  TASK_PAGE_NAME, params: { id: task.id } }"
    >
      {{ task.title }}
    </RouterLink>

    <UIIcon
      :class="iconClassList"
      :name="iconName"
      title="Не выполнена"
    />
  </li>
</template>

<style lang="scss" module>
.task_item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.task_link {
  color: purple;
  font-size: 20px;

  &:hover {
    text-decoration: underline; 
  }

  &_done {
    color: $green;
  }
}

.task_icon {
  color: $red;

  &_done {
    color: $green;
  }
}
</style>
