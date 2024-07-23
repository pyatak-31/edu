import { CSS_PAGE_ROUTE_PARAMS } from '@/shared/constants';

export const CSS_PAGE_ROUTE = {
  ...CSS_PAGE_ROUTE_PARAMS,
  component: () => import('../ui/Css.vue'),
};
