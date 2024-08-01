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
      case 'SCSS': return 'scss';
      case 'JavaScript': return 'javascript'
      case 'Webpack': return 'webpack';
      case 'Vue 2': return 'vue2';
      case 'Nuxt 2': return 'nuxt2';
      case 'Vite': return 'vite';
      case 'TypeScript': return 'typescript';
      case 'Vue 3': return 'vue3';
      case 'Nuxt 3': return 'nuxt3';
      case 'Docker': return 'docker';
    }
  });

  const subjectName = computed<SubjectName | undefined>(() => {
    switch (params.subjectId) {
      case 'git': return 'GIT';
      case 'html': return 'HTML';
      case 'css': return 'CSS';
      case 'scss': return 'SCSS';
      case 'javascript': return 'JavaScript'
      case 'webpack': return 'Webpack';
      case 'vue2': return 'Vue 2';
      case 'nuxt2': return 'Nuxt 2';
      case 'vite': return 'Vite';
      case 'typescript': return 'TypeScript';
      case 'vue3': return 'Vue 3';
      case 'nuxt3': return 'Nuxt 3';
      case 'docker': return 'Docker';
    }
  });

  return { subjectId, subjectName };
};
