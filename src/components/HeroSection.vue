<template>
  <section class="hero">
    <!-- Background Pattern Elements -->
    <div class="hero-bg-pattern">
      <div class="floating-leaf leaf-1"></div>
      <div class="floating-leaf leaf-2"></div>
      <div class="floating-leaf leaf-3"></div>
      <div class="floating-circle circle-1"></div>
      <div class="floating-circle circle-2"></div>
      <div class="floating-circle circle-3"></div>
    </div>

    <div class="hero-content">
      <div class="hero-text">
        <div class="hero-badge">
          <FontAwesomeIcon :icon="['fas', 'leaf']" class="badge-icon" />
          <span>Eco-Friendly Since 2003</span>
        </div>

        <h1 class="hero-title">
          <span class="highlight">Eco-Friendly</span>
          <span class="title-line">Dry Cleaning</span>
        </h1>

        <p class="hero-subtitle">
          Professional dry cleaning services that care for your clothes and the environment. Using
          eco-friendly solvents and sustainable practices for a cleaner tomorrow.
        </p>

        <div class="hero-actions">
          <button class="btn btn-primary" @click="scrollToSection('pricing')">
            <FontAwesomeIcon :icon="['fas', 'star']" class="btn-icon" />
            View Pricing
          </button>
          <button class="btn btn-secondary" @click="scrollToSection('mobile-app')">
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
          <!-- <div class="feature">
            <div class="feature-icon">
              <FontAwesomeIcon :icon="['fas', 'bolt']" />
            </div>
            <span>Same Day Service</span>
          </div> -->
        </div>
      </div>

      <div class="hero-visual">
        <div class="hero-image-container">
          <img
            src="/ecofresh-image-1.png"
            alt="Professional dry cleaning service"
            class="hero-main-image"
          />
          <div class="image-overlay">
            <div class="overlay-content">
              <FontAwesomeIcon :icon="['fas', 'user-tie']" class="overlay-icon" />
              <span>Professional Care</span>
            </div>
          </div>
        </div>

        <div class="floating-card card-1">
          <div class="card-icon">
            <FontAwesomeIcon :icon="['fas', 'leaf']" />
          </div>
          <div class="card-text">
            <strong>Eco-Certified</strong>
            <span>Green Business</span>
          </div>
        </div>

        <div class="floating-card card-2">
          <div class="card-icon">
            <FontAwesomeIcon :icon="['fas', 'star']" />
          </div>
          <div class="card-text">
            <strong>20+ Years</strong>
            <span>Experience</span>
          </div>
        </div>
      </div>
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

/* Background Pattern Elements */
.hero-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.floating-leaf {
  position: absolute;
  width: 60px;
  height: 60px;
  background: var(--transparent-eco);
  border-radius: 50% 0 50% 50%;
  animation: float 6s ease-in-out infinite;
}

.leaf-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.leaf-2 {
  top: 60%;
  right: 15%;
  animation-delay: 2s;
  transform: rotate(45deg);
}

.leaf-3 {
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
  transform: rotate(90deg);
}

.floating-circle {
  position: absolute;
  border: 2px solid var(--transparent-eco);
  border-radius: 50%;
  animation: pulse 4s ease-in-out infinite;
}

.circle-1 {
  width: 100px;
  height: 100px;
  top: 15%;
  right: 25%;
  animation-delay: 0s;
}

.circle-2 {
  width: 150px;
  height: 150px;
  bottom: 30%;
  right: 10%;
  animation-delay: 1s;
}

.circle-3 {
  width: 80px;
  height: 80px;
  top: 70%;
  left: 5%;
  animation-delay: 2s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes pulse {
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

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  font-weight: 500;
}

.badge-icon {
  font-size: 1.2rem;
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
  background: linear-gradient(45deg, var(--eco-mint), var(--eco-sage));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.95;
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
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
}

.btn-icon {
  font-size: 1.2rem;
}

.btn-primary {
  background: linear-gradient(45deg, var(--eco-mint), var(--eco-sage));
  color: var(--primary-blue-dark);
  box-shadow: 0 4px 15px rgba(52, 211, 153, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(52, 211, 153, 0.5);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: var(--text-white);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.25);
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
  gap: 0.75rem;
  font-size: 0.95rem;
  opacity: 0.95;
}

.feature-icon {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--text-white);
}

.feature-icon svg {
  font-size: 1.3rem;
}

/* Hero Visual Section */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image-container {
  position: relative;
  width: 450px;
  height: 550px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.hero-main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.hero-image-container:hover .hero-main-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 2rem;
  color: white;
  text-align: center;
}

.overlay-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.overlay-icon {
  font-size: 2rem;
}

/* Floating Cards */
.floating-card {
  position: absolute;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  animation: float-card 4s ease-in-out infinite;
}

.card-1 {
  top: 10%;
  left: -20px;
  animation-delay: 0s;
}

.card-2 {
  bottom: 20%;
  right: -30px;
  animation-delay: 2s;
}

.card-icon {
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-eco);
  border-radius: 10px;
  color: white;
}

.card-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.card-text strong {
  font-size: 0.9rem;
  color: var(--text-primary);
  font-weight: 600;
}

.card-text span {
  font-size: 0.8rem;
  color: var(--text-muted);
}

@keyframes float-card {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
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

  .floating-card {
    display: none;
  }

  .floating-leaf,
  .floating-circle {
    display: none;
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
