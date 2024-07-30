<script setup lang="ts">
import type { Task } from '@/entities/tasks';
import { UIH1, UILink } from '@/shared/ui';
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

      <p :class="[$style.task_text, $style.task_text_description]">
        {{ task.description.text }}
      </p>

      <ul v-if="task.description.instructions" :class="$style.task_description_list">
        <li
          :class="$style.task_description_item"
          v-for="instruction in task.description.instructions"
          :key="instruction"
        >
          {{ instruction }}
        </li>
      </ul>
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

      <UILink
        :class="$style.task_link"
        v-for="link in task.links"
        :key="link"
        :text="link"
        :href="link"
        target="_blank"
      />
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
  line-height: 24px;

  &_description {
    max-width: 1000px;
  }
}

.task_description_list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;
  padding-left: 40px;
  list-style: circle;
}

.task_description_item {
  font-size: 18px;
  line-height: 22px;
}
</style>
