<script setup lang="ts">
import { GIT_MATERIALS } from '@/entities/materials';
import { GIT_TASK_LIST } from '@/entities/tasks';
import { WidgetSubjectTemplate } from '@/widgets/SubjectTemplate';
import { routeGuard } from '../middleware';

routeGuard();
</script>

<template>
  <WidgetSubjectTemplate
    title="GIT"
    :materialList="GIT_MATERIALS"
    :taskList="GIT_TASK_LIST"
  />
</template>
