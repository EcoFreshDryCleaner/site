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

const optimizeImageUrl = (url) => {
  if (!url || !OPTIMIZE_IMAGES) return url
  
  if (url.includes('cdn.ecofreshdrycleaner.com')) {
    const urlObj = new URL(url)
    const imagePath = urlObj.pathname
    return `https://cdn.ecofreshdrycleaner.com/cdn-cgi/image/format=auto,width=400,height=200,quality=85,fit=cover${imagePath}`
  }
  
  return url
}

const fetchServices = async () => {
  console.log('🔍 fetchServices called - SSR:', import.meta.env.SSR)
  
  try {
    loading.value = true
    error.value = null
    
    let firestoreServices = []
    
    if (import.meta.env.SSR) {
      console.log('📦 Using local services data for SSG build')
      console.log('📊 Available services:', servicesData.map(s => s.slug))
      firestoreServices = servicesData
    } else {
      console.log('🌐 Fetching services from Firestore')
      firestoreServices = await servicesService.getAllServices()
    }
    
    services.value = firestoreServices.map((service) => ({
      name: service.title,
      description: service.subtitle,
      slug: service.slug,
      image: optimizeImageUrl(service.heroImage),
      features: service.overview?.features?.slice(0, 3) || [],
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
  router.push(`/service/${service.slug}`)
}

if (import.meta.env.SSR) {
  console.log('🚀 SSG Build - Fetching services for PricingSection')
  fetchServices()
}

onMounted(() => {
  fetchServices()
})
</script>

<style scoped>
.pricing {
  padding: 5rem 0;
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.pricing-card {
  background: var(--bg-primary);
  border-radius: 10px;
  padding: 0;
  border: 1px solid var(--border-medium);
  transition: box-shadow 0.2s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.pricing-card:hover {
  box-shadow: 0 4px 12px var(--shadow-light);
}

.pricing-card.featured {
  border-color: var(--primary-blue);
  border-width: 2px;
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
}

.card-header {
  text-align: center;
  padding: 1.5rem 1.5rem 1rem;
}

.plan-name {
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.plan-description {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin: 0;
}

.card-features {
  padding: 0 1.5rem;
  margin-bottom: 1.5rem;
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
  padding: 0.4rem 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.check-icon {
  color: var(--eco-green);
  font-weight: bold;
  font-size: 1rem;
}

.card-footer {
  text-align: center;
  padding: 0 1.5rem 1.5rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  width: 100%;
}

.btn-primary {
  background: var(--primary-blue);
  color: var(--text-white);
}

.btn-primary:hover {
  background: var(--primary-blue-dark);
}

.featured-badge {
  position: absolute;
  top: 0;
  right: 0;
  background: var(--primary-blue);
  color: var(--text-white);
  padding: 0.4rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 0 10px 0 10px;
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
  padding: 3rem 2rem;
  color: var(--text-muted);
}

.loading-spinner {
  width: 36px;
  height: 36px;
  border: 3px solid var(--bg-secondary);
  border-top: 3px solid var(--primary-blue);
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
  color: var(--error);
}

@media (max-width: 768px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto 2rem auto;
  }

  .section-title {
    font-size: 1.75rem;
  }
}
</style>
