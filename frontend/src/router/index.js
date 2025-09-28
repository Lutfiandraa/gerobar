import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Menu from '../views/Menu.vue';
import About from '../views/About.vue';
import Shop from '../views/Shop.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/menu', name: 'Menu', component: Menu },
  { path: '/about', name: 'About', component: About },
  { path: '/shop', name: 'Shop', component: Shop },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;