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
#home {
  min-height: 100vh;
}

html {
  scroll-behavior: smooth;
}
</style>