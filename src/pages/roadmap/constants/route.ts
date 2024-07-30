import { ROADMAP_PAGE_ROUTE_PARAMS } from '@/shared/constants';

export const ROADMAP_PAGE_ROUTE = {
  ...ROADMAP_PAGE_ROUTE_PARAMS,
  component: () => import('../ui/Roadmap.vue'),
};
