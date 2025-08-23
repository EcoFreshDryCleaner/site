<template>
  <nav class="navigation" :class="{ scrolled: isScrolled }">
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
          @click.prevent="scrollToSection(item.id)"
          :class="{ active: activeSection === item.id }"
        >
          {{ item.label }}
        </a>
      </div>

      <div class="nav-actions">
        <button class="btn btn-primary" @click="scrollToSection('mobile-app')">
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
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const activeSection = ref('')

const menuItems = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'promotions', label: 'Offers', href: '#promotions' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'pricing', label: 'Pricing', href: '#pricing' },
  { id: 'testimonials', label: 'Reviews', href: '#testimonials' },
  { id: 'contact', label: 'Contact', href: '#contact' },
  { id: 'mobile-app', label: 'App', href: '#mobile-app' },
]

const emit = defineEmits(['scrollToSection'])

const scrollToSection = (sectionId) => {
  emit('scrollToSection', sectionId)
  isMenuOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50

  // Update active section based on scroll position
  const sections = menuItems.map((item) => item.id)
  const scrollPosition = window.scrollY + 100

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i])
    if (section && section.offsetTop <= scrollPosition) {
      activeSection.value = sections[i]
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.navigation.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
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
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-tagline {
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 500;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: #4a5568;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
}

.nav-link:hover {
  color: #3b82f6;
}

.nav-link.active {
  color: #3b82f6;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  right: 50%;
  height: 2px;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  border-radius: 1px;
  transition: all 0.3s ease;
  opacity: 0;
}

.nav-link:hover::after {
  left: 0;
  right: 0;
  opacity: 0.5;
}

.nav-link.active::after {
  left: 0;
  right: 0;
  opacity: 1;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.btn-primary {
  background: linear-gradient(45deg, #3b82f6, #1d4ed8);
  color: white;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
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
  background: #4a5568;
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
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    gap: 0;
    padding: 2rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
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
