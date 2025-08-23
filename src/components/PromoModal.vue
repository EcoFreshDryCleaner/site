<template>
  <Transition name="modal">
    <div v-if="isVisible && modalPromotion" class="promo-modal-overlay" @click="handleOverlayClick">
      <div class="promo-modal" @click.stop>
        <button
          v-if="modalPromotion.modalConfig?.dismissible !== false"
          class="close-btn"
          @click="closeModal"
        >
          <FontAwesomeIcon :icon="['fas', 'times']" />
        </button>

        <div class="promo-content">
          <div class="promo-image" v-if="modalPromotion.modalConfig?.image">
            <img :src="modalPromotion.modalConfig.image" :alt="modalPromotion.title" />
          </div>

          <div class="promo-text">
            <h2 class="promo-title">{{ modalPromotion.title }}</h2>
            <p class="promo-description">{{ modalPromotion.description }}</p>

            <div class="promo-actions">
              <button class="promo-btn primary" @click="handlePrimaryAction" :disabled="loading">
                {{
                  loading ? 'Loading...' : modalPromotion.modalConfig?.buttonText || 'Claim Offer'
                }}
              </button>
              <button
                v-if="modalPromotion.modalConfig?.dismissible !== false"
                class="promo-btn secondary"
                @click="closeModal"
              >
                {{ modalPromotion.modalConfig?.closeText || 'Maybe Later' }}
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
import { getModalPromotion } from '../services/firestoreService'

const isVisible = ref(false)
const loading = ref(false)
const modalPromotion = ref(null)

const emit = defineEmits(['scrollToSection'])

const loadModalPromotion = async () => {
  try {
    loading.value = true
    const promotion = await getModalPromotion()
    modalPromotion.value = promotion
  } catch (error) {
    console.warn('Could not load modal promotion from Firestore:', error)
    modalPromotion.value = null
  } finally {
    loading.value = false
  }
}

const shouldShowModal = () => {
  if (!modalPromotion.value || !modalPromotion.value.active) return false

  // Check if we should show on mobile
  if (modalPromotion.value.modalConfig?.showOnMobile === false && window.innerWidth < 768)
    return false

  // Check if already shown once
  if (modalPromotion.value.modalConfig?.showOnce) {
    const hasShown = localStorage.getItem(`promo-shown-${modalPromotion.value.id}`)
    if (hasShown) return false
  }

  return true
}

const showModal = () => {
  if (shouldShowModal()) {
    isVisible.value = true
    if (modalPromotion.value.modalConfig?.showOnce) {
      localStorage.setItem(`promo-shown-${modalPromotion.value.id}`, 'true')
    }
  }
}

const closeModal = () => {
  isVisible.value = false
}

const handleOverlayClick = () => {
  if (modalPromotion.value.modalConfig?.dismissible !== false) {
    closeModal()
  }
}

const handlePrimaryAction = () => {
  if (
    modalPromotion.value.modalConfig?.buttonLink &&
    modalPromotion.value.modalConfig.buttonLink.startsWith('#')
  ) {
    const sectionId = modalPromotion.value.modalConfig.buttonLink.substring(1)
    emit('scrollToSection', sectionId)
  } else if (modalPromotion.value.modalConfig?.buttonLink) {
    window.open(modalPromotion.value.modalConfig.buttonLink, '_blank')
  }
  closeModal()
}

onMounted(async () => {
  await loadModalPromotion()

  if (shouldShowModal()) {
    const delay = modalPromotion.value?.modalConfig?.delay || 3000
    setTimeout(showModal, delay)
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
  color: var(--text-muted);
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
  color: var(--text-primary);
}

.promo-description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
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

.promo-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}

.promo-btn.primary {
  background: var(--gradient-primary);
  color: var(--text-white);
  box-shadow: 0 4px 15px var(--shadow-primary);
}

.promo-btn.primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--shadow-primary-hover);
}

.promo-btn.secondary {
  background: transparent;
  color: var(--primary-blue);
  border: 2px solid var(--primary-blue);
}

.promo-btn.secondary:hover {
  background: var(--primary-blue);
  color: var(--text-white);
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

  .promo-description {
    font-size: 0.9rem;
  }

  .promo-btn {
    padding: 0.75rem 1.25rem;
    font-size: 0.9rem;
  }
}
</style>
