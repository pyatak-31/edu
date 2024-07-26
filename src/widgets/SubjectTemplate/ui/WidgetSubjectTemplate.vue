<script setup lang="ts">
import type { MaterialLink } from '@/entities/materials';
import type { Task } from '@/entities/tasks';
import { GoToMainPageButton, UIContainer, UIH1, UIH2 } from '@/shared/ui';
import { WidgetMaterialList } from '@/widgets/MaterialList';
import { WidgetTaskList } from '@/widgets/TaskList';

interface Props {
  title: string,
  materialList: Array<MaterialLink>,
  taskList: Array<Task>,
}
defineProps<Props>();
</script>

<template>
  <section :class="$style.section">
    <UIContainer>
      <GoToMainPageButton />
    </UIContainer>
  </section>
  <section :class="$style.section">
    <UIContainer>
      <UIH1 :title="title" />
    </UIContainer>
  </section>
  <section :class="$style.section">
    <UIContainer>
      <UIH2 :class="$style.section_title" title="Вспомогательные материалы" />
  
      <WidgetMaterialList :materialList="materialList" />
    </UIContainer>
  </section>
  <section :class="$style.section">
    <UIContainer>
      <UIH2 :class="$style.section_title" title="Задачи" />
      
      <WidgetTaskList :taskList="taskList" />
    </UIContainer>
  </section>
</template>

<style lang="scss" module>
.section {
  padding-top: 15px;
  padding-bottom: 15px;

  &_title {
    margin-bottom: 20px;
  }
}
</style>
