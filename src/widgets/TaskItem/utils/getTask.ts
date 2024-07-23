import {
  CSS_TASK_LIST,
  findTask,
  GIT_TASK_LIST,
  HTML_TASK_LIST,
  JAVASCRIPT_TASK_LIST,
} from "@/entities/tasks";

export const getTask = (id: string) => {
  const taskArr = id.split('-');
  const taskTopic = taskArr[0];

  if (taskTopic === 'git') {
    return findTask(GIT_TASK_LIST, id);
  }

  if (taskTopic === 'html') {
    return findTask(HTML_TASK_LIST, id);
  }

  if (taskTopic === 'css') {
    return findTask(CSS_TASK_LIST, id);
  }

  if (taskTopic === 'js') {
    return findTask(JAVASCRIPT_TASK_LIST, id);
  }

  return undefined;
};
