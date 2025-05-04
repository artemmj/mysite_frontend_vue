import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('../components/ArticleDetail.vue'), // Ленивая загрузка
    props: true, // Передача параметра :id как props
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/AppAbout.vue'), // Ленивая загрузка
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
