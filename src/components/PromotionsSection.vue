<template>
  <section id="promotions" class="promotions">
    <div class="container">
      <div class="section-header">
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

const getIconArray = (iconString) => {
  if (!iconString) return ['fas', 'gift']

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
    return ['fas', iconString.replace('fa-', '')]
  }

  return ['fas', 'gift']
}

const loadPromotions = async () => {
  console.log('🔍 loadPromotions called - SSR:', import.meta.env.SSR)
  
  try {
    loading.value = true
    error.value = false
    
    let data = []
    
    if (import.meta.env.SSR) {
      console.log('📦 Using local promotions data for SSG build')
      console.log('📊 Available promotions:', promotionsData.length)
      data = promotionsData
    } else {
      console.log('🌐 Fetching promotions from Firestore')
      data = await getPromotions()
    }
    
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

if (import.meta.env.SSR) {
  console.log('🚀 SSG Build - Loading promotions for PromotionsSection')
  loadPromotions()
}

onMounted(() => {
  loadPromotions()
})
</script>

<style scoped>
.promotions {
  padding: 5rem 0;
  background: var(--bg-secondary);
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

/* Loading State */
.loading-state {
  text-align: center;
  padding: 3rem 0;
}

.loading-spinner {
  width: 36px;
  height: 36px;
  border: 3px solid var(--bg-secondary);
  border-top: 3px solid var(--eco-green);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-state p {
  color: var(--text-muted);
}

/* Error State */
.error-state {
  text-align: center;
  padding: 3rem 0;
  color: var(--error);
}

.error-state p {
  margin-bottom: 1rem;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 3rem 0;
  color: var(--text-muted);
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.4;
  color: var(--eco-green);
}

.promotions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.promotion-card {
  background: var(--bg-primary);
  border-radius: 10px;
  padding: 1.75rem;
  border: 1px solid var(--border-medium);
  transition: box-shadow 0.2s ease;
  position: relative;
}

.promotion-card:hover {
  box-shadow: 0 2px 8px var(--shadow-light);
}

.promotion-card.featured {
  border-color: var(--eco-green);
  border-width: 2px;
}

.promotion-badge {
  position: absolute;
  top: 0;
  right: 0;
  background: var(--eco-green);
  color: var(--text-white);
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 0 10px 0 10px;
}

.promotion-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.promotion-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-eco-light);
  border-radius: 10px;
  color: var(--eco-green);
  flex-shrink: 0;
}

.promotion-icon svg {
  font-size: 1.4rem;
}

.promotion-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-primary);
}

.promotion-content {
  margin-bottom: 1.25rem;
}

.promotion-description {
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.promotion-offer {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 0.75rem;
}

.original-price {
  color: var(--text-light);
  text-decoration: line-through;
  font-size: 1rem;
}

.discount-price {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--eco-green);
}

.discount-percentage {
  background: var(--eco-green);
  color: white;
  padding: 0.35rem 0.75rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 0.75rem;
}

.discount-code {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 0.75rem;
  background: var(--bg-eco-light);
  border-radius: 6px;
  border: 2px dashed var(--eco-green-light);
}

.code-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
}

.code-value {
  font-size: 0.95rem;
  color: var(--eco-green);
  font-weight: 600;
  font-family: 'Courier New', monospace;
}

.promotion-features {
  margin-bottom: 1.25rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.check-icon {
  color: var(--eco-green);
  font-size: 0.8rem;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.promotion-footer {
  margin-bottom: 0.75rem;
}

.expiry-info {
  font-size: 0.85rem;
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
  border-top: 1px solid var(--border-medium);
  margin-top: 0.75rem;
  padding-top: 0.75rem;
}

.terms-toggle {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  padding: 0.5rem 0;
  cursor: pointer;
  color: var(--text-secondary);
  font-size: 0.85rem;
  transition: color 0.2s ease;
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
  font-size: 1.1rem;
  font-weight: bold;
}

.terms-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.terms-content.expanded {
  max-height: 200px;
  margin-top: 0.5rem;
  padding: 0.75rem;
  background: var(--bg-eco-light);
  border-radius: 6px;
  border-left: 3px solid var(--eco-green);
}

.terms-content p {
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.5;
  color: var(--text-secondary);
}

.btn {
  padding: 0.6rem 1.25rem;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background: var(--eco-green);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: var(--eco-green-dark);
}

@media (max-width: 768px) {
  .promotions-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto 2rem auto;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .promotion-footer {
    flex-direction: column;
  }

  .discount-code {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
}
</style>
