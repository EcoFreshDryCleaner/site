<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <span class="hero-badge">
          <FontAwesomeIcon :icon="['fas', 'leaf']" class="badge-icon" />
          Eco-Friendly Since 2000
        </span>

        <h1 class="hero-title">
          <span class="highlight">Eco-Friendly</span>
          <span class="title-line">Dry Cleaning</span>
        </h1>

        <p class="hero-subtitle">
          Professional dry cleaning services in Charlotte, NC that care for your clothes and the environment. Using
          eco-friendly solvents and sustainable practices for a cleaner tomorrow. Serving Charlotte, Mathews, and surrounding areas.
        </p>

        <div class="hero-actions">
          <button class="btn btn-primary" @click="handleViewPromotions">
            <FontAwesomeIcon :icon="['fas', 'gift']" class="btn-icon" />
            View Promotions
          </button>
          <button class="btn btn-secondary" @click="handleSchedulePickup">
            <FontAwesomeIcon :icon="['fas', 'mobile-alt']" class="btn-icon" />
            Schedule Pickup
          </button>
        </div>

        <div class="hero-features">
          <div class="feature">
            <div class="feature-icon">
              <FontAwesomeIcon :icon="['fas', 'leaf']" />
            </div>
            <span>100% Eco-Friendly</span>
          </div>
          <div class="feature">
            <div class="feature-icon">
              <FontAwesomeIcon :icon="['fas', 'truck']" />
            </div>
            <span>Free Pickup & Delivery</span>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="hero-image-container">
          <img
            src="https://cdn.ecofreshdrycleaner.com/hero.jpg"
            alt="Professional dry cleaning service"
            class="hero-main-image"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const scrollToSection = (sectionId) => {
  router.push({ name: 'home', hash: `#${sectionId}` })
}

const handleViewPromotions = () => {
  scrollToSection('promotions')
}

const handleSchedulePickup = () => {
  scrollToSection('mobile-app')
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  background: var(--primary-blue);
  display: flex;
  align-items: center;
  padding: 2rem 0;
  position: relative;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-text {
  color: var(--text-white);
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  font-weight: 500;
}

.badge-icon {
  font-size: 1rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.title-line {
  display: block;
  margin-top: 0.5rem;
}

.highlight {
  color: var(--eco-mint);
}

.hero-subtitle {
  font-size: 1.15rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.85rem 1.75rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
}

.btn-icon {
  font-size: 1.1rem;
}

.btn-primary {
  background: var(--eco-green);
  color: var(--text-white);
}

.btn-primary:hover {
  background: var(--eco-green-dark);
}

.btn-secondary {
  background: transparent;
  color: var(--text-white);
  border: 2px solid rgba(255, 255, 255, 0.4);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}

.hero-features {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  opacity: 0.9;
}

.feature-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  color: var(--text-white);
}

.feature-icon svg {
  font-size: 1.1rem;
}

/* Hero Visual Section */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image-container {
  width: 450px;
  height: 550px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
}

.hero-main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-features {
    justify-content: center;
  }

  .hero-image-container {
    width: 320px;
    height: 400px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .hero-features {
    flex-direction: column;
    align-items: center;
  }
}
</style>
