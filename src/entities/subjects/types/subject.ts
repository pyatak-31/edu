import type { SubjectName } from "@/shared/types";

export interface Subject {
  name: SubjectName,
  isReady: boolean,
  isDone: boolean,
};
