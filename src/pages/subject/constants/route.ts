import { SUBJECT_PAGE_ROUTE_PARAMS } from '@/shared/constants';

export const SUBJECT_PAGE_ROUTE = {
  ...SUBJECT_PAGE_ROUTE_PARAMS,
  component: () => import('../ui/Subject.vue'),
};
