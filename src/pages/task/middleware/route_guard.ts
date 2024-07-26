import type { Task } from "@/entities/tasks";
import { useRouter } from "vue-router";

export const routeGuard = (task: Task | undefined) => {
  const router = useRouter();

  if (!task || !task.isReady) {
    router.push('/');
  }
};
