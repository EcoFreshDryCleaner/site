<template>
  <Transition name="modal">
    <div v-if="isVisible" class="promo-modal-overlay" @click="handleOverlayClick">
      <div class="promo-modal" @click.stop>
        <button v-if="config.dismissible" class="close-btn" @click="closeModal">
          <FontAwesomeIcon :icon="['fas', 'times']" />
        </button>

        <div class="promo-content">
          <div class="promo-image">
            <img :src="config.image" :alt="config.title" />
          </div>

          <div class="promo-text">
            <h2 class="promo-title">{{ config.title }}</h2>
            <h3 class="promo-subtitle">{{ config.subtitle }}</h3>
            <p class="promo-description">{{ config.description }}</p>

            <div class="promo-actions">
              <button class="promo-btn primary" @click="handlePrimaryAction">
                {{ config.buttonText }}
              </button>
              <button v-if="config.dismissible" class="promo-btn secondary" @click="closeModal">
                {{ config.closeText }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const isVisible = ref(false)
const config = ref({
  enabled: true,
  delay: 2000,
  title: 'Special Offer!',
  subtitle: 'Get 20% off your first order',
  description:
    'New customers get 20% off their first dry cleaning order. Use code WELCOME20 at checkout.',
  image: 'https://picsum.photos/400/300?random=1',
  buttonText: 'Get Started',
  buttonLink: '#contact',
  closeText: 'Maybe Later',
  backgroundColor: '#667eea',
  textColor: '#ffffff',
  showOnMobile: true,
  dismissible: true,
  showOnce: true,
})

const emit = defineEmits(['scrollToSection'])

const loadConfig = async () => {
  try {
    const response = await fetch('/site/promo-config.json')
    const data = await response.json()
    config.value = { ...config.value, ...data }
  } catch (error) {
    console.warn('Could not load promo config, using defaults:', error)
  }
}

const shouldShowModal = () => {
  if (!config.value.enabled) return false

  // Check if we should show on mobile
  if (!config.value.showOnMobile && window.innerWidth < 768) return false

  // Check if already shown once
  if (config.value.showOnce) {
    const hasShown = localStorage.getItem('promo-shown')
    if (hasShown) return false
  }

  return true
}

const showModal = () => {
  if (shouldShowModal()) {
    isVisible.value = true
    if (config.value.showOnce) {
      localStorage.setItem('promo-shown', 'true')
    }
  }
}

const closeModal = () => {
  isVisible.value = false
}

const handleOverlayClick = () => {
  if (config.value.dismissible) {
    closeModal()
  }
}

const handlePrimaryAction = () => {
  if (config.value.buttonLink.startsWith('#')) {
    const sectionId = config.value.buttonLink.substring(1)
    emit('scrollToSection', sectionId)
  } else {
    window.open(config.value.buttonLink, '_blank')
  }
  closeModal()
}

onMounted(async () => {
  await loadConfig()

  if (shouldShowModal()) {
    setTimeout(showModal, config.value.delay)
  }
})
</script>

<style scoped>
.promo-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
}

.promo-modal {
  background: white;
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  color: #666;
}

.close-btn:hover {
  background: rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
}

.promo-content {
  display: flex;
  flex-direction: column;
}

.promo-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.promo-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.promo-text {
  padding: 2rem;
  text-align: center;
}

.promo-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1a202c;
}

.promo-subtitle {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #667eea;
}

.promo-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 2rem;
}

.promo-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.promo-btn {
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

.promo-btn.primary {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.promo-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.promo-btn.secondary {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
}

.promo-btn.secondary:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
}

/* Modal transition animations */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from {
  opacity: 0;
  transform: scale(0.9);
}

.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .promo-modal {
    max-width: 90vw;
    margin: 1rem;
  }

  .promo-text {
    padding: 1.5rem;
  }

  .promo-title {
    font-size: 1.5rem;
  }

  .promo-subtitle {
    font-size: 1.1rem;
  }

  .promo-description {
    font-size: 0.95rem;
  }

  .promo-btn {
    padding: 0.875rem 1.5rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .promo-modal {
    max-width: 95vw;
  }

  .promo-text {
    padding: 1rem;
  }

  .promo-title {
    font-size: 1.25rem;
  }

  .promo-subtitle {
    font-size: 1rem;
  }

  .promo-description {
    font-size: 0.9rem;
  }

  .promo-btn {
    padding: 0.75rem 1.25rem;
    font-size: 0.9rem;
  }
}
</style>
