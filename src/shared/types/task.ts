import type { SubjectName } from "./subject";

export interface Task {
  id: string,
  subject: SubjectName,
  title: string,
  description: string,
  condition: string,
  links: Array<string>,
  isDone: boolean,
  isReady: boolean,
};
