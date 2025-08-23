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
            <div class="quote-icon">"</div>
          </div>

          <div class="testimonial-content">
            <p>{{ testimonial.comment }}</p>
          </div>

          <div class="testimonial-footer">
            <span class="service-type">{{ testimonial.service }}</span>
            <span class="date">{{ testimonial.date }}</span>
          </div>
        </div>
      </div>

      <div class="testimonials-stats">
        <div class="stat-item">
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
          <div class="stat-number">2,500+</div>
          <div class="stat-label">Happy Customers</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">98%</div>
          <div class="stat-label">Satisfaction Rate</div>
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
  {
    id: 3,
    name: 'Emily Rodriguez',
    rating: 5,
    comment:
      'The convenience of free pickup and delivery is unbeatable. Great prices and excellent quality. My go-to dry cleaner for all my clothes.',
    service: 'Basic Clean',
    date: '3 days ago',
  },
  {
    id: 4,
    name: 'David Thompson',
    rating: 5,
    comment:
      'Outstanding customer service and attention to detail. They handled my delicate vintage pieces with care. Will definitely use them again.',
    service: 'Luxury Service',
    date: '5 days ago',
  },
  {
    id: 5,
    name: 'Lisa Wang',
    rating: 5,
    comment:
      'Fast, reliable, and eco-friendly. What more could you ask for? The mobile app makes scheduling so easy. Love this service!',
    service: 'Premium Care',
    date: '1 day ago',
  },
  {
    id: 6,
    name: 'Robert Davis',
    rating: 5,
    comment:
      'Been using their service for months now. Consistent quality and great prices. The eco-friendly approach is a huge plus for me.',
    service: 'Basic Clean',
    date: '4 days ago',
  },
])
</script>

<style scoped>
.testimonials {
  padding: 6rem 0;
  background: #f8fafc;
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
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
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

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.testimonial-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  position: relative;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
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
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
}

.customer-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 0.25rem 0;
}

.customer-rating {
  display: flex;
  gap: 0.25rem;
}

.star {
  color: #e2e8f0;
  font-size: 1rem;
}

.star.filled {
  color: #3b82f6;
}

.quote-icon {
  font-size: 3rem;
  color: #3b82f6;
  opacity: 0.3;
  line-height: 1;
  margin-top: -0.5rem;
}

.testimonial-content {
  margin-bottom: 1.5rem;
}

.testimonial-content p {
  color: #4a5568;
  line-height: 1.6;
  margin: 0;
  font-style: italic;
}

.testimonial-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #64748b;
}

.service-type {
  background: #e2e8f0;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-weight: 500;
}

.testimonials-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-item {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: #64748b;
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
    grid-template-columns: 1fr;
  }

  .testimonial-header {
    flex-direction: column;
    gap: 1rem;
  }

  .quote-icon {
    align-self: flex-end;
  }
}
</style>
