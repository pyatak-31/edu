import { GIT_PAGE_ROUTE_PARAMS } from '@/shared/constants';

export const GIT_PAGE_ROUTE = {
  ...GIT_PAGE_ROUTE_PARAMS,
  component: () => import('../ui/Git.vue'),
};
