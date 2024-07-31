import type { SubjectName } from "@/shared/types";
import { computed } from "vue";
import { CSS_MATERIALS, GIT_MATERIALS, HTML_MATERIALS, JAVASCRIPT_MATERIALS } from "../model";

interface Params {
  subjectName?: SubjectName,
};

export const useMaterials = (params: Params = {}) => {
  const materialList = computed(() => {
    switch (params.subjectName) {
      case 'GIT': return GIT_MATERIALS;
      case 'HTML': return HTML_MATERIALS;
      case 'CSS': return CSS_MATERIALS;
      case 'JavaScript': return JAVASCRIPT_MATERIALS;
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
  

  return { materialList };
};
