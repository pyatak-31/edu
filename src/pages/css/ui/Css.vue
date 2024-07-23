<script setup lang="ts">
import { CSS_MATERIALS } from '@/entities/materials';
import { CSS_TASK_LIST } from '@/entities/tasks';
import { WidgetSubjectTemplate } from '@/widgets/SubjectTemplate';
import { routeGuard } from '../middleware';

routeGuard();
</script>

<template>
  <WidgetSubjectTemplate
    title="CSS"
    :materialList="CSS_MATERIALS"
    :taskList="CSS_TASK_LIST"
  />
</template>
