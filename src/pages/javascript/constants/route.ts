import { JAVASCRIPT_PAGE_ROUTE_PARAMS } from '@/entities/javascript';

export const JAVASCRIPT_PAGE_ROUTE = {
  ...JAVASCRIPT_PAGE_ROUTE_PARAMS,
  component: () => import('../ui/JavaScript.vue'),
};
