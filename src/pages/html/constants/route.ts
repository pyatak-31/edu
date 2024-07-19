import { HTML_PAGE_ROUTE_PARAMS } from '@/entities/html';

export const HTML_PAGE_ROUTE = {
  ...HTML_PAGE_ROUTE_PARAMS,
  component: () => import('../ui/Html.vue'),
};
