<script setup lang="ts">
import { WidgetTaskItem } from '@/widgets/TaskItem';
import { getTask } from '@/widgets/TaskItem/utils/getTask';
import { routeGuard } from '../middleware';
import {
  GoToCssPageButton,
  GoToGitPageButton,
  GoToHtmlPageButton,
  GoToJSPageButton,
  GoToMainPageButton,
  UIContainer,
  UISection
} from '@/shared/ui';

interface Props {
  id: string,
}
const props = defineProps<Props>();

const task = getTask(props.id);

routeGuard(task);
</script>

<template>
  <UISection>
    <UIContainer :class="$style.nav_container">
      <GoToMainPageButton />
  
      <GoToGitPageButton v-if="task?.subject === 'GIT'" />
      
      <GoToHtmlPageButton v-if="task?.subject === 'HTML'" />
      
      <GoToCssPageButton v-if="task?.subject === 'CSS'" />

      <GoToJSPageButton v-if="task?.subject === 'JavaScript'" />
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
