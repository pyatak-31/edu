import { SUBJECT_LIST } from "@/entities/subjects";
import { useRouter } from "vue-router";

export const routeGuard = () => {
  const router = useRouter();

  const subject = SUBJECT_LIST.find((el) => el.name === 'CSS');

  if (!subject?.isReady) {
    router.push('/');
  }
};
