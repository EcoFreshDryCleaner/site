<template>
  <section id="contact" class="contact-section">
    <h2 class="section-title">Contact Us</h2>
    <div class="contact-grid">
      <div class="contact-card">
        <div class="contact-icon">📧</div>
        <h3>Email Us</h3>
        <p><a href="mailto:hello@ecofreshdrycleaner.com">hello@ecofreshdrycleaner.com</a></p>
      </div>
      <div class="contact-card">
        <div class="contact-icon">🚚</div>
        <h3>Service Area</h3>
        <p>Charlotte, NC & surrounding areas</p>
        <p><strong>Free pickup & delivery included</strong></p>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional logic needed for this component
</script>

<style scoped>
.contact-section {
  background: var(--bg-primary);
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 8px 25px var(--shadow-light);
  border: 1px solid var(--border-eco);
  margin-bottom: 3rem;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.contact-card {
  background: var(--bg-eco-light);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--border-eco);
  text-align: center;
  transition: all 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px var(--shadow-medium);
  border-color: var(--eco-green-light);
}

.contact-icon {
  width: 60px;
  height: 60px;
  background: var(--gradient-eco);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
  color: white;
}

.contact-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.contact-card p {
  color: var(--text-secondary);
  font-size: 1rem;
}

.contact-card a {
  color: var(--eco-green);
  text-decoration: none;
  font-weight: 500;
}

.contact-card a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .contact-section {
    padding: 2rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 1.5rem;
  }

  .contact-card {
    padding: 1.5rem;
  }
}
</style>
