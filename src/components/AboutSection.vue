<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">About Our Eco-Friendly Service</h2>
        <p class="section-subtitle">
          We're committed to providing professional dry cleaning while protecting our environment
        </p>
      </div>

      <div class="about-content">
        <div class="about-text">
          <div class="about-item">
            <div class="item-icon">
              <FontAwesomeIcon :icon="['fas', 'leaf']" />
            </div>
            <div class="item-content">
              <h3>Eco-Friendly Solutions</h3>
              <p>
                At EcoFresh Drycleaners, with 20 plus years of service we believe fresh clothes
                shouldn't cost the earth. Our eco-friendly cleaning uses gentle, biodegradable
                solutions and energy-smart technology to keep your garments—and our planet—looking
                their best.
              </p>
            </div>
          </div>

          <div class="about-item">
            <div class="item-icon">
              <FontAwesomeIcon :icon="['fas', 'heart']" />
            </div>
            <div class="item-content">
              <h3>Care & Precision</h3>
              <p>
                Whether it's your favorite shirt or your most treasured suit, we treat every piece
                with care, precision, and a whole lot of love for the environment. Every detail—down
                to the final press—is executed with precision, ensuring your wardrobe remains as
                timeless as your style.
              </p>
            </div>
          </div>

          <div class="about-item">
            <div class="item-icon">
              <FontAwesomeIcon :icon="['fas', 'user-tie']" />
            </div>
            <div class="item-content">
              <h3>Professional Care</h3>
              <p>
                With over 20 years of experience, our team ensures your garments receive the highest
                quality care and attention.
              </p>
            </div>
          </div>

          <div class="about-item">
            <div class="item-icon">
              <FontAwesomeIcon :icon="['fas', 'truck']" />
            </div>
            <div class="item-content">
              <h3>Convenient Service</h3>
              <p>
                Free pickup and delivery service makes it easy to keep your wardrobe fresh without
                leaving your home or office.
              </p>
            </div>
          </div>
        </div>

        <div class="about-stats">
          <div class="stat-card">
            <div class="stat-number">20+</div>
            <div class="stat-label">Years Experience</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">3</div>
            <div class="stat-label">Locations</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">100%</div>
            <div class="stat-label">Eco-Friendly</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">24h</div>
            <div class="stat-label">Same Day Service</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
.about {
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

.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.about-item {
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.about-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.item-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  border-radius: 12px;
  color: white;
}

.item-icon svg {
  font-size: 2rem;
}

.item-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 0.5rem;
}

.item-content p {
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.stat-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 500;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .about-stats {
    grid-template-columns: 1fr 1fr;
  }

  .about-item {
    flex-direction: column;
    text-align: center;
  }

  .item-icon {
    align-self: center;
  }
}

@media (max-width: 480px) {
  .about-stats {
    grid-template-columns: 1fr;
  }
}
</style>
