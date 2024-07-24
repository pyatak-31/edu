<script setup lang="ts">
import { GIT_MATERIALS } from '@/entities/materials';
import { GIT_TASK_LIST } from '@/entities/tasks';
import { subjectPageRouteGuard } from '@/shared/middleware';
import { WidgetSubjectTemplate } from '@/widgets/SubjectTemplate';

subjectPageRouteGuard('GIT');
</script>

<template>
  <WidgetSubjectTemplate
    title="GIT"
    :materialList="GIT_MATERIALS"
    :taskList="GIT_TASK_LIST"
  />
</template>
