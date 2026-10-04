import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('../views/AboutView.vue')
  },

  {
    path: '/contact',
    name: 'contact',

    component: () => import('../views/Contact.vue')
  },
  {
    path: '/user',
    name: 'user',

    component: () => import('../views/User.vue')
  },
  {
    path: '/apigold',
    name: 'apigold',

    component: () => import('../views/api_gold.vue')
  },
  {
    path: '/grade',
    name: 'grade',

    component: () => import('../views/Grade.vue')
  },
    {
    path: '/product',
    name: 'product',

    component: () => import('../views/Product_api.vue')
  },
      {
    path: '/product',
    name: 'product',

    component: () => import('../views/Product_api.vue')
  },
        {
    path: '/product_t',
    name: 'product_t',

    component: () => import('../views/Product_tabel.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
