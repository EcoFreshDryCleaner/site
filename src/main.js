import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/colors.css'

// FontAwesome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faLeaf,
  faBolt,
  faTruck,
  faUserTie,
  faRecycle,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faMap,
  faMobile,
  faChartBar,
  faCreditCard,
  faBullseye,
  faQrcode,
  faSignal,
  faBatteryFull,
  faUser,
  faBox,
  faClipboardList,
  faArrowLeft,
  faCalendarAlt,
  faPlus,
  faMinus,
  faTimes,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faApple,
  faGooglePlay,
} from '@fortawesome/free-brands-svg-icons'

// Add icons to the library
library.add(
  faLeaf,
  faBolt,
  faTruck,
  faUserTie,
  faRecycle,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faMap,
  faMobile,
  faChartBar,
  faCreditCard,
  faBullseye,
  faQrcode,
  faSignal,
  faBatteryFull,
  faUser,
  faBox,
  faClipboardList,
  faArrowLeft,
  faCalendarAlt,
  faPlus,
  faMinus,
  faTimes,
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faApple,
  faGooglePlay,
  faHeart,
)

const app = createApp(App)

// Register FontAwesome component globally
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
