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
              <p><FontAwesomeIcon :icon="['fas', 'phone']" /> (555) 123-4567</p>
              <p><FontAwesomeIcon :icon="['fas', 'envelope']" /> hello@ecofriendlydrycleaner.com</p>
              <p>
                <FontAwesomeIcon :icon="['fas', 'map-marker-alt']" /> 123 Green Street, Eco City, EC
                12345
              </p>
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
  color: #1a202c;
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
  background: #1a202c;
  color: white;
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
  background: linear-gradient(45deg, #3b82f6 0%, #1d4ed8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-description {
  color: #a0aec0;
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
  background: rgba(255, 255, 255, 0.1);
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
  background: #3b82f6;
  transform: translateY(-2px);
}

.footer-heading {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #e2e8f0;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-links a {
  color: #a0aec0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #3b82f6;
}

.contact-info p {
  color: #a0aec0;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-info p svg {
  font-size: 1rem;
  width: 16px;
}

.footer-bottom {
  border-top: 1px solid #2d3748;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom p {
  color: #a0aec0;
  font-size: 0.9rem;
}

.footer-legal {
  display: flex;
  gap: 2rem;
}

.footer-legal a {
  color: #a0aec0;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-legal a:hover {
  color: #3b82f6;
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
  background: linear-gradient(45deg, #3b82f6, #1d4ed8);
  color: white;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}

.btn-secondary {
  background: transparent;
  color: #3b82f6;
  border: 2px solid #3b82f6;
}

.btn-secondary:hover {
  background: #3b82f6;
  color: white;
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
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
}
</style>
