import type { Task } from "@/shared/types";
import { useRouter } from "vue-router";

export const routeGuard = (task: Task | undefined) => {
  const router = useRouter();

  if (!task || !task.isReady) {
    router.push('/');
  }
};
