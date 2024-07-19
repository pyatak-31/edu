import { MAIN_PAGE_ROUTE_PARAMS } from '@/entities/main';

export const MAIN_PAGE_ROUTE = {
  ...MAIN_PAGE_ROUTE_PARAMS,
  component: () => import('../ui/Main.vue'),
};
