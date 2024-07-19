import { createRouter, createWebHistory } from 'vue-router';
import {
  ROUTES_LIST,
} from './routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: ROUTES_LIST,
});

export default router;
