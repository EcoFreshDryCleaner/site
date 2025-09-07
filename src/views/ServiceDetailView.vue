<template>
  <div class="service-detail">
    <!-- Navigation -->
    <Navigation @scrollToSection="scrollToSection" />

    <!-- Loading State -->
    <div v-if="loading" class="loading-state">
      <div class="loading-spinner"></div>
      <p>Loading service details...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="error-state">
      <h2>Service Not Found</h2>
      <p>{{ error }}</p>
      <button class="btn btn-primary" @click="$router.push('/')">Go Home</button>
    </div>

    <!-- Service Content -->
    <template v-else-if="service">
      <!-- Hero Section -->
      <section class="service-hero">
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="service-title">{{ service.title }}</h1>
              <p class="service-subtitle">{{ service.subtitle }}</p>
              <div class="hero-actions">
                <button class="btn btn-primary" @click="scrollToSection('mobile-app')">
                  Schedule Pickup
                </button>
                <button class="btn btn-secondary" @click="scrollToSection('contact')">
                  Contact Us
                </button>
              </div>
            </div>
            <div class="hero-image">
              <img :src="service.heroImage" :alt="service.title" />
            </div>
          </div>
        </div>
      </section>

    <!-- Service Overview -->
    <section class="service-overview">
      <div class="container">
        <div class="overview-content">
          <div class="overview-image">
            <img :src="service.overview.image" :alt="service.title + ' process'" />
          </div>
          <div class="overview-text">
            <h2>{{ service.overview.title }}</h2>
            <p>{{ service.overview.description }}</p>
            <div class="overview-features">
              <div v-for="feature in service.overview.features" :key="feature" class="feature-item">
                <span class="check-icon">✓</span>
                {{ feature }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="service-process">
      <div class="container">
        <h2 class="section-title">Our {{ service.title }} Process</h2>
        <div class="process-steps">
          <div v-for="(step, index) in service.process" :key="index" class="process-step">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <!-- <section class="service-benefits">
      <div class="container">
        <h2 class="section-title">Why Choose Our {{ service.title }} Service</h2>
        <div class="benefits-grid">
          <div v-for="benefit in service.benefits" :key="benefit.title" class="benefit-card">
            <div class="benefit-icon">
              <img :src="benefit.icon" :alt="benefit.title" />
            </div>
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section> -->

    <!-- CTA Section -->
    <section class="service-cta">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Experience Professional {{ service.title }}?</h2>
          <p>Schedule your pickup today and let us take care of your garments with expert care.</p>
          <div class="cta-actions">
            <button class="btn btn-primary" @click="scrollToSection('mobile-app')">
              Schedule Pickup
            </button>
            <button class="btn btn-secondary" @click="scrollToSection('contact')">Get Quote</button>
          </div>
        </div>
      </div>
    </section>

      <!-- Footer -->
      <Footer />
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Navigation from '../components/Navigation.vue'
import Footer from '../components/Footer.vue'
import { servicesService } from '../services/servicesService.js'

const OPTIMIZE_IMAGES = false

const route = useRoute()
const router = useRouter()
const serviceSlug = computed(() => route.params.slug)

const service = ref(null)
const loading = ref(true)
const error = ref(null)

// Function to optimize images using Cloudflare transformations
const optimizeImageUrl = (url) => {
  if (!url || !OPTIMIZE_IMAGES) return url
  
  // Check if it's a Cloudflare CDN URL
  if (url.includes('cdn.ecofreshdrycleaner.com')) {
    // Extract the image path from the full URL
    const urlObj = new URL(url)
    const imagePath = urlObj.pathname
    
    // Apply Cloudflare image transformations using the correct format
    // Format: https://<ZONE>/cdn-cgi/image/<OPTIONS>/<SOURCE-IMAGE>
    // - format=auto: Auto format selection (WebP/AVIF when supported)
    // - width=800: Width optimized for hero display
    // - height=600: Height optimized for hero display
    // - quality=85: High quality with good compression
    // - fit=cover: Maintain aspect ratio and cover the container
    return `https://cdn.ecofreshdrycleaner.com/cdn-cgi/image/format=auto,width=800,height=600,quality=85,fit=cover${imagePath}`
  }
  
  return url
}

// Fetch service from Firestore
const fetchService = async () => {
  try {
    loading.value = true
    error.value = null
    
    const firestoreService = await servicesService.getServiceBySlug(serviceSlug.value)
    
    if (firestoreService) {
      // Apply image optimizations to the service data
      service.value = {
        ...firestoreService,
        heroImage: optimizeImageUrl(firestoreService.heroImage),
        overview: {
          ...firestoreService.overview,
          image: optimizeImageUrl(firestoreService.overview?.image)
        }
      }
    } else {
      error.value = 'Service not found'
    }
  } catch (err) {
    console.error('Error fetching service:', err)
    error.value = 'Failed to load service. Please try again later.'
  } finally {
    loading.value = false
  }
}

const scrollToSection = (sectionId) => {
  if (sectionId === 'mobile-app' || sectionId === 'contact') {
    // Navigate to home page and scroll to section
    router.push({ name: 'home', hash: `#${sectionId}` })
  }
}

onMounted(async () => {
  // Fetch service data
  await fetchService()
})
</script>

<style scoped>
.service-detail {
  min-height: 100vh;
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.service-hero {
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.service-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.service-subtitle {
  font-size: 1.3rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.hero-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 40px var(--shadow-light);
}

/* Service Overview */
.service-overview {
  padding: 6rem 0;
  background: white;
}

.overview-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.overview-text h2 {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

.overview-text p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.overview-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-secondary);
  font-size: 1rem;
}

.check-icon {
  color: var(--accent-green);
  font-weight: bold;
  font-size: 1.2rem;
}

.overview-image img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 15px 30px var(--shadow-light);
}

/* Process Section */
.service-process {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 4rem;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.process-step {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px var(--shadow-light);
}

.step-number {
  width: 50px;
  height: 50px;
  background: var(--gradient-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.step-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.step-content p {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Benefits Section */
.service-benefits {
  padding: 6rem 0;
  background: white;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.benefit-card {
  text-align: center;
  padding: 2rem;
  background: var(--bg-primary);
  border-radius: 15px;
  box-shadow: 0 5px 15px var(--shadow-light);
  transition: transform 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-5px);
}

.benefit-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefit-icon img {
  width: 40px;
  height: 40px;
  filter: brightness(0) invert(1);
}

.benefit-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.benefit-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* CTA Section */
.service-cta {
  padding: 6rem 0;
  background: var(--gradient-hero);
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

/* Buttons */
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

.service-cta .btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.service-cta .btn-secondary:hover {
  background: white;
  color: var(--primary-blue);
}

/* Loading and Error States */
.loading-state,
.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-muted);
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--bg-secondary);
  border-top: 4px solid var(--primary-blue);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-state h2 {
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.error-state p {
  margin-bottom: 2rem;
  color: var(--text-error, #e74c3c);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content,
  .overview-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .service-title {
    font-size: 2.5rem;
  }

  .hero-actions,
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }

  .process-steps {
    grid-template-columns: 1fr;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .service-hero {
    padding: 6rem 0 3rem;
  }
}
</style>
