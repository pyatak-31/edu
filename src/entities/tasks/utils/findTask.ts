import type { Task } from "@/shared/types";

export const findTask = (taskList: Array<Task>, id: string) => {
  return taskList.find((item) => item.id === id);
};
