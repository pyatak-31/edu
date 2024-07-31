<script setup lang="ts">
import { WidgetTaskItem } from '@/widgets/TaskItem';
import { routeGuard } from '../middleware';
import {
  GoToMainPageButton,
  GoToSubjectPageButton,
  UIContainer,
  UISection
} from '@/shared/ui';
import { useSubjects } from '@/entities/subjects';
import { useTasks } from '@/entities/tasks';

interface Props {
  id: string,
}
const props = defineProps<Props>();

const { getTask } = useTasks();
const task = getTask(props.id);

routeGuard(task);
const { subjectId } = useSubjects({ subjectName: task?.subject });
</script>

<template>
  <UISection>
    <UIContainer :class="$style.nav_container">
      <GoToMainPageButton />
  
      <GoToSubjectPageButton :id="subjectId!" />
    </UIContainer>
  </UISection>
  <UISection>
    <UIContainer>
      <WidgetTaskItem v-if="task" :task="task" />
    </UIContainer>
  </UISection>
</template>

<style lang="scss" module>
.section_title {
  margin-bottom: 20px;
}

.nav_container {
  display: flex;
  gap: 20px;
}
</style>
