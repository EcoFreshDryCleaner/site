import { createRouter, createWebHistory } from 'vue-router'
import ServiceDetailView from '../views/ServiceDetailView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/service/:slug',
      name: 'service-detail',
      component: ServiceDetailView,
      props: true,
    },
  ],
})

export default router
