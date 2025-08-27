<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-title"><span class="highlight">Eco-Friendly</span> Dry Cleaning</h1>
        <p class="hero-subtitle">
          Professional dry cleaning services that care for your clothes and the environment. Using
          eco-friendly solvents and sustainable practices.
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary" @click="scrollToSection('pricing')">View Pricing</button>
          <button class="btn btn-secondary" @click="scrollToSection('mobile-app')">
            Schedule Pickup
          </button>
        </div>
        <div class="hero-features">
          <div class="feature">
            <div class="feature-icon">
              <FontAwesomeIcon :icon="['fas', 'leaf']" />
            </div>
            <span>Eco-Friendly</span>
          </div>
          <!-- <div class="feature">
            <div class="feature-icon">
              <FontAwesomeIcon :icon="['fas', 'bolt']" />
            </div>
            <span>Same Day Service</span>
          </div> -->
          <div class="feature">
            <div class="feature-icon">
              <FontAwesomeIcon :icon="['fas', 'truck']" />
            </div>
            <span>Free Pickup & Delivery</span>
          </div>
        </div>
      </div>
      <!-- <div class="hero-image">
        <div class="image-placeholder">
          <div class="placeholder-content">
            <span class="placeholder-icon">
              <FontAwesomeIcon :icon="['fas', 'user-tie']" />
            </span>
            <span>Professional Care</span>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup>
const emit = defineEmits(['scrollToSection'])

const scrollToSection = (sectionId) => {
  emit('scrollToSection', sectionId)
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  background: var(--gradient-hero);
  display: flex;
  align-items: center;
  padding: 2rem 0;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.3;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-text {
  color: var(--text-white);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.highlight {
  background: linear-gradient(45deg, var(--accent-yellow), var(--accent-yellow));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
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
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.btn-primary {
  background: linear-gradient(45deg, var(--accent-yellow), var(--accent-yellow));
  color: var(--primary-blue);
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
}

.btn-secondary {
  background: transparent;
  color: var(--text-white);
  border: 2px solid var(--text-white);
}

.btn-secondary:hover {
  background: var(--text-white);
  color: var(--primary-blue);
  transform: translateY(-2px);
}

.hero-features {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.9;
}

.feature-icon {
  font-size: 1.2rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--transparent-white);
  border-radius: 8px;
  color: var(--text-white);
}

.feature-icon svg {
  font-size: 1.2rem;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 400px;
  height: 400px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.placeholder-content {
  text-align: center;
  color: white;
}

.placeholder-icon {
  font-size: 4rem;
  display: block;
  margin-bottom: 1rem;
}

.placeholder-icon svg {
  font-size: 4rem;
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

  .image-placeholder {
    width: 300px;
    height: 300px;
  }
}
</style>
