<template>
  <section id="pricing" class="pricing">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Our Services</h2>
        <p class="section-subtitle">
          Professional dry cleaning and laundry services with free pickup and delivery
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <div class="loading-spinner"></div>
        <p>Loading services...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="error-state">
        <p>{{ error }}</p>
        <button class="btn btn-primary" @click="fetchServices">Try Again</button>
      </div>

      <!-- Services Grid -->
      <div v-else class="pricing-grid">
        <div
          class="pricing-card"
          :class="{ featured: service.featured }"
          v-for="service in services"
          :key="service.name"
        >
          <div class="card-image">
            <img :src="service.image" :alt="service.name" />
          </div>
          <div class="card-header">
            <h3 class="plan-name">{{ service.name }}</h3>
            <p class="plan-description">{{ service.description }}</p>
          </div>

          <div class="card-features">
            <ul class="features-list">
              <li v-for="feature in service.features" :key="feature" class="feature-item">
                <span class="check-icon">✓</span>
                {{ feature }}
              </li>
            </ul>
          </div>

          <div class="card-footer">
            <button class="btn btn-primary" @click="selectService(service)">
              {{ 'Learn More' }}
            </button>
          </div>

          <div v-if="service.featured" class="featured-badge">Most Popular</div>
        </div>
      </div>

      <div class="pricing-note">
        <!-- <p>* All services include free pickup and delivery within 10 miles</p>
        <p>* Bulk discounts available for orders over 20 items</p> -->
        <p>* View detailed pricing and place orders in our mobile app</p>
        <p>* Contact us for custom pricing on special items</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { servicesService } from '../services/servicesService.js'
import { servicesData } from '../data/servicesData.js'

const OPTIMIZE_IMAGES = false

const router = useRouter()
const services = ref([])
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
    // - width=400: Width optimized for card display
    // - height=200: Height matches card-image height
    // - quality=85: High quality with good compression
    // - fit=cover: Maintain aspect ratio and cover the container
    return `https://cdn.ecofreshdrycleaner.com/cdn-cgi/image/format=auto,width=400,height=200,quality=85,fit=cover${imagePath}`
  }
  
  return url
}

// Fetch services from Firestore or local data
const fetchServices = async () => {
  console.log('🔍 fetchServices called - SSR:', import.meta.env.SSR)
  
  try {
    loading.value = true
    error.value = null
    
    let firestoreServices = []
    
    if (import.meta.env.SSR) {
      // During SSG build, use local data
      console.log('📦 Using local services data for SSG build')
      console.log('📊 Available services:', servicesData.map(s => s.slug))
      firestoreServices = servicesData
    } else {
      // During runtime, fetch from Firestore
      console.log('🌐 Fetching services from Firestore')
      firestoreServices = await servicesService.getAllServices()
    }
    
    // Map data to the format expected by the template
    services.value = firestoreServices.map((service) => ({
      name: service.title,
      description: service.subtitle,
      slug: service.slug,
      image: optimizeImageUrl(service.heroImage), // Apply Cloudflare optimizations
      features: service.overview?.features?.slice(0, 3) || [], // Show first 3 features
      featured: service.featured || false,
    }))
    
    console.log('✅ Services data set:', services.value.length, 'services')
  } catch (err) {
    console.error('Error fetching services:', err)
    error.value = 'Failed to load services. Please try again later.'
  } finally {
    loading.value = false
    console.log('🏁 fetchServices completed')
  }
}

const selectService = (service) => {
  // Navigate to service detail page
  router.push(`/service/${service.slug}`)
}

// During SSG build, fetch services immediately
if (import.meta.env.SSR) {
  console.log('🚀 SSG Build - Fetching services for PricingSection')
  fetchServices()
}

// Fetch services when component mounts (runtime)
onMounted(() => {
  fetchServices()
})
</script>

<style scoped>
.pricing {
  padding: 6rem 0;
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.pricing-card {
  background: var(--bg-primary);
  border-radius: 20px;
  padding: 0;
  box-shadow: 0 4px 6px var(--transparent-black);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.pricing-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px var(--shadow-light);
}

.pricing-card.featured {
  border-color: var(--primary-blue);
  transform: scale(1.05);
  box-shadow: 0 20px 40px var(--shadow-primary);
}

.pricing-card.featured:hover {
  transform: scale(1.05) translateY(-8px);
}

.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.pricing-card:hover .card-image img {
  transform: scale(1.05);
}

.card-header {
  text-align: center;
  padding: 2rem 2rem 1rem;
  margin-bottom: 0;
}

.plan-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.plan-price {
  margin-bottom: 1rem;
}

.currency {
  font-size: 1.5rem;
  color: var(--primary-blue);
  font-weight: 600;
}

.amount {
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-blue);
  line-height: 1;
}

.period {
  font-size: 1rem;
  color: var(--text-muted);
}

.plan-description {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin: 0;
}

.card-features {
  padding: 0 2rem;
  margin-bottom: 2rem;
  flex: 1;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.check-icon {
  color: var(--accent-green);
  font-weight: bold;
  font-size: 1.1rem;
}

.card-footer {
  text-align: center;
  padding: 0 2rem 2rem;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
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

.featured-badge {
  position: absolute;
  top: 0;
  right: 0;
  background: var(--gradient-primary);
  color: var(--text-white);
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 0 20px 0 20px;
}

.pricing-note {
  text-align: center;
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

.pricing-note p {
  margin: 0.25rem 0;
}

/* Loading and Error States */
.loading-state,
.error-state {
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
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-state p {
  margin-bottom: 1rem;
  color: var(--text-error, #e74c3c);
}

@media (max-width: 768px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto 3rem auto;
  }

  .pricing-card.featured {
    transform: none;
  }

  .pricing-card.featured:hover {
    transform: translateY(-8px);
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
