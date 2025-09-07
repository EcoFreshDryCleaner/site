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

// Scroll behavior configuration
export const scrollBehavior = (to, from, savedPosition) => {
  // If navigating back/forward and there's a saved position, restore it
  if (savedPosition) {
    return savedPosition
  }
  
  // If navigating to home with a hash, don't scroll to top
  if (to.name === 'home' && to.hash) {
    return false
  }
  
  // For other navigation, scroll to top
  return { top: 0 }
}
