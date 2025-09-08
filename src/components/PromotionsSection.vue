<template>
  <section id="promotions" class="promotions">
    <!-- Background Pattern -->
    <div class="promotions-bg-pattern">
      <div class="pattern-leaf leaf-1">
        <FontAwesomeIcon :icon="['fas', 'leaf']" />
      </div>
      <div class="pattern-leaf leaf-2">
        <FontAwesomeIcon :icon="['fas', 'leaf']" />
      </div>
      <div class="pattern-leaf leaf-3">
        <FontAwesomeIcon :icon="['fas', 'leaf']" />
      </div>
      <div class="pattern-circle circle-1"></div>
      <div class="pattern-circle circle-2"></div>
    </div>

    <div class="container">
      <div class="section-header">
        <div class="header-badge">
          <FontAwesomeIcon :icon="['fas', 'gift']" class="badge-icon" />
          <span>Limited Time Offers</span>
        </div>
        <h2 class="section-title">Special Offers & Promotions</h2>
        <p class="section-subtitle">
          Take advantage of our limited-time offers and save on your dry cleaning needs
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <div class="loading-spinner"></div>
        <p>Loading promotions...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="error-state">
        <p>Unable to load promotions. Please try again later.</p>
        <button class="btn btn-primary" @click="loadPromotions">Retry</button>
      </div>

      <!-- Promotions Grid -->
      <div v-else-if="promotions.length > 0" class="promotions-grid">
        <div
          class="promotion-card"
          v-for="promotion in promotions"
          :key="promotion.id"
          :class="{ featured: promotion.featured }"
        >
          <div class="promotion-badge" v-if="promotion.badge">
            {{ promotion.badge }}
          </div>

          <div class="promotion-header">
            <div class="promotion-icon">
              <FontAwesomeIcon :icon="getIconArray(promotion.icon)" />
            </div>
            <div class="promotion-title">{{ promotion.title }}</div>
          </div>

          <div class="promotion-content">
            <p class="promotion-description">{{ promotion.description }}</p>
            <div class="promotion-offer" v-if="promotion.originalPrice || promotion.discountPrice">
              <span class="original-price" v-if="promotion.originalPrice"
                >${{ promotion.originalPrice }}</span
              >
              <span class="discount-price" v-if="promotion.discountPrice"
                >${{ promotion.discountPrice }}</span
              >
            </div>
            <div class="discount-percentage" v-if="promotion.discountPercentage">
              {{ promotion.discountPercentage }} OFF
            </div>
            <div class="discount-code" v-if="promotion.discountCode">
              <span class="code-label">Use Code:</span>
              <span class="code-value">{{ promotion.discountCode }}</span>
            </div>
          </div>

          <div
            class="promotion-features"
            v-if="promotion.features && promotion.features.length > 0"
          >
            <ul class="features-list">
              <li v-for="feature in promotion.features" :key="feature" class="feature-item">
                <span class="check-icon">
                  <FontAwesomeIcon :icon="['fas', 'check']" />
                </span>
                {{ feature }}
              </li>
            </ul>
          </div>

          <div class="promotion-footer">
            <div class="expiry-info" v-if="promotion.expiryDate">
              <span class="expiry-label">Expires:</span>
              <span class="expiry-date">{{ promotion.expiryDate }}</span>
            </div>
          </div>

          <!-- Terms and Conditions Collapsible Section -->
          <div class="terms-section" v-if="promotion.terms">
            <button
              class="terms-toggle"
              @click="toggleTerms(promotion.id)"
              :class="{ expanded: expandedTerms.includes(promotion.id) }"
            >
              <span class="terms-label">Terms & Conditions</span>
              <span class="toggle-icon">{{
                expandedTerms.includes(promotion.id) ? '−' : '+'
              }}</span>
            </button>
            <div class="terms-content" :class="{ expanded: expandedTerms.includes(promotion.id) }">
              <p>{{ promotion.terms }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="empty-state">
        <div class="empty-icon">
          <FontAwesomeIcon :icon="['fas', 'gift']" />
        </div>
        <p>No active promotions at the moment. Check back soon for new offers!</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getPromotions } from '../services/firestoreService'
import { promotionsData } from '../data/promotionsData.js'

const promotions = ref([])
const loading = ref(true)
const error = ref(false)
const expandedTerms = ref([])

const emit = defineEmits([])

// Helper function to convert FontAwesome string to array format
const getIconArray = (iconString) => {
  if (!iconString) return ['fas', 'gift'] // Default icon

  // Handle different formats: 'fa-solid fa-shirt', 'fas fa-shirt', 'fa-shirt'
  if (iconString.startsWith('fa-solid ')) {
    return ['fas', iconString.replace('fa-solid ', '')]
  } else if (iconString.startsWith('fa-regular ')) {
    return ['far', iconString.replace('fa-regular ', '')]
  } else if (iconString.startsWith('fa-brands ')) {
    return ['fab', iconString.replace('fa-brands ', '')]
  } else if (iconString.startsWith('fas ')) {
    return ['fas', iconString.replace('fas ', '')]
  } else if (iconString.startsWith('far ')) {
    return ['far', iconString.replace('far ', '')]
  } else if (iconString.startsWith('fab ')) {
    return ['fab', iconString.replace('fab ', '')]
  } else if (iconString.startsWith('fa-')) {
    // Default to solid if just 'fa-iconname'
    return ['fas', iconString.replace('fa-', '')]
  }

  // Default fallback
  return ['fas', 'gift']
}

const loadPromotions = async () => {
  console.log('🔍 loadPromotions called - SSR:', import.meta.env.SSR)
  
  try {
    loading.value = true
    error.value = false
    
    let data = []
    
    if (import.meta.env.SSR) {
      // During SSG build, use local data
      console.log('📦 Using local promotions data for SSG build')
      console.log('📊 Available promotions:', promotionsData.length)
      data = promotionsData
    } else {
      // During runtime, fetch from Firestore
      console.log('🌐 Fetching promotions from Firestore')
      data = await getPromotions()
    }
    
    // Filter to only show active promotions
    promotions.value = data.filter((promotion) => promotion.active === true)
    console.log('✅ Promotions data set:', promotions.value.length, 'active promotions')
  } catch (err) {
    console.error('Error loading promotions:', err)
    error.value = true
  } finally {
    loading.value = false
    console.log('🏁 loadPromotions completed')
  }
}

const toggleTerms = (promotionId) => {
  const index = expandedTerms.value.indexOf(promotionId)
  if (index > -1) {
    expandedTerms.value.splice(index, 1)
  } else {
    expandedTerms.value.push(promotionId)
  }
}


// During SSG build, load promotions immediately
if (import.meta.env.SSR) {
  console.log('🚀 SSG Build - Loading promotions for PromotionsSection')
  loadPromotions()
}

// Load promotions when component mounts (runtime)
onMounted(() => {
  loadPromotions()
})
</script>

<style scoped>
.promotions {
  padding: 6rem 0;
  background: var(--bg-eco-lighter);
  position: relative;
  overflow: hidden;
}

/* Background Pattern */
.promotions-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.pattern-leaf {
  position: absolute;
  font-size: 2rem;
  animation: float-leaf 8s ease-in-out infinite;
  opacity: 0.1;
  color: var(--eco-green);
}

.leaf-1 {
  top: 15%;
  left: 10%;
  animation-delay: 0s;
}

.leaf-2 {
  top: 25%;
  right: 15%;
  animation-delay: 3s;
}

.leaf-3 {
  bottom: 20%;
  left: 20%;
  animation-delay: 6s;
}

.pattern-circle {
  position: absolute;
  border: 2px solid var(--pattern-medium);
  border-radius: 50%;
  animation: pulse-circle 6s ease-in-out infinite;
}

.circle-1 {
  width: 120px;
  height: 120px;
  top: 10%;
  right: 10%;
  animation-delay: 0s;
}

.circle-2 {
  width: 80px;
  height: 80px;
  bottom: 15%;
  right: 25%;
  animation-delay: 3s;
}

@keyframes float-leaf {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.1;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 0.2;
  }
}

@keyframes pulse-circle {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.header-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--gradient-eco);
  color: white;
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 4px 15px var(--shadow-eco);
}

.badge-icon {
  font-size: 1.2rem;
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

/* Loading State */
.loading-state {
  text-align: center;
  padding: 4rem 0;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid var(--bg-secondary);
  border-top: 4px solid var(--eco-green);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-state p {
  color: var(--text-muted);
  font-size: 1.1rem;
}

/* Error State */
.error-state {
  text-align: center;
  padding: 4rem 0;
  color: var(--error);
}

.error-state p {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 4rem 0;
  color: var(--text-muted);
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
  color: var(--eco-green);
}

.empty-state p {
  font-size: 1.1rem;
}

.promotions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.promotion-card {
  background: var(--bg-primary);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 8px 25px var(--shadow-light);
  border: 2px solid var(--border-eco);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.promotion-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-eco);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.promotion-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px var(--shadow-medium);
  border-color: var(--eco-green-light);
}

.promotion-card:hover::before {
  opacity: 1;
}

.promotion-card.featured {
  border-color: var(--eco-green);
  transform: scale(1.02);
  box-shadow: 0 20px 40px var(--shadow-eco);
}

.promotion-card.featured:hover {
  transform: scale(1.02) translateY(-8px);
}

.promotion-badge {
  position: absolute;
  top: 0;
  right: 0;
  background: var(--gradient-eco);
  color: var(--text-white);
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 0 24px 0 24px;
  box-shadow: 0 4px 15px var(--shadow-eco);
}

.promotion-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.promotion-icon {
  font-size: 2.5rem;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-eco);
  border-radius: 16px;
  color: white;
  box-shadow: 0 4px 15px var(--shadow-eco);
}

.promotion-icon svg {
  font-size: 2rem;
}

.promotion-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
}

.promotion-content {
  margin-bottom: 1.5rem;
}

.promotion-description {
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.promotion-offer {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.original-price {
  color: var(--text-light);
  text-decoration: line-through;
  font-size: 1.1rem;
}

.discount-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--eco-green);
}

.discount-percentage {
  background: var(--gradient-eco);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 4px 15px var(--shadow-eco);
  display: inline-block;
  margin-bottom: 1rem;
}

.discount-code {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--bg-eco-light);
  border-radius: 12px;
  border: 2px dashed var(--eco-green-light);
}

.code-label {
  font-size: 0.9rem;
  color: var(--text-muted);
  font-weight: 500;
}

.code-value {
  font-size: 1rem;
  color: var(--eco-green);
  font-weight: 600;
  font-family: 'Courier New', monospace;
}

.promotion-features {
  margin-bottom: 1.5rem;
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
  font-size: 0.9rem;
}

.check-icon {
  color: var(--eco-green);
  font-weight: bold;
  font-size: 1.1rem;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-eco-light);
  border-radius: 50%;
}

.check-icon svg {
  font-size: 0.8rem;
}

.promotion-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

.expiry-info {
  font-size: 0.9rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.expiry-label {
  font-weight: 500;
}

.expiry-date {
  color: var(--error);
  font-weight: 600;
}

/* Terms and Conditions Section */
.terms-section {
  border-top: 1px solid var(--border-eco);
  margin-top: 1rem;
  padding-top: 1rem;
}

.terms-toggle {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  padding: 0.75rem 0;
  cursor: pointer;
  color: var(--text-secondary);
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.terms-toggle:hover {
  color: var(--eco-green);
}

.terms-toggle.expanded {
  color: var(--eco-green);
  font-weight: 600;
}

.terms-label {
  font-weight: 500;
}

.toggle-icon {
  font-size: 1.2rem;
  font-weight: bold;
  transition: transform 0.2s ease;
}

.terms-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  margin-top: 0;
}

.terms-content.expanded {
  max-height: 200px;
  margin-top: 0.75rem;
  padding: 1rem;
  background: var(--bg-eco-light);
  border-radius: 12px;
  border-left: 4px solid var(--eco-green);
}

.terms-content p {
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.5;
  color: var(--text-secondary);
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}

.btn-primary {
  background: var(--gradient-eco);
  color: white;
  box-shadow: 0 4px 15px var(--shadow-eco);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--shadow-eco);
}

.btn-secondary {
  background: var(--bg-primary);
  color: var(--eco-green);
  border: 2px solid var(--eco-green);
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2);
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
}

.btn-secondary:hover {
  background: var(--eco-green);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--shadow-eco);
}

@media (max-width: 768px) {
  .promotions-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto 4rem auto;
  }

  .promotion-card.featured {
    transform: none;
  }

  .promotion-card.featured:hover {
    transform: translateY(-8px);
  }

  .section-title {
    font-size: 2rem;
  }

  .promotion-footer {
    flex-direction: column;
    align-items: stretch;
  }

  .discount-code {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }

  .pattern-leaf,
  .pattern-circle {
    display: none;
  }
}
</style>
