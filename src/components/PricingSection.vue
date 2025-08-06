<template>
  <section id="pricing" class="pricing">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Transparent Pricing</h2>
        <p class="section-subtitle">
          Simple, upfront pricing with no hidden fees. Choose the service that fits your needs.
        </p>
      </div>

      <div class="pricing-grid">
        <div
          class="pricing-card"
          :class="{ featured: plan.featured }"
          v-for="plan in pricingPlans"
          :key="plan.name"
        >
          <div class="card-header">
            <h3 class="plan-name">{{ plan.name }}</h3>
            <div class="plan-price">
              <span class="currency">$</span>
              <span class="amount">{{ plan.price }}</span>
              <span class="period">/item</span>
            </div>
            <p class="plan-description">{{ plan.description }}</p>
          </div>

          <div class="card-features">
            <ul class="features-list">
              <li v-for="feature in plan.features" :key="feature" class="feature-item">
                <span class="check-icon">✓</span>
                {{ feature }}
              </li>
            </ul>
          </div>

          <div class="card-footer">
            <button class="btn btn-primary" @click="selectPlan(plan)">
              {{ plan.featured ? 'Get Started' : 'Choose Plan' }}
            </button>
          </div>

          <div v-if="plan.featured" class="featured-badge">Most Popular</div>
        </div>
      </div>

      <div class="pricing-note">
        <p>* All prices include free pickup and delivery within 10 miles</p>
        <p>* Bulk discounts available for orders over 20 items</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const pricingPlans = ref([
  {
    name: 'Basic Clean',
    price: '8.99',
    description: 'Perfect for everyday garments',
    features: [
      'Standard dry cleaning',
      'Free pickup & delivery',
      '24-hour turnaround',
      'Eco-friendly solvents',
      'Basic stain treatment',
    ],
    featured: false,
  },
  {
    name: 'Premium Care',
    price: '12.99',
    description: 'Our most popular service',
    features: [
      'Premium dry cleaning',
      'Free pickup & delivery',
      'Same-day service available',
      'Eco-friendly solvents',
      'Advanced stain treatment',
      'Fabric protection',
      'Press & finish included',
    ],
    featured: true,
  },
  {
    name: 'Luxury Service',
    price: '18.99',
    description: 'For delicate and luxury items',
    features: [
      'Hand cleaning process',
      'Free pickup & delivery',
      'Same-day service available',
      'Eco-friendly solvents',
      'Expert stain removal',
      'Premium fabric protection',
      'Professional pressing',
      'Quality inspection',
    ],
    featured: false,
  },
])

const selectPlan = (plan) => {
  // Emit event or handle plan selection
  console.log('Selected plan:', plan.name)
}
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

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.pricing-card {
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.pricing-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.pricing-card.featured {
  border-color: #667eea;
  transform: scale(1.05);
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.15);
}

.pricing-card.featured:hover {
  transform: scale(1.05) translateY(-8px);
}

.card-header {
  text-align: center;
  margin-bottom: 2rem;
}

.plan-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 1rem;
}

.plan-price {
  margin-bottom: 1rem;
}

.currency {
  font-size: 1.5rem;
  color: #667eea;
  font-weight: 600;
}

.amount {
  font-size: 3rem;
  font-weight: 700;
  color: #667eea;
  line-height: 1;
}

.period {
  font-size: 1rem;
  color: #64748b;
}

.plan-description {
  color: #64748b;
  font-size: 0.9rem;
  margin: 0;
}

.card-features {
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
  color: #4a5568;
  font-size: 0.95rem;
}

.check-icon {
  color: #48bb78;
  font-weight: bold;
  font-size: 1.1rem;
}

.card-footer {
  text-align: center;
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
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.featured-badge {
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 0 20px 0 20px;
}

.pricing-note {
  text-align: center;
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.6;
}

.pricing-note p {
  margin: 0.25rem 0;
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
