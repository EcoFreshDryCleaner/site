import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes, scrollBehavior } from './router'
import './styles/colors.css'

// FontAwesome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  ({ app, router, routes, isClient, initialState }) => {
    // Register FontAwesome component globally
    app.component('FontAwesomeIcon', FontAwesomeIcon)
  },
)

// Export includedRoutes function as per documentation
export async function includedRoutes(paths, routes) {
  const { servicesData } = await import('./data/servicesData')

  return ['/', ...servicesData.map((service) => `/service/${service.slug}`)]
}
