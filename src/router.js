import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
import store from './store'

Vue.use(Router)

export const router =  new Router({
// export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "EGAT" */ './views/Dashboard.vue')
        },
        {
          path: '/energy',
          name: 'Energy',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "EGAT" */ './views/Energy.vue')
        },
        {
          path: '/icons',
          name: 'icons',
          component: () => import(/* webpackChunkName: "EGAT" */ './views/Icons.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import(/* webpackChunkName: "EGAT" */ './views/UserProfile.vue')
        },
        {
          path: '/maps',
          name: 'maps',
          component: () => import(/* webpackChunkName: "EGAT" */ './views/Maps.vue')
        },
        {
          path: '/tables',
          name: 'tables',
          component: () => import(/* webpackChunkName: "EGAT" */ './views/Tables.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "EGAT" */ './views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "EGAT" */ './views/Register.vue')
        }
      ]
    }
  ]
  
});
router.beforeEach((to, from, next) => {
  // // redirect to login page if not logged in and trying to access a restricted page
  // const publicPages = ['/login', '/register'];
  // const authRequired = !publicPages.includes(to.path);
  
  const loggedIn = store.getters.getState.token;
  
  console.log("loggedIn is " + loggedIn)
  console.log("to.name =" + to.name)

  
  if (to.name !== 'login' && !loggedIn) next({ name: "login" })
  else next()
})
