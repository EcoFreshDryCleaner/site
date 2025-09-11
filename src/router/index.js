import ServiceDetailView from '../views/ServiceDetailView.vue'
import HomeView from '../views/HomeView.vue'
import ThankYouView from '../views/ThankYouView.vue'
import NotFoundView from '../views/NotFoundView.vue'

// Track if page has loaded to avoid repeated delays
let pageHasLoaded = false

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
  {
    path: '/thank-you',
    name: 'thank-you',
    component: ThankYouView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
  },
]

// Scroll behavior configuration
export const scrollBehavior = (to, from, savedPosition) => {
    console.log('🔍 ScrollBehavior Debug:', {
      to: to.path + (to.hash || ''),
      from: from.path + (from.hash || ''),
      toHash: to.hash,
      savedPosition,
      timestamp: new Date().toISOString()
    })
    
    if (savedPosition && from.path !== to.path) {
      console.log('📍 Restoring saved position:', savedPosition)
      return savedPosition
    }
    
    // If navigating to a route with a hash, scroll to that element
    if (to.hash) {  
      console.log('🎯 Scrolling to hash element:', to.hash)
      
      // Delay scroll if: first page load OR navigating from ServiceDetailView
      const isFromServiceDetail = from.path.startsWith('/service/')
      const shouldDelay = !pageHasLoaded || isFromServiceDetail
      
      if (shouldDelay) {
        console.log(`Delaying scroll - ${!pageHasLoaded ? 'first time' : 'from ServiceDetailView'}`)
        pageHasLoaded = true // Mark as loaded
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              el: to.hash,
              behavior: 'smooth'
            })
          }, 500)
        })
      } else {
        console.log("Page already loaded! No need to delay scroll")
        return {
          el: to.hash,
          behavior: 'smooth'
        }
      }
      
    }
    // If navigating back/forward and there's a saved position, restore it

    
    // For other navigation, scroll to top
    return { top: 0 }
}

