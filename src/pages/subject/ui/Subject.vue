<script setup lang="ts">
import { useMaterials } from '@/entities/materials';
import { useSubjects } from '@/entities/subjects';
import { useTasks } from '@/entities/tasks'; 
import { subjectPageRouteGuard } from '@/shared/middleware';
import type { SubjectId } from '@/shared/types';
import { WidgetSubjectTemplate } from '@/widgets/SubjectTemplate';

interface Props {
  id: SubjectId,
}
const props = defineProps<Props>();

const { subjectName } = useSubjects({ subjectId: props.id });

subjectPageRouteGuard(subjectName.value!);

const { materialList } = useMaterials({ subjectName: subjectName.value });
const { taskList } = useTasks({ subjectName: subjectName.value });
</script>

<template>
  <WidgetSubjectTemplate
    v-if="subjectName && materialList && taskList"
    :title="subjectName"
    :materialList="materialList"
    :taskList="taskList"
  />
</template>
