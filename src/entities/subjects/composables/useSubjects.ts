import type { SubjectId, SubjectName } from "@/shared/types";
import { computed } from "vue";

interface Params {
  subjectName?: SubjectName,
  subjectId?: SubjectId,
};

export const useSubjects = (params: Params = {}) => {
  const subjectId = computed<SubjectId | undefined>(() => {
    switch (params.subjectName) {
      case 'GIT': return 'git';
      case 'HTML': return 'html';
      case 'CSS': return 'css';
      case 'JavaScript': return 'javascript'
      // case 'TypeScript':
      // case 'Webpack':
      // case 'Vite':
      // case 'Vue 2':
      // case 'Vue 3':
      // case 'Nuxt 2':
      // case 'Nuxt 3':
      // case 'Docker':
    }
  });

  const subjectName = computed<SubjectName | undefined>(() => {
    switch (params.subjectId) {
      case 'git': return 'GIT';
      case 'html': return 'HTML';
      case 'css': return 'CSS';
      case 'javascript': return 'JavaScript'
      // case 'typescript':
      // case 'webpack':
      // case 'vite':
      // case 'vue2':
      // case 'vue3':
      // case 'nuxt2':
      // case 'nuxt3':
      // case 'docker':
    }
  });

  return { subjectId, subjectName };
};
