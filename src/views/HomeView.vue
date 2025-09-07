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
      <!-- <TestimonialsSection /> -->
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

const scrollToSection = (sectionId) => {
  if (import.meta.env.SSR) return

  const element = document.getElementById(sectionId)
  if (element) {
    const elementTop = element.offsetTop
    const offsetTop = elementTop - 70 // Account for fixed navigation

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    })
  }
}

// Handle hash navigation when coming from other pages
const handleHashNavigation = () => {
  if (import.meta.env.SSR) return

  if (route.hash) {
    // Remove the # from the hash
    const sectionId = route.hash.substring(1)
    
    // Wait for the page to be fully rendered before scrolling
    setTimeout(() => {
      scrollToSection(sectionId)
    }, 100)
  }
}

onMounted(() => {
  if (import.meta.env.SSR) return

  // Handle initial hash if present
  if (route.hash) {
    handleHashNavigation()
  }

  // Listen for hash changes (when user navigates directly to URLs with hashes)
  window.addEventListener('hashchange', handleHashNavigation)
})

onUnmounted(() => {
  if (import.meta.env.SSR) return

  window.removeEventListener('hashchange', handleHashNavigation)
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

/* Enable smooth scrolling for better UX */
html {
  scroll-behavior: smooth;
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
