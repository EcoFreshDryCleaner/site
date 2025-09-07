<template>
  <section class="hero">
    <h1 class="hero-title">Website Coming Soon</h1>
    <p class="hero-subtitle">Professional Eco-Friendly Dry Cleaning</p>
    <p class="hero-description">
      We're working hard to bring you an amazing online experience. 
      In the meantime, you can reach out to us directly for all your 
      dry cleaning needs with free pickup and delivery.
    </p>
    <a href="#contact" class="cta-button" @click="scrollToContact">Get In Touch</a>
  </section>
</template>

<script setup>
const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  animation: fadeInUp 0.8s ease-out;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-weight: 300;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 3rem;
  line-height: 1.7;
}

.cta-button {
  display: inline-block;
  background: var(--gradient-eco);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  box-shadow: 0 4px 15px var(--shadow-eco);
  transition: all 0.3s ease;
  margin-bottom: 4rem;
  cursor: pointer;
  border: none;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--shadow-eco);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .hero-description {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }
}
</style>
