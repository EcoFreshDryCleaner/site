<template>
  <section id="promotions" class="promotions">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Special Offers & Promotions</h2>
        <p class="section-subtitle">
          Take advantage of our limited-time offers and save on your dry cleaning needs
        </p>
      </div>

      <div class="promotions-grid">
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
            <div class="promotion-offer">
              <span class="original-price" v-if="promotion.originalPrice"
                >${{ promotion.originalPrice }}</span
              >
              <span class="discount-price">${{ promotion.discountPrice }}</span>
              <span class="discount-percentage" v-if="promotion.discountPercentage"
                >{{ promotion.discountPercentage }} OFF</span
              >
            </div>
          </div>

          <div class="promotion-features" v-if="promotion.features">
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
            <button class="btn btn-primary" @click="claimOffer(promotion)">
              {{ promotion.featured ? 'Claim Now' : 'Get Offer' }}
            </button>
          </div>
        </div>
      </div>

      <div class="promotions-cta">
        <div class="cta-content">
          <h3>New Customer Special</h3>
          <p>First-time customers get 50% off their first order of 5+ items!</p>
          <button class="btn btn-secondary" @click="scrollToSection('contact')">
            Start Your First Order
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const promotions = ref([
  {
    id: 1,
    title: 'Bulk Order Discount',
    description: 'Save big when you order 10+ items. Perfect for families and businesses.',
    icon: '📦',
    originalPrice: '129.90',
    discountPrice: '99.90',
    discountPercentage: '23%',
    features: [
      'Minimum 10 items',
      'Free pickup & delivery',
      'Same-day service available',
      'Premium care included',
    ],
    expiryDate: 'Dec 31, 2024',
    featured: true,
    badge: 'Most Popular',
  },
  {
    id: 2,
    title: 'Student Discount',
    description: 'Special pricing for students with valid ID. Keep your professional attire fresh.',
    icon: '🎓',
    originalPrice: '12.99',
    discountPrice: '9.99',
    discountPercentage: '23%',
    features: [
      'Valid student ID required',
      'All service levels included',
      'Free pickup & delivery',
      '24-hour turnaround',
    ],
    expiryDate: 'Ongoing',
    featured: false,
  },
  {
    id: 3,
    title: 'Weekend Special',
    description: 'Drop off on Friday, get your clothes back by Monday morning.',
    icon: '📅',
    originalPrice: '15.99',
    discountPrice: '12.99',
    discountPercentage: '19%',
    features: [
      'Friday drop-off only',
      'Monday delivery guaranteed',
      'Premium care included',
      'Perfect for weekend prep',
    ],
    expiryDate: 'Every Friday',
    featured: false,
  },
])

const emit = defineEmits(['scrollToSection'])

const claimOffer = (promotion) => {
  console.log('Claiming offer:', promotion.title)
  // Handle offer claiming logic
}

const scrollToSection = (sectionId) => {
  emit('scrollToSection', sectionId)
}
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
  color: #1a202c;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.promotions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.promotion-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.promotion-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.promotion-card.featured {
  border-color: #667eea;
  transform: scale(1.05);
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.15);
}

.promotion-card.featured:hover {
  transform: scale(1.05) translateY(-8px);
}

.promotion-badge {
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(45deg, #ff6b6b, #ee5a24);
  color: white;
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
}

.promotion-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
}

.promotion-content {
  margin-bottom: 1.5rem;
}

.promotion-description {
  color: #64748b;
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
  color: #a0aec0;
  text-decoration: line-through;
  font-size: 1.1rem;
}

.discount-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #48bb78;
}

.discount-percentage {
  background: #48bb78;
  color: white;
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
  color: #4a5568;
  font-size: 0.9rem;
}

.check-icon {
  color: #48bb78;
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
  color: #64748b;
}

.expiry-label {
  font-weight: 500;
}

.expiry-date {
  color: #e53e3e;
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

.btn-primary {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
  background: white;
  color: #667eea;
  border: 2px solid white;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
}

.btn-secondary:hover {
  background: #f8fafc;
  color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.4);
}

.promotions-cta {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  color: white;
}

.cta-content h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
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

  .promotions-cta {
    padding: 2rem;
  }

  .cta-content h3 {
    font-size: 1.5rem;
  }
}
</style>
