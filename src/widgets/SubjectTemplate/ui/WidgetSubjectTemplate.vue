<script setup lang="ts">
import type { MaterialLink } from '@/entities/materials';
import type { Task } from '@/entities/tasks';
import type { SubjectName } from '@/shared/types';
import { GoToMainPageButton, UIContainer, UIH1, UIH2, UISection } from '@/shared/ui';
import { WidgetMaterialList } from '@/widgets/MaterialList';
import { WidgetTaskList } from '@/widgets/TaskList';

interface Props {
  title: SubjectName,
  materialList: Array<MaterialLink>,
  taskList: Array<Task>,
}
defineProps<Props>();
</script>

<template>
  <UISection>
    <UIContainer>
      <GoToMainPageButton />
    </UIContainer>
  </UISection>
  <UISection>
    <UIContainer>
      <UIH1 :title="title" />
    </UIContainer>
  </UISection>
  <UISection>
    <UIContainer>
      <UIH2 :class="$style.section_title" title="Вспомогательные материалы" />
  
      <WidgetMaterialList :materialList="materialList" />
    </UIContainer>
  </UISection>
  <UISection>
    <UIContainer>
      <UIH2 :class="$style.section_title" title="Задачи" />
      
      <WidgetTaskList :taskList="taskList" />
    </UIContainer>
  </UISection>
</template>

<style lang="scss" module>
.section_title {
  margin-bottom: 20px;
}
</style>
