import type { SubjectName } from "@/shared/types";

interface TaskDescription {
  text: string,
  instructions?: Array<string>,
} 

export interface Task {
  id: string, // format: SubjectId-порядковый номер
  subject: SubjectName,
  title: string,
  description: TaskDescription,
  condition: string,
  links: Array<string>,
  isDone: boolean,
  isReady: boolean,
};
