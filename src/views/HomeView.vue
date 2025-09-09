<template>
  <div id="home">
    <Navigation />

    <main>
      <HeroSection />
      <PromotionsSection />
      <AboutSection />
      <!-- <Gallery /> -->
      <PricingSection />
      <!-- <TestimonialsSection /> -->
      <ContactSection />
      <MobileAppSection />
    </main>

    <PromoModal />

    <Footer />
  </div>
</template>

<script setup>
import { useHead } from '@unhead/vue'
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

// SEO Meta Tags
useHead({
  title: 'EcoFresh Dry Cleaner - Charlotte, NC Professional Dry Cleaning Services',
  meta: [
    {
      name: 'description',
      content: 'Professional dry cleaning services in Charlotte, NC with eco-friendly solutions. Expert care for your garments with pickup and delivery. Serving Charlotte, Mathews, Mallard Creek, and surrounding areas with quality and convenience.'
    },
    {
      name: 'keywords',
      content: 'dry cleaning Charlotte NC, eco-friendly dry cleaning, Charlotte dry cleaner, pickup delivery Charlotte, professional cleaning Charlotte, garment care Charlotte, laundry services Charlotte, Mathews dry cleaning, Mallard Creek dry cleaning, Piedmont Row dry cleaning'
    },
    {
      property: 'og:title',
      content: 'EcoFresh Dry Cleaner - Charlotte, NC Professional Dry Cleaning Services'
    },
    {
      property: 'og:description',
      content: 'Professional dry cleaning services in Charlotte, NC with eco-friendly solutions. Expert care for your garments with pickup and delivery. Serving Charlotte, Mathews, and surrounding areas.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://ecofreshdrycleaner.com'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'EcoFresh Dry Cleaner - Charlotte, NC Professional Dry Cleaning Services'
    },
    {
      name: 'twitter:description',
      content: 'Professional dry cleaning services in Charlotte, NC with eco-friendly solutions. Expert care for your garments with pickup and delivery. Serving Charlotte, Mathews, and surrounding areas.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://ecofreshdrycleaner.com'
    }
  ]
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