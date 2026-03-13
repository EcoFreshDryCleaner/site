<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">
          Ready to experience eco-friendly dry cleaning? Contact us to schedule your first pickup.
        </p>
      </div>

      <div class="contact-content">
        <div class="contact-info">
          <div class="info-card">
            <div class="info-icon">
              <FontAwesomeIcon :icon="['fas', 'envelope']" />
            </div>
            <div class="info-content">
              <h3>Email Us</h3>
              <p>hello@ecofreshdrycleaner.com</p>
            </div>
          </div>

          <div class="info-card">
            <div class="info-content">
              <div class="locations-header">
                <div class="info-icon">
                  <FontAwesomeIcon :icon="['fas', 'map-marker-alt']" />
                </div>
                <h3>Our Locations</h3>
              </div>
              <div class="locations-list">
                <div class="location-item">
                  <div class="location-header">
                    <div class="location-title">
                      <strong>Mathews</strong>
                      <span class="location-subtitle">Location</span>
                    </div>
                  </div>
                  <div class="location-details">
                    <div class="address">
                      <FontAwesomeIcon :icon="['fas', 'home']" class="detail-icon" />
                      <span>1115 A Mathews Mint Hill Rd<br />Mathews, NC 28105</span>
                    </div>
                    <div class="phone">
                      <FontAwesomeIcon :icon="['fas', 'phone']" class="detail-icon" />
                      <span>(704) 847-5992</span>
                    </div>
                    <div class="hours">
                      <FontAwesomeIcon :icon="['fas', 'clock']" class="detail-icon" />
                      <span>Mon-Fri: 7:00 AM - 6:00 PM<br />Sat: 9:00 AM - 3:00 PM</span>
                    </div>
                  </div>
                </div>
                <div class="location-item">
                  <div class="location-header">
                    <div class="location-title">
                      <strong>Mallard Creek</strong>
                      <span class="location-subtitle">Location</span>
                    </div>
                  </div>
                  <div class="location-details">
                    <div class="address">
                      <FontAwesomeIcon :icon="['fas', 'home']" class="detail-icon" />
                      <span>2712 W Mallard Creek Church Rd<br />Charlotte, NC 28262</span>
                    </div>
                    <div class="phone">
                      <FontAwesomeIcon :icon="['fas', 'phone']" class="detail-icon" />
                      <span>(704) 717-8180</span>
                    </div>
                    <div class="hours">
                      <FontAwesomeIcon :icon="['fas', 'clock']" class="detail-icon" />
                      <span>Mon-Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 3:00 PM</span>
                    </div>
                  </div>
                </div>
                <div class="location-item">
                  <div class="location-header">
                    <div class="location-title">
                      <strong>Piedmont Row</strong>
                      <span class="location-subtitle">Location</span>
                    </div>
                  </div>
                  <div class="location-details">
                    <div class="address">
                      <FontAwesomeIcon :icon="['fas', 'home']" class="detail-icon" />
                      <span>4625 Piedmont Row Dr #145A<br />Charlotte, NC 28210</span>
                    </div>
                    <div class="phone">
                      <FontAwesomeIcon :icon="['fas', 'phone']" class="detail-icon" />
                      <span>(704) 554-1788</span>
                    </div>
                    <div class="hours">
                      <FontAwesomeIcon :icon="['fas', 'clock']" class="detail-icon" />
                      <span>Mon-Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 3:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="info-card">
            <div class="info-icon">
              <FontAwesomeIcon :icon="['fas', 'truck']" />
            </div>
            <div class="info-content">
              <h3>Service Area</h3>
              <p>Charlotte, NC & surrounding areas</p>
              <span class="info-note">Free pickup & delivery included</span>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <div class="form-header">
            <h3>Send us a Message</h3>
            <p>We'll get back to you within 48 hours</p>
          </div>

          <form
        ref="contactForm"
        action="https://forms.tanuj.xyz/ecofresh/submit"
              method="post"
              enctype="application/x-www-form-urlencoded"
              target="_self"
              class="form"
              accept-charset="utf-8"
              @submit="handleFormSubmit"
          >
            <div class="form-group">
              <label for="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your full name"
              />
            </div>

            <div class="form-group">
              <label for="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email address"
              />
            </div>

            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
            </div>

            <div class="form-group">
              <label for="service">Service Type</label>
              <select id="service" name="service" :disabled="isLoadingServices">
                <option value="">{{ isLoadingServices ? 'Loading services...' : 'Select a service' }}</option>
                <option 
                  v-for="service in services" 
                  :key="service.id" 
                  :value="service.slug"
                >
                  {{ service.name || service.title || service.slug }}
                </option>
              </select>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell us about your dry cleaning needs..."
              ></textarea>
            </div>

            <ClientOnly>
              <div class="form-group recaptcha-group">
                <div class="recaptcha-container">
                  <div 
                    class="g-recaptcha" 
                    :data-sitekey="recaptchaSiteKey"
                    data-action="CONTACT_FORM"
                    data-callback="onRecaptchaSuccess"
                  ></div>
                </div>
                <span v-if="recaptchaError" class="field-error">{{ recaptchaError }}</span>
              </div>
              <template #placeholder>
                <div class="recaptcha-placeholder">
                  <p>Loading security verification...</p>
                </div>
              </template>
            </ClientOnly>

            <button type="submit" class="btn btn-primary">
              <FontAwesomeIcon :icon="['fas', 'paper-plane']" class="btn-icon" />
              Send Message
            </button>
          </form>
        </div>
      </div>

      <ClientOnly>
        <ServiceArea />
        <template #placeholder>
          <div class="service-area-placeholder">
            <div class="placeholder-content">
              <h3>Our Service Area</h3>
              <p>Loading interactive map...</p>
            </div>
          </div>
        </template>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ServiceArea from './ServiceArea.vue'
import { servicesService } from '../services/servicesService.js'

const services = ref([])
const isLoadingServices = ref(true)
const contactForm = ref(null)
const recaptchaError = ref('')

const recaptchaSiteKey = ref(import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LebETksAAAAAOUVZTqZty4g-c4HDjBushb0dcai')

const onRecaptchaSuccess = () => {
  recaptchaError.value = ''
}

onMounted(async () => {
  try {
    const fetchedServices = await servicesService.getAllServices()
    console.log('Fetched services:', fetchedServices)
    services.value = fetchedServices
  } catch (error) {
    console.error('Error fetching services:', error)
    services.value = []
  } finally {
    isLoadingServices.value = false
  }

  if (!import.meta.env.SSR) {
    window.onRecaptchaSuccess = onRecaptchaSuccess
  }

  if (recaptchaSiteKey.value && !import.meta.env.SSR) {
    if (!document.querySelector('script[src*="recaptcha"]')) {
      const script = document.createElement('script')
      script.src = 'https://www.google.com/recaptcha/enterprise.js'
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }
  }
})

const handleFormSubmit = (event) => {
  console.log('🔵 Form submit handler called')
  recaptchaError.value = ''
  
  if (!contactForm.value) {
    console.error('❌ Contact form ref is null')
    event.preventDefault()
    return false
  }

  console.log('✅ Contact form ref found')

  const recaptchaResponse = contactForm.value.querySelector('textarea[name="g-recaptcha-response"]')
  console.log('🔍 reCAPTCHA response element:', recaptchaResponse)
  console.log('🔍 reCAPTCHA response value:', recaptchaResponse?.value)
  console.log('🔍 reCAPTCHA response value length:', recaptchaResponse?.value?.length)
  
  if (!recaptchaResponse || !recaptchaResponse.value) {
    console.warn('⚠️ reCAPTCHA not completed, preventing submission')
    event.preventDefault()
    recaptchaError.value = 'Please complete the "I\'m not a robot" verification.'
    
    const recaptchaContainer = contactForm.value.querySelector('.recaptcha-container')
    if (recaptchaContainer) {
      console.log('📍 Scrolling to reCAPTCHA container')
      recaptchaContainer.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    return false
  }

  console.log('✅ reCAPTCHA validated successfully')
  console.log('📤 Allowing form to submit normally')
  return true
}
</script>

<style scoped>
.contact {
  padding: 4rem 0;
  background: var(--bg-eco-lighter);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  align-items: start;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  display: flex;
  gap: 1.25rem;
  padding: 1.5rem;
  background: var(--bg-primary);
  border-radius: 10px;
  border: 1px solid var(--border-medium);
}

.info-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-eco-light);
  border-radius: 10px;
  color: var(--eco-green);
}

.info-icon svg {
  font-size: 1.3rem;
}

.locations-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.info-content h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.info-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0 0 0.5rem 0;
}

.info-note {
  font-size: 0.9rem;
  color: var(--eco-green);
  font-style: italic;
  font-weight: 500;
}

.info-content {
  flex: 1;
  min-width: 0;
}

.locations-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.location-item {
  padding: 1.25rem;
  background: var(--bg-eco-light);
  border: 1px solid var(--border-eco);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

.location-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.location-title {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.location-title strong {
  color: var(--text-primary);
  font-weight: 700;
  font-size: 1.05rem;
}

.location-subtitle {
  color: var(--text-muted);
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.location-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

.address,
.phone,
.hours {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  padding: 0.5rem;
  background: var(--bg-primary);
  border-radius: 6px;
  border: 1px solid var(--border-medium);
}

.detail-icon {
  font-size: 1rem;
  margin-top: 0.125rem;
  flex-shrink: 0;
  width: 18px;
  text-align: center;
  color: var(--eco-green);
}

.address span,
.phone span,
.hours span {
  color: var(--text-secondary);
  font-size: 0.85rem;
  line-height: 1.5;
}

.contact-form {
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid var(--border-medium);
}

.form-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.form-header h3 {
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.35rem;
}

.form-header p {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.form-group label {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.9rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.75rem;
  border: 1px solid var(--border-medium);
  border-radius: 6px;
  font-size: 0.95rem;
  transition: border-color 0.2s ease;
  background: var(--bg-primary);
  color: var(--text-primary);
}

.form-group select {
  color: var(--text-primary) !important;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%2347a86a' d='M8 11L3 6h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
  padding-right: 2.5rem;
  cursor: pointer;
}

.form-group select option {
  background: var(--bg-primary) !important;
  color: var(--text-primary) !important;
}

.form-group select:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-blue);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.recaptcha-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem 0;
  gap: 0.5rem;
}

.recaptcha-container {
  display: flex;
  justify-content: center;
}

.recaptcha-group :deep(.g-recaptcha) {
  display: flex;
  justify-content: center;
}

.field-error {
  color: #dc3545;
  font-size: 0.85rem;
  margin-top: 0.25rem;
  display: block;
  text-align: center;
  font-weight: 500;
}

.recaptcha-placeholder {
  padding: 1rem;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.9rem;
  min-height: 78px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  padding: 0.85rem 1.75rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  justify-content: center;
}

.btn-icon {
  font-size: 1rem;
}

.btn-primary {
  background: var(--primary-blue);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: var(--primary-blue-dark);
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .info-card {
    flex-direction: column;
    text-align: center;
    padding: 1.25rem;
  }

  .info-icon {
    align-self: center;
    margin-bottom: 0.5rem;
  }

  .info-content {
    text-align: center;
  }

  .locations-header {
    justify-content: center;
    margin-bottom: 1.5rem;
  }

  .location-item {
    padding: 1rem;
    min-height: auto;
    flex-direction: column;
  }

  .location-header {
    flex-direction: column;
    text-align: center;
    margin-bottom: 1rem;
  }

  .location-title {
    padding-right: 0;
    text-align: center;
  }

  .address,
  .phone,
  .hours {
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem;
  }

  .detail-icon {
    align-self: center;
    margin-top: 0;
  }

  .address span,
  .phone span,
  .hours span {
    text-align: center;
  }

  .contact-form {
    padding: 1.5rem;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}

/* Service Area Placeholder */
.service-area-placeholder {
  padding: 3rem 0;
  text-align: center;
  background: var(--bg-secondary);
  border-radius: 10px;
  margin-top: 2rem;
}

.placeholder-content h3 {
  font-size: 1.35rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.placeholder-content p {
  color: var(--text-muted);
}
</style>
