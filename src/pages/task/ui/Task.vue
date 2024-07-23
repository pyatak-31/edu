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
  UIContainer
} from '@/shared/ui';

interface Props {
  id: string,
}
const props = defineProps<Props>();

const task = getTask(props.id);

routeGuard(task);
</script>

<template>
  <section :class="$style.section">
    <UIContainer :class="$style.nav_container">
      <GoToMainPageButton />
  
      <GoToGitPageButton v-if="task?.subject === 'GIT'" />
      
      <GoToHtmlPageButton v-if="task?.subject === 'HTML'" />
      
      <GoToCssPageButton v-if="task?.subject === 'CSS'" />

      <GoToJSPageButton v-if="task?.subject === 'JavaScript'" />
    </UIContainer>
  </section>
  <section :class="$style.section">
    <UIContainer>
      <WidgetTaskItem v-if="task" :task="task" />
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

.nav_container {
  display: flex;
  gap: 20px;
}
</style>
