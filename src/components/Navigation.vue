<template>
  <nav class="navigation">
    <div class="nav-container">
      <div class="nav-brand">
        <h2 class="brand-name">EcoFresh</h2>
        <span class="brand-tagline">Dry Cleaner</span>
      </div>

      <div class="nav-menu" :class="{ active: isMenuOpen }">
        <a
          v-for="item in menuItems"
          :key="item.id"
          :href="item.href"
          class="nav-link"
          @click.prevent="navigateToSection(item.id)"
        >
          {{ item.label }}
        </a>
      </div>

      <div class="nav-actions">
        <button class="btn btn-primary" @click="navigateToSection('mobile-app')">
          Schedule Pickup
        </button>

        <button class="menu-toggle" @click="toggleMenu" :class="{ active: isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const isMenuOpen = ref(false)

const menuItems = [
  { id: '', label: 'Home', href: '' },
  { id: 'promotions', label: 'Offers', href: '#promotions' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'pricing', label: 'Services', href: '#pricing' },
  { id: 'contact', label: 'Contact', href: '#contact' },
  { id: 'mobile-app', label: 'App', href: '#mobile-app' },
]

const navigateToSection = (sectionId) => {
  if (!sectionId || sectionId === '') {
    router.push({ name: 'home' })
    window.scrollTo({ top: 0, behavior: 'smooth' })
    isMenuOpen.value = false
    return
  }
  
  router.push({ name: 'home', hash: `#${sectionId}` })
  isMenuOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-medium);
  transition: box-shadow 0.2s ease;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.nav-brand {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: var(--primary-blue);
}

.brand-tagline {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 500;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s ease;
  padding: 0.5rem 0;
}

.nav-link:hover {
  color: var(--primary-blue);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn {
  padding: 0.6rem 1.25rem;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.btn-primary {
  background: var(--primary-blue);
  color: var(--text-white);
}

.btn-primary:hover {
  background: var(--primary-blue-dark);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--text-secondary);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--bg-primary);
    flex-direction: column;
    gap: 0;
    padding: 1rem 0;
    border-bottom: 1px solid var(--border-medium);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    padding: 1rem 2rem;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid var(--transparent-black);
  }

  .nav-link:last-child {
    border-bottom: none;
  }

  .menu-toggle {
    display: flex;
  }

  .nav-actions .btn {
    display: none;
  }
}
</style>
