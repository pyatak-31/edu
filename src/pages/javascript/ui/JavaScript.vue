<script setup lang="ts">
import { JAVASCRIPT_MATERIALS } from '@/entities/materials';
import { JAVASCRIPT_TASK_LIST } from '@/entities/tasks';
import { WidgetSubjectTemplate } from '@/widgets/SubjectTemplate';
import { routeGuard } from '../middleware';

routeGuard();
</script>

<template>
  <WidgetSubjectTemplate
    title="JavaScript"
    :materialList="JAVASCRIPT_MATERIALS"
    :taskList="JAVASCRIPT_TASK_LIST"
  />
</template>
