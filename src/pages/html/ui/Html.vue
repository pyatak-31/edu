<script setup lang="ts">
import { HTML_MATERIALS } from '@/entities/materials';
import { HTML_TASK_LIST } from '@/entities/tasks';
import { WidgetSubjectTemplate } from '@/widgets/SubjectTemplate';
import { routeGuard } from '../middleware';

routeGuard();
</script>

<template>
  <WidgetSubjectTemplate
    title="HTML"
    :materialList="HTML_MATERIALS"
    :taskList="HTML_TASK_LIST"
  />
</template>
