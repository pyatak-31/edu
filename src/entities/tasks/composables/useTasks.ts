import type { SubjectId, SubjectName } from "@/shared/types";
import { computed } from "vue";
import { CSS_TASK_LIST, GIT_TASK_LIST, HTML_TASK_LIST, JAVASCRIPT_TASK_LIST } from "../model";
import { findTask } from "../utils";


interface Params {
  subjectName?: SubjectName,
};

export const useTasks = (params: Params = {}) => {
  const taskList = computed(() => {
    switch (params.subjectName) {
      case 'GIT': return GIT_TASK_LIST;
      case 'HTML': return HTML_TASK_LIST;
      case 'CSS': return CSS_TASK_LIST;
      case 'JavaScript': return JAVASCRIPT_TASK_LIST;
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

  const getTask = (id: string) => {
    const taskArr = id.split('-');
    const subjectId: SubjectId = taskArr[0] as SubjectId;
  
    switch (subjectId) {
      case "git": return findTask(GIT_TASK_LIST, id);
      case "html": return findTask(HTML_TASK_LIST, id);
      case "css": return findTask(CSS_TASK_LIST, id);
      case "javascript": return findTask(JAVASCRIPT_TASK_LIST, id);
      // case "typescript":
      // case "webpack":
      // case "vite":
      // case "vue2":
      // case "vue3":
      // case "nuxt2":
      // case "nuxt3":
      // case "docker":
    }
  };
  
  return { getTask, taskList };
};
