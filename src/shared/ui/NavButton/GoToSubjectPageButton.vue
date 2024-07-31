<script setup lang="ts">
import { SUBJECT_PAGE_NAME } from '@/shared/constants';
import NavButton from './NavButton.vue';
import type { SubjectId } from '@/shared/types';
import { useSubjects } from '@/entities/subjects';

interface Props {
  disabled?: boolean,
  id: SubjectId,
};
const props = withDefaults(defineProps<Props>(), {
  disabled: false,
});

const { subjectName } = useSubjects({ subjectId: props.id });
</script>

<template>
  <NavButton
    :text="subjectName!"
    :to="{ name: SUBJECT_PAGE_NAME, params: { id } }"
    :disabled="disabled"
  />
</template>
