import { createRouter, createWebHistory } from 'vue-router';
import Register from '../views/Register.vue';
import VerifyEmail from '../views/VerifyEmail.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import store from '../store';

const routes = [
  {
    path: '/',
    redirect: (to) => {
      const isAuthenticated = store.state.auth.isAuthenticated;
      return isAuthenticated ? '/dashboard' : '/login';
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresGuest: true }
  },
  {
    path: '/verify-email',
    name: 'VerifyEmail',
    component: VerifyEmail,
    meta: { requiresGuest: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresGuest: true }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Guard de navegación
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.auth.isAuthenticated;
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    // Requiere autenticación pero no está autenticado
    next('/login');
  } else if (to.meta.requiresGuest && isAuthenticated) {
    // Es una ruta para invitados pero ya está autenticado
    next('/dashboard');
  } else {
    next();
  }
});

export default router;
