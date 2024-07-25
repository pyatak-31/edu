import type { SubjectName } from "./subject";

interface TaskDescription {
  text: string,
  instructions?: Array<string>,
} 

export interface Task {
  id: string,
  subject: SubjectName,
  title: string,
  description: TaskDescription,
  condition: string,
  links: Array<string>,
  isDone: boolean,
  isReady: boolean,
};
