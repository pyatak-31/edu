import { HTML_PAGE_ROUTE_PARAMS } from '@/shared/constants';

export const HTML_PAGE_ROUTE = {
  ...HTML_PAGE_ROUTE_PARAMS,
  component: () => import('../ui/Html.vue'),
};
