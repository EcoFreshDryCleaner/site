<template>
  <div id="app">
    <Header />
    <main class="main">
      <div class="container">
        <Hero />
        <ContactSection />
        <LocationsSection />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import ContactSection from './components/ContactSection.vue'
import LocationsSection from './components/LocationsSection.vue'
import Footer from './components/Footer.vue'
</script>

<style>
:root {
  /* Primary Colors - Enhanced Eco Theme */
  --primary-blue: #1e40af;
  --primary-blue-dark: #1e3a8a;
  --primary-blue-light: #3b82f6;

  /* Eco Green Colors */
  --eco-green: #059669;
  --eco-green-light: #10b981;
  --eco-green-dark: #047857;
  --eco-mint: #34d399;
  --eco-sage: #6ee7b7;

  /* Secondary Colors */
  --secondary-teal: #0d9488;
  --secondary-teal-light: #14b8a6;
  --secondary-teal-dark: #0f766e;

  /* Neutral Colors */
  --text-primary: #0f172a;
  --text-secondary: #334155;
  --text-muted: #64748b;
  --text-light: #94a3b8;
  --text-white: #ffffff;

  /* Background Colors */
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --bg-eco-light: #f0fdf4;
  --bg-eco-lighter: #f7fee7;
  --bg-dark: #0f172a;
  --bg-dark-secondary: #1e293b;

  /* Border Colors */
  --border-light: rgba(0, 0, 0, 0.08);
  --border-medium: #e2e8f0;
  --border-dark: #1e293b;
  --border-eco: #bbf7d0;

  /* Gradient Colors */
  --gradient-primary: linear-gradient(135deg, var(--primary-blue) 0%, var(--eco-green) 100%);
  --gradient-hero: linear-gradient(135deg, var(--primary-blue) 0%, var(--eco-green) 50%, var(--secondary-teal) 100%);
  --gradient-secondary: linear-gradient(135deg, var(--eco-green) 0%, var(--secondary-teal) 100%);
  --gradient-eco: linear-gradient(135deg, var(--eco-green-light) 0%, var(--eco-mint) 100%);

  /* Shadow Colors */
  --shadow-primary: rgba(30, 64, 175, 0.25);
  --shadow-eco: rgba(16, 185, 129, 0.25);
  --shadow-light: rgba(0, 0, 0, 0.08);
  --shadow-medium: rgba(0, 0, 0, 0.12);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: var(--text-primary);
  background: var(--bg-eco-lighter);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
}
</style>