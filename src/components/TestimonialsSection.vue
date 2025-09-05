<template>
  <section id="testimonials" class="testimonials">
    <!-- Background Pattern -->
    <div class="testimonials-bg-pattern">
      <div class="pattern-star star-1">
        <FontAwesomeIcon :icon="['fas', 'star']" />
      </div>
      <div class="pattern-star star-2">
        <FontAwesomeIcon :icon="['fas', 'star']" />
      </div>
      <div class="pattern-star star-3">
        <FontAwesomeIcon :icon="['fas', 'star']" />
      </div>
      <div class="pattern-heart heart-1">
        <FontAwesomeIcon :icon="['fas', 'heart']" />
      </div>
      <div class="pattern-heart heart-2">
        <FontAwesomeIcon :icon="['fas', 'heart']" />
      </div>
    </div>

    <div class="container">
      <div class="section-header">
        <div class="header-badge">
          <FontAwesomeIcon :icon="['fas', 'comments']" class="badge-icon" />
          <span>Customer Reviews</span>
        </div>
        <h2 class="section-title">What Our Customers Say</h2>
        <p class="section-subtitle">
          Don't just take our word for it. Here's what our satisfied customers have to say about our
          service.
        </p>
      </div>

      <div class="testimonials-grid">
        <div class="testimonial-card" v-for="testimonial in testimonials" :key="testimonial.id">
          <div class="testimonial-badge">
            <FontAwesomeIcon :icon="['fas', 'quote-right']" class="quote-icon" />
          </div>

          <div class="testimonial-header">
            <div class="customer-info">
              <div class="customer-avatar">
                <img
                  :src="`https://picsum.photos/100/100?random=${testimonial.id + 10}`"
                  :alt="testimonial.name"
                  class="avatar-image"
                />
                <div class="avatar-overlay">
                  {{ testimonial.name.charAt(0) }}
                </div>
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
            <p>{{ testimonial.comment }}</p>
          </div>

          <div class="testimonial-footer">
            <div class="service-badge">
              <FontAwesomeIcon :icon="['fas', 'user-tie']" class="service-icon" />
              <span class="service-type">{{ testimonial.service }}</span>
            </div>
            <span class="date">{{ testimonial.date }}</span>
          </div>
        </div>
      </div>

      <!-- Customer Stats -->
      <!-- <div class="testimonials-stats">
        <div class="stat-item">
          <div class="stat-icon">
            <FontAwesomeIcon :icon="['fas', 'star']" />
          </div>
          <div class="stat-number">4.9</div>
          <div class="stat-label">Average Rating</div>
          <div class="stat-stars">
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">
            <FontAwesomeIcon :icon="['fas', 'smile']" />
          </div>
          <div class="stat-number">2,500+</div>
          <div class="stat-label">Happy Customers</div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">
            <FontAwesomeIcon :icon="['fas', 'percent']" />
          </div>
          <div class="stat-number">98%</div>
          <div class="stat-label">Satisfaction Rate</div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">
            <FontAwesomeIcon :icon="['fas', 'leaf']" />
          </div>
          <div class="stat-number">100%</div>
          <div class="stat-label">Eco-Friendly</div>
        </div>
      </div> -->
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
  padding: 6rem 0;
  background: var(--bg-eco-light);
  position: relative;
  overflow: hidden;
}

/* Background Pattern */
.testimonials-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.pattern-star {
  position: absolute;
  font-size: 1.5rem;
  animation: twinkle 4s ease-in-out infinite;
  opacity: 0.1;
  color: var(--eco-green);
}

.star-1 {
  top: 20%;
  left: 15%;
  animation-delay: 0s;
}

.star-2 {
  top: 30%;
  right: 20%;
  animation-delay: 1s;
}

.star-3 {
  bottom: 25%;
  left: 25%;
  animation-delay: 2s;
}

.pattern-heart {
  position: absolute;
  font-size: 1.2rem;
  animation: pulse-heart 6s ease-in-out infinite;
  opacity: 0.1;
  color: var(--eco-green);
}

.heart-1 {
  top: 60%;
  right: 15%;
  animation-delay: 0s;
}

.heart-2 {
  bottom: 15%;
  right: 30%;
  animation-delay: 3s;
}

@keyframes twinkle {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 0.1;
  }
  50% {
    transform: scale(1.2) rotate(180deg);
    opacity: 0.3;
  }
}

@keyframes pulse-heart {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.2;
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

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.testimonial-card {
  background: var(--bg-primary);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 25px var(--shadow-light);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border-eco);
}

.testimonial-card::before {
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

.testimonial-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 35px var(--shadow-medium);
  border-color: var(--eco-green-light);
}

.testimonial-card:hover::before {
  opacity: 1;
}

.testimonial-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--gradient-eco);
  color: white;
  padding: 0.75rem;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px var(--shadow-eco);
}

.testimonial-badge .quote-icon {
  font-size: 1.2rem;
  color: white;
}

.testimonial-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.customer-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.customer-avatar {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--border-eco);
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-eco);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.3rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.customer-avatar:hover .avatar-overlay {
  opacity: 1;
}

.customer-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 0.25rem 0;
}

.customer-rating {
  display: flex;
  gap: 0.25rem;
}

.star {
  color: var(--border-medium);
  font-size: 1rem;
}

.star.filled {
  color: var(--eco-green);
}

.quote-icon {
  font-size: 3rem;
  color: var(--eco-green);
  opacity: 0.3;
  line-height: 1;
  margin-top: -0.5rem;
}

.quote-icon svg {
  font-size: 2rem;
}

.testimonial-content {
  margin-bottom: 1.5rem;
}

.testimonial-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
  font-style: italic;
  font-size: 1rem;
}

.testimonial-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.service-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--bg-eco-light);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid var(--border-eco);
}

.service-icon {
  font-size: 1rem;
  color: var(--eco-green);
}

.service-type {
  font-weight: 500;
  color: var(--eco-green);
}

.date {
  color: var(--text-muted);
  font-size: 0.85rem;
}

/* Customer Stats */
.testimonials-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-item {
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 25px var(--shadow-light);
  transition: all 0.3s ease;
  border: 1px solid var(--border-eco);
  position: relative;
  overflow: hidden;
}

.stat-item::before {
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

.stat-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px var(--shadow-medium);
  border-color: var(--eco-green-light);
}

.stat-item:hover::before {
  opacity: 1;
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
  color: var(--eco-green);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--eco-green);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: var(--text-muted);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.stat-stars {
  display: flex;
  justify-content: center;
  gap: 0.25rem;
}

.stat-stars .star {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }

  .testimonials-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .testimonial-header {
    flex-direction: column;
    gap: 1rem;
  }

  .quote-icon {
    align-self: flex-end;
  }

  .pattern-star,
  .pattern-heart {
    display: none;
  }
}

@media (max-width: 480px) {
  .testimonials-stats {
    grid-template-columns: 1fr;
  }

  .testimonial-card {
    padding: 1.5rem;
  }

  .customer-avatar {
    width: 50px;
    height: 50px;
  }

  .avatar-overlay {
    font-size: 1.1rem;
  }
}
</style>
