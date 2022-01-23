import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from "../utilities/auth"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'signup',
    component: () => import('../components/signup.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/login.vue')
  },
  {
    path: '/home',
    name: "home", 
    component: () => import('../components/home.vue'),
    meta:{
      middleware: auth,
    }
  },
  {
    path: '/create',
    name: "CreateCompany", 
    component: () => import('../components/createcompany.vue'),
    meta:{
      middleware: auth,
    }
  },
  {
    path: '/admin',
    name: 'admin-signup',
    component: () => import('../components/admin/signup.vue')
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    component: () => import('../components/admin/login.vue')
  },
  {
    path: '/admin/profile',
    name: "admin-home", 
    component: () => import('../components/admin/profile.vue'),
    meta:{
      middleware: auth,
    }
  },
    {
      path: '/admin/create_user',
      name: "admin-home",
      component: () => import('../components/admin/createuser.vue'),
      meta:{
        middleware: auth,
      }
    },
    {
      path: '/admin/create_admin',
      name: "admin-home",
      component: () => import('../components/admin/createadmin.vue'),
      meta:{
        middleware: auth,
      }
    },
    {
      path: '/admin/list_users',
      name: "admin-home",
      component: () => import('../components/admin/list_users.vue'),
      meta:{
        middleware: auth,
      }
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router