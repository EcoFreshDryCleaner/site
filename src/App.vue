<script setup>
import Navigation from './components/Navigation.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import PricingSection from './components/PricingSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import PromotionsSection from './components/PromotionsSection.vue'
import ContactSection from './components/ContactSection.vue'
import MobileAppSection from './components/MobileAppSection.vue'
import PromoModal from './components/PromoModal.vue'

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offsetTop = element.offsetTop - 70 // Account for fixed navigation
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    })
  }
}
</script>

<template>
  <div id="app">
    <Navigation @scrollToSection="scrollToSection" />

    <main>
      <HeroSection @scrollToSection="scrollToSection" />
      <PromotionsSection @scrollToSection="scrollToSection" />
      <AboutSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <MobileAppSection />
    </main>

    <PromoModal @scrollToSection="scrollToSection" />

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="footer-title">EcoFresh Dry Cleaner</h3>
            <p class="footer-description">
              Professional eco-friendly dry cleaning services with free pickup and delivery.
            </p>
          </div>

          <div class="footer-section">
            <h4 class="footer-heading">Services</h4>
            <ul class="footer-links">
              <li><a href="#pricing">Basic Clean</a></li>
              <li><a href="#pricing">Premium Care</a></li>
              <li><a href="#pricing">Luxury Service</a></li>
              <li><a href="#mobile-app">Mobile App</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="footer-heading">Company</h4>
            <ul class="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#testimonials">Reviews</a></li>
              <li><a href="#promotions">Offers</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="footer-heading">Contact Info</h4>
            <div class="contact-info">
              <p><FontAwesomeIcon :icon="['fas', 'envelope']" /> hello@ecofreshdrycleaner.com</p>
              <div class="footer-locations">
                <div class="location-item">
                  <FontAwesomeIcon :icon="['fas', 'map-marker-alt']" />
                  <div class="location-details">
                    <strong>Mathews</strong>
                    <span>1115 A Mathews Mint Hill Rd, Mathews, NC 28105</span>
                  </div>
                </div>
                <div class="location-item">
                  <FontAwesomeIcon :icon="['fas', 'map-marker-alt']" />
                  <div class="location-details">
                    <strong>Mallard Creek</strong>
                    <span>2712 W Mallard Creek Church Rd, Charlotte, NC 28262</span>
                  </div>
                </div>
                <div class="location-item">
                  <FontAwesomeIcon :icon="['fas', 'map-marker-alt']" />
                  <div class="location-details">
                    <strong>Piedmont Row</strong>
                    <span>4625 Piedmont Row Dr #145A, Charlotte, NC 28210</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2025 EcoFresh Dry Cleaner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

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

#app {
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

/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}

/* Footer styles */
.footer {
  background: var(--bg-dark);
  color: var(--text-white);
  padding: 4rem 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-description {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: var(--transparent-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-link svg {
  font-size: 1.2rem;
}

.social-link:hover {
  background: var(--primary-blue);
  transform: translateY(-2px);
}

.footer-heading {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--border-medium);
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-links a {
  color: var(--text-light);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--primary-blue);
}

.contact-info p {
  color: var(--text-light);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-info p svg {
  font-size: 1rem;
  width: 16px;
}

.footer-locations {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.location-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.location-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.location-item svg {
  color: var(--primary-blue);
  font-size: 1rem;
  margin-top: 0.125rem;
  flex-shrink: 0;
}

.location-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.location-details strong {
  color: var(--primary-blue);
  font-weight: 600;
  font-size: 0.9rem;
}

.location-details span {
  color: var(--text-light);
  font-size: 0.8rem;
  line-height: 1.3;
}

.footer-bottom {
  border-top: 1px solid var(--border-dark);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom p {
  color: var(--text-light);
  font-size: 0.9rem;
}

.footer-legal {
  display: flex;
  gap: 2rem;
}

.footer-legal a {
  color: var(--text-light);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-legal a:hover {
  color: var(--primary-blue);
}

/* Responsive design */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }

  .footer-legal {
    justify-content: center;
  }
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
