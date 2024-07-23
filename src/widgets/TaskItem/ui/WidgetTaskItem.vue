<script setup lang="ts">
import type { Task } from '@/shared/types';
import { UIH1 } from '@/shared/ui';
import { computed } from 'vue';

interface Props {
  task: Task,
}

const props = defineProps<Props>();

const taskStatusText = computed(() => props.task.isDone ? 'Выполнено' : 'Не выполнено')
</script>

<template>
  <div>
    <UIH1 :class="$style.task_title" :title="task.title" />

    <div :class="$style.part">
      <h3 :class="$style.part_title">
        Описание задачи
      </h3>
      <p :class="$style.task_text">
        {{ task.description }}
      </p>
    </div>

    <div :class="$style.part">
      <h3 :class="$style.part_title">
        После выполнения
      </h3>
      <p :class="$style.task_text">
        {{ task.condition }}
      </p>
    </div>

    <div :class="$style.part">
      <h3 :class="$style.part_title">
        Ссылки
      </h3>
      <a
        :class="$style.task_link"
        v-for="link in task.links"
        :key="link"
        :href="link"
      >
        {{ link }}
      </a>
    </div>

    <div :class="$style.part">
      <h3 :class="$style.part_title">
        Статус
      </h3>

      <p :class="$style.task_text">
        {{ taskStatusText }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" module>
.task_title {
  margin-bottom: 50px;
}

.part {
  & + & {
    margin-top: 25px;
  }
}

.part_title {
  margin-bottom: 10px;
  color: $gray-960;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
}

.task_text { 
  font-size: 20px;
}

.task_link {
  color: $blue-600;
  font-size: 20px;

  &:hover {
    text-decoration: underline; 
  }
}
</style>
