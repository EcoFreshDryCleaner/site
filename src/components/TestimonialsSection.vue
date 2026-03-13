<template>
  <section id="testimonials" class="testimonials">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">What Our Customers Say</h2>
        <p class="section-subtitle">
          Don't just take our word for it. Here's what our satisfied customers have to say about our
          service.
        </p>
      </div>

      <div class="testimonials-grid">
        <div class="testimonial-card" v-for="testimonial in testimonials" :key="testimonial.id">
          <div class="testimonial-header">
            <div class="customer-info">
              <div class="customer-avatar">
                {{ testimonial.name.charAt(0) }}
              </div>
              <div class="customer-details">
                <h4 class="customer-name">{{ testimonial.name }}</h4>
                <div class="customer-rating">
                  <span
                    v-for="star in 5"
                    :key="star"
                    class="star"
                    :class="{ filled: star <= testimonial.rating }"
                  >
                    ★
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="testimonial-content">
            <p>"{{ testimonial.comment }}"</p>
          </div>

          <div class="testimonial-footer">
            <span class="service-type">{{ testimonial.service }}</span>
            <span class="date">{{ testimonial.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const testimonials = ref([
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    comment:
      'Amazing service! They picked up my clothes and delivered them back perfectly cleaned the next day. The eco-friendly approach gives me peace of mind.',
    service: 'Premium Care',
    date: '2 days ago',
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    comment:
      'Professional, reliable, and environmentally conscious. My suits have never looked better. Highly recommend their luxury service for business attire.',
    service: 'Luxury Service',
    date: '1 week ago',
  },
])
</script>

<style scoped>
.testimonials {
  padding: 5rem 0;
  background: var(--bg-eco-light);
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

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 1.5rem;
}

.testimonial-card {
  background: var(--bg-primary);
  border-radius: 10px;
  padding: 1.75rem;
  border: 1px solid var(--border-medium);
  transition: box-shadow 0.2s ease;
}

.testimonial-card:hover {
  box-shadow: 0 2px 8px var(--shadow-light);
}

.testimonial-header {
  margin-bottom: 1.25rem;
}

.customer-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.customer-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--primary-blue);
  color: var(--text-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.2rem;
}

.customer-name {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 0.25rem 0;
}

.customer-rating {
  display: flex;
  gap: 0.15rem;
}

.star {
  color: var(--border-medium);
  font-size: 0.9rem;
}

.star.filled {
  color: var(--accent-yellow);
}

.testimonial-content {
  margin-bottom: 1.25rem;
}

.testimonial-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
  font-style: italic;
}

.testimonial-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: var(--text-muted);
  padding-top: 1rem;
  border-top: 1px solid var(--border-medium);
}

.service-type {
  font-weight: 500;
  color: var(--eco-green);
}

.date {
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 1.75rem;
  }
}
</style>
