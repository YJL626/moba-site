import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home'),
    children: [
      {
        path: 'category/create',
        name: 'categoryCreate',
        component: () => import('@/views/category/edit')
      },
      {
        path: 'category/list',
        name: 'categoryList',
        component: () => import('@/views/category/list')
      },
      {
        path: 'category/edit/:id',
        name: 'categoryCreate',
        component: () => import('@/views/category/edit'),
        props: true
      },

      {
        path: 'item/create',
        name: 'itemCreate',
        component: () => import('@/views/Items/edit')
      },
      {
        path: 'item/list',
        name: 'itemList',
        component: () => import('@/views/Items/list')
      },
      {
        path: 'item/edit/:id',
        name: 'itemCreate',
        component: () => import('@/views/Items/edit'),
        props: true
      },

      {
        path: 'hero/create',
        name: 'heroCreate',
        component: () => import('@/views/Hero/edit')
      },
      {
        path: 'hero/list',
        name: 'heroList',
        component: () => import('@/views/Hero/list')
      },
      {
        path: 'hero/edit/:id',
        name: 'heroCreate',
        component: () => import('@/views/Hero/edit'),
        props: true
      }
    ]
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
