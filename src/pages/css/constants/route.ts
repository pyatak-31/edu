import { CSS_PAGE_ROUTE_PARAMS } from '@/entities/css';

export const CSS_PAGE_ROUTE = {
  ...CSS_PAGE_ROUTE_PARAMS,
  component: () => import('../ui/Css.vue'),
};
