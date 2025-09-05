<template>
  <div id="home">
    <Navigation @scrollToSection="(sectionId, source) => scrollToSection(sectionId, source)" />

    <main>
      <HeroSection @scrollToSection="(sectionId) => scrollToSection(sectionId, 'hero-section')" />
      <PromotionsSection
        @scrollToSection="(sectionId) => scrollToSection(sectionId, 'promotions-section')"
      />
      <AboutSection />
      <!-- <Gallery /> -->
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <MobileAppSection />
    </main>

    <PromoModal @scrollToSection="(sectionId) => scrollToSection(sectionId, 'promo-modal')" />

    <Footer />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import Navigation from '../components/Navigation.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import PricingSection from '../components/PricingSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import PromotionsSection from '../components/PromotionsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import MobileAppSection from '../components/MobileAppSection.vue'
import PromoModal from '../components/PromoModal.vue'
import Footer from '../components/Footer.vue'

const route = useRoute()

const scrollToSection = (sectionId, debugSource = 'unknown') => {
  const performScroll = () => {
    const element = document.getElementById(sectionId)
    if (element) {
      const elementTop = element.offsetTop
      const offsetTop = elementTop - 70 // Account for fixed navigation

      // Temporarily enable smooth scrolling for this scroll operation
      document.documentElement.style.scrollBehavior = 'smooth'

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })

      // Reset scroll behavior after a short delay
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'auto'
      }, 1000)
    }
  }

  // For hash navigation, wait for the page to be fully rendered
  if (debugSource === 'hash-navigation') {
    const waitForStablePosition = (attempts = 0) => {
      const element = document.getElementById(sectionId)
      if (!element) {
        return
      }

      const currentPosition = element.offsetTop

      // If this is the first check, store the position and check again
      if (attempts === 0) {
        setTimeout(() => waitForStablePosition(1), 50)
        return
      }

      // If position is stable (same as previous check) or we've tried enough times
      if (attempts >= 10 || (attempts > 1 && currentPosition === element.offsetTop)) {
        performScroll()
      } else {
        // Position still changing, wait a bit more
        setTimeout(() => waitForStablePosition(attempts + 1), 50)
      }
    }

    // Start checking position stability
    waitForStablePosition()
  } else {
    // For click navigation, scroll immediately
    performScroll()
  }
}

// Handle hash navigation when coming from other pages
const handleHashNavigation = (event) => {
  // Prevent browser's default hash scrolling behavior
  if (event) {
    event.preventDefault()
  }

  if (route.hash) {
    // Remove the # from the hash
    const sectionId = route.hash.substring(1)

    // Immediately scroll to top to prevent browser's default hash scroll
    window.scrollTo(0, 0)

    // Then scroll to the target section after a delay
    setTimeout(() => {
      scrollToSection(sectionId, 'hash-navigation')
    }, 200)
  }
}

// Store the preventDefault function reference for cleanup
let preventDefaultHashScroll
let handleInitialHash

onMounted(() => {
  // Prevent browser's default hash scrolling behavior globally
  preventDefaultHashScroll = (event) => {
    event.preventDefault()
    event.stopPropagation()
    return false
  }

  // Add event listeners to prevent default hash scrolling
  window.addEventListener('hashchange', preventDefaultHashScroll, true)
  document.addEventListener('hashchange', preventDefaultHashScroll, true)

  // Handle initial hash if present - wait for page to be fully loaded
  handleInitialHash = () => {
    if (route.hash) {
      // Wait a bit more for all resources to load
      setTimeout(() => {
        handleHashNavigation()
      }, 100)
    }
  }

  // Check if page is already loaded
  if (document.readyState === 'complete') {
    handleInitialHash()
  } else {
    // Wait for page to be fully loaded
    window.addEventListener('load', handleInitialHash)
  }

  // Listen for hash changes (when user navigates directly to URLs with hashes)
  window.addEventListener('hashchange', handleHashNavigation)
})

onUnmounted(() => {
  window.removeEventListener('hashchange', handleHashNavigation)
  if (handleInitialHash) {
    window.removeEventListener('load', handleInitialHash)
  }
  if (preventDefaultHashScroll) {
    window.removeEventListener('hashchange', preventDefaultHashScroll, true)
    document.removeEventListener('hashchange', preventDefaultHashScroll, true)
  }
})
</script>

<style>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: var(--text-primary);
  overflow-x: hidden;
}

#home {
  min-height: 100vh;
}

main {
  padding-top: 70px; /* Account for fixed navigation */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Disable browser's default smooth scrolling for hash links to prevent conflicts */
html {
  scroll-behavior: auto;
}

/* Re-enable smooth scrolling only for programmatic scrolling */
.smooth-scroll {
  scroll-behavior: smooth;
}

/* Prevent browser from automatically scrolling to hash elements */
:target {
  scroll-margin-top: 0 !important;
}

/* Ensure all sections have consistent scroll positioning */
section[id] {
  scroll-margin-top: 0 !important;
}

/* Responsive design */
@media (max-width: 768px) {
  /* Footer responsive styles moved to Footer component */
}

/* Utility classes */
.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.btn-primary {
  background: var(--gradient-primary);
  color: var(--text-white);
  box-shadow: 0 4px 15px var(--shadow-primary);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--shadow-primary-hover);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-blue);
  border: 2px solid var(--primary-blue);
}

.btn-secondary:hover {
  background: var(--primary-blue);
  color: var(--text-white);
  transform: translateY(-2px);
}

/* Animation utilities */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--gradient-hero);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--gradient-secondary);
}
</style>
