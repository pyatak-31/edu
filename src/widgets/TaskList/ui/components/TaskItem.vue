<script setup lang="ts">
import type { Task } from '@/entities/tasks';
import { TASK_PAGE_NAME } from '@/shared/constants';
import { UIIcon, UILink } from '@/shared/ui';
import { computed, useCssModule } from 'vue';

interface Props {
  task: Task,
}
const props = defineProps<Props>();

const $style = useCssModule();

const taskLinkClassList = computed(() => ({
  [$style.task_link]: true,
  [$style.task_link_done]: props.task.isDone,
  [$style.task_link_not_ready]: !props.task.isReady,
}));

const iconClassList = computed(() => ({
  [$style.task_icon]: true,
  [$style.task_icon_done]: props.task.isDone,
}));

const iconTitle = computed(() => props.task.isDone ? 'Выполнена' : 'Не выполнена')

const iconName = computed(() => props.task.isDone ? 'check' : 'x');
</script>

<template>  
  <li :class="$style.task_item">
    <UILink
      :text="task.title"
      :class="taskLinkClassList"
      :to="{ name:  TASK_PAGE_NAME, params: { id: task.id } }"
    />

    <UIIcon
      v-if="task.isReady"
      :class="iconClassList"
      :name="iconName"
      :title="iconTitle"
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

  &_done {
    color: $green;
  }

  &_not_ready {
    color: $gray-400;
    pointer-events: none;
  }
}

.task_icon {
  color: $red;

  &_done {
    color: $green;
  }
}
</style>
