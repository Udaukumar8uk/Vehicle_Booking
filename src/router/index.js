// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Signup from '../pages/Signup.vue';
import Login from '../pages/Login.vue';
import Welcome from '../pages/Welcome.vue';
import CarBrands from '../pages/CarBrands.vue';
import AboutUs from '../pages/AboutUs.vue';
import Contact from '../pages/Contact.vue';
import Mahindra from '../pages/Mahindra.vue';
import MahindraDetail from '../components/MahindraDetail.vue';
import Book from '../pages/Book.vue';

const routes = [
  { path: '/', redirect: '/signup' },
  { path: '/signup', name: 'Signup', component: Signup },
  { path: '/login', name: 'Login', component: Login },
  { path: '/welcome', name: 'Welcome', component: Welcome },
  { path: '/CarBrands', name: 'CarBrands', component: CarBrands },
  { path: '/about', name: 'AboutUs', component: AboutUs },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/mahindra', name: 'Mahindra', component: Mahindra }, 
  {
  path: '/mahindra/:id',
  name: 'MahindraDetail',
  component: MahindraDetail,
  props: true  // <-- add this line
  },

  {
    path: '/book/:carName',
    name: 'Book',
    component: Book
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

  const publicPages = ['/login', '/signup'];
  const authRequired = !publicPages.includes(to.path);

  if (authRequired && !isLoggedIn) {
    return next('/login');
  }

  if ((to.path === '/login' || to.path === '/signup') && isLoggedIn) {
    return next('/welcome');
  }

  next();
});

export default router;
