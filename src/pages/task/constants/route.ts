import { TASK_PAGE_ROUTE_PARAMS } from '@/shared/constants';

export const TASK_PAGE_ROUTE = {
  ...TASK_PAGE_ROUTE_PARAMS,
  component: () => import('../ui/Task.vue'),
};
