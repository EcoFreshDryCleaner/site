import ServiceDetailView from '../views/ServiceDetailView.vue'
import HomeView from '../views/HomeView.vue'

export const routes = [
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
]
