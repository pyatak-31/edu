import { SUBJECT_LIST } from "@/entities/subjects";
import { useRouter } from "vue-router";
import type { SubjectName } from "../types";

export const subjectPageRouteGuard = (subjectName: SubjectName) => {
  const router = useRouter();

  const subject = SUBJECT_LIST.find((el) => el.name === subjectName);

  if (!subject?.isReady) {
    router.push('/');
  }
};
