import { createRouter, createWebHistory } from 'vue-router';
import Signup from '../pages/Signup.vue';
import Login from '../pages/Login.vue';
import Welcome from '../pages/Welcome.vue';
import CarBrands from '../pages/CarBrands.vue';
import AboutUs from '../pages/AboutUs.vue';
import Contact from '../pages/Contact.vue';
import Cars from '../pages/Cars.vue';
import CarDetails from '../components/CarDetails.vue';
import Book from '../pages/Book.vue';

const routes = [
  { path: '/', redirect: '/signup' },
  { path: '/signup', name: 'Signup', component: Signup },
  { path: '/login', name: 'Login', component: Login },
  { path: '/welcome', name: 'Welcome', component: Welcome },
  { path: '/about', name: 'AboutUs', component: AboutUs },
  { path: '/contact', name: 'Contact', component: Contact },

  { path: '/car-brands', name: 'CarBrands', component: CarBrands },

  { path: '/car-brands/cars', name: 'Cars', component: Cars },

  {
    path: '/car-brands/cars/:id',
    name: 'CarDetails',
    component: CarDetails,
    props: true,
  },

  {
    path: '/book/:carId',
    name: 'Book',
    component: Book,
    props: true,
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

  if (authRequired && !isLoggedIn) return next('/login');
  if ((to.path === '/login' || to.path === '/signup') && isLoggedIn) return next('/welcome');
  next();
});

export default router;
