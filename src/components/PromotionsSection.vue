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
            <div class="promotion-icon">{{ promotion.icon }}</div>
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
              <span class="discount-percentage" v-if="promotion.discountPercentage"
                >{{ promotion.discountPercentage }} OFF</span
              >
            </div>
          </div>

          <div
            class="promotion-features"
            v-if="promotion.features && promotion.features.length > 0"
          >
            <ul class="features-list">
              <li v-for="feature in promotion.features" :key="feature" class="feature-item">
                <span class="check-icon">✓</span>
                {{ feature }}
              </li>
            </ul>
          </div>

          <div class="promotion-footer">
            <div class="expiry-info" v-if="promotion.expiryDate">
              <span class="expiry-label">Expires:</span>
              <span class="expiry-date">{{ promotion.expiryDate }}</span>
            </div>
            <button class="btn btn-primary" @click="claimOffer(promotion)" :disabled="claiming">
              {{
                claiming
                  ? 'Claiming...'
                  : promotion.featured
                    ? 'Claim Now'
                    : promotion.modalConfig?.buttonText || 'Get Offer'
              }}
            </button>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="empty-state">
        <p>No active promotions at the moment. Check back soon for new offers!</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getPromotions, trackPromotionClaim } from '../services/firestoreService'

const promotions = ref([])
const loading = ref(true)
const error = ref(false)
const claiming = ref(false)

const emit = defineEmits(['scrollToSection'])

const loadPromotions = async () => {
  try {
    loading.value = true
    error.value = false
    const data = await getPromotions()
    promotions.value = data
  } catch (err) {
    console.error('Error loading promotions:', err)
    error.value = true
  } finally {
    loading.value = false
  }
}

const claimOffer = async (promotion) => {
  try {
    claiming.value = true
    console.log('Claiming offer:', promotion.title)

    // Track the claim in Firestore
    await trackPromotionClaim(promotion.id)

    // Handle offer claiming logic
    scrollToSection('mobile-app')
  } catch (err) {
    console.error('Error claiming offer:', err)
    // You could show a toast notification here
  } finally {
    claiming.value = false
  }
}

const scrollToSection = (sectionId) => {
  emit('scrollToSection', sectionId)
}

onMounted(() => {
  loadPromotions()
})
</script>

<style scoped>
.promotions {
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

/* Loading State */
.loading-state {
  text-align: center;
  padding: 4rem 0;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid var(--bg-secondary);
  border-top: 4px solid var(--primary-blue);
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

.empty-state p {
  font-size: 1.1rem;
}

.promotions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.promotion-card {
  background: var(--bg-primary);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 6px var(--transparent-black);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.promotion-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px var(--shadow-light);
}

.promotion-card.featured {
  border-color: var(--primary-blue);
  transform: scale(1.05);
  box-shadow: 0 20px 40px var(--shadow-primary);
}

.promotion-card.featured:hover {
  transform: scale(1.05) translateY(-8px);
}

.promotion-badge {
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

.promotion-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.promotion-icon {
  font-size: 2.5rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-hero);
  border-radius: 12px;
  color: var(--text-white);
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
}

.original-price {
  color: var(--text-light);
  text-decoration: line-through;
  font-size: 1.1rem;
}

.discount-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-green);
}

.discount-percentage {
  background: var(--accent-green);
  color: var(--text-white);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
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
  padding: 0.25rem 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.check-icon {
  color: var(--accent-green);
  font-weight: bold;
  font-size: 1rem;
}

.promotion-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
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
  background: var(--gradient-primary);
  color: var(--text-white);
  box-shadow: 0 4px 15px var(--shadow-primary);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--shadow-primary-hover);
}

.btn-secondary {
  background: var(--bg-primary);
  color: var(--primary-blue);
  border: 2px solid var(--bg-primary);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
}

.btn-secondary:hover {
  background: var(--bg-secondary);
  color: var(--primary-blue);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.4);
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
}
</style>
