<template>
  <div class="thank-you-page">
    <!-- Background Pattern -->
    <div class="thank-you-bg-pattern">
      <div class="pattern-dot dot-1"></div>
      <div class="pattern-dot dot-2"></div>
      <div class="pattern-dot dot-3"></div>
      <div class="pattern-dot dot-4"></div>
      <div class="pattern-wave wave-1"></div>
      <div class="pattern-wave wave-2"></div>
    </div>

    <div class="container">
      <div class="thank-you-content">
        <!-- Success Icon -->
        <div class="success-icon">
          <FontAwesomeIcon :icon="['fas', 'check-circle']" />
        </div>

        <!-- Main Message -->
        <div class="thank-you-message">
          <h1 class="main-title">Thank You!</h1>
          <p class="subtitle">Your message has been sent successfully</p>
          <p class="description">
            We've received your inquiry and will get back to you within 48 hours. 
            Our team is excited to help you with your eco-friendly dry cleaning needs!
          </p>
        </div>

        <!-- Next Steps -->
        <div class="next-steps">
          <h3>What happens next?</h3>
          <div class="steps-grid">
            <div class="step-item">
              <div class="step-icon">
                <FontAwesomeIcon :icon="['fas', 'phone']" />
              </div>
              <div class="step-content">
                <h4>We'll Contact You</h4>
                <p>We'll reach out within 48 hours via your preferred contact method.</p>
              </div>
            </div>
            <div class="step-item">
              <div class="step-icon">
                <FontAwesomeIcon :icon="['fas', 'truck']" />
              </div>
              <div class="step-content">
                <h4>Schedule Service</h4>
                <p>We'll help you schedule your first eco-friendly dry cleaning service.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="action-buttons">
          <router-link to="/" class="btn btn-primary">
            <FontAwesomeIcon :icon="['fas', 'home']" class="btn-icon" />
            Return Home
          </router-link>
          <router-link to="/#pricing" class="btn btn-secondary">
            <FontAwesomeIcon :icon="['fas', 'list']" class="btn-icon" />
            View Services
          </router-link>
        </div>

        <!-- Contact Info -->
        <div class="contact-info">
          <h3>Need immediate assistance?</h3>
          <div class="contact-methods">
            <a href="mailto:hello@ecofreshdrycleaner.com" class="contact-method">
              <FontAwesomeIcon :icon="['fas', 'envelope']" />
              <span>hello@ecofreshdrycleaner.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Add entrance animation
  document.body.classList.add('thank-you-loaded')
})
</script>

<style scoped>
.thank-you-page {
  min-height: 100vh;
  background: var(--bg-eco-lighter);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 2rem 0;
}

/* Background Pattern */
.thank-you-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.pattern-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  background: var(--pattern-medium);
  border-radius: 50%;
  animation: float-dot 8s ease-in-out infinite;
}

.dot-1 {
  top: 15%;
  left: 10%;
  animation-delay: 0s;
}

.dot-2 {
  top: 25%;
  right: 15%;
  animation-delay: 2s;
}

.dot-3 {
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

.dot-4 {
  bottom: 10%;
  right: 25%;
  animation-delay: 6s;
}

.pattern-wave {
  position: absolute;
  width: 120px;
  height: 3px;
  background: var(--pattern-light);
  border-radius: 2px;
  animation: wave 6s ease-in-out infinite;
}

.wave-1 {
  top: 35%;
  left: 5%;
  animation-delay: 0s;
}

.wave-2 {
  bottom: 30%;
  right: 10%;
  animation-delay: 3s;
}

@keyframes float-dot {
  0%, 100% {
    transform: translateY(0px) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-20px) scale(1.3);
    opacity: 1;
  }
}

@keyframes wave {
  0%, 100% {
    transform: scaleX(1);
    opacity: 0.3;
  }
  50% {
    transform: scaleX(1.8);
    opacity: 0.7;
  }
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.thank-you-content {
  text-align: center;
  background: var(--bg-primary);
  padding: 4rem 3rem;
  border-radius: 24px;
  box-shadow: 0 20px 40px var(--shadow-light);
  border: 1px solid var(--border-eco);
  position: relative;
  overflow: hidden;
}

.thank-you-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: var(--gradient-eco);
}

/* Success Icon */
.success-icon {
  font-size: 5rem;
  color: var(--eco-green);
  margin-bottom: 2rem;
  animation: bounce-in 0.8s ease-out;
}

@keyframes bounce-in {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Main Message */
.thank-you-message {
  margin-bottom: 3rem;
}

.main-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fade-in-up 0.6s ease-out 0.2s both;
}

.subtitle {
  font-size: 1.5rem;
  color: var(--eco-green);
  font-weight: 600;
  margin-bottom: 1.5rem;
  animation: fade-in-up 0.6s ease-out 0.4s both;
}

.description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  animation: fade-in-up 0.6s ease-out 0.6s both;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Next Steps */
.next-steps {
  margin-bottom: 3rem;
  animation: fade-in-up 0.6s ease-out 0.8s both;
}

.next-steps h3 {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2rem;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1.5rem;
  background: var(--bg-eco-light);
  border-radius: 16px;
  border: 1px solid var(--border-eco);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.step-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-eco);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.step-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px var(--shadow-medium);
  border-color: var(--eco-green-light);
}

.step-item:hover::before {
  transform: scaleX(1);
}

.step-icon {
  font-size: 2.5rem;
  color: var(--eco-green);
  margin-bottom: 1rem;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  border-radius: 50%;
  box-shadow: 0 4px 15px var(--shadow-eco);
}

.step-content h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.step-content p {
  color: var(--text-secondary);
  line-height: 1.5;
  font-size: 0.95rem;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 3rem;
  animation: fade-in-up 0.6s ease-out 1s both;
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
  background: var(--gradient-eco);
  color: white;
  box-shadow: 0 4px 15px var(--shadow-eco);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--shadow-eco);
}

.btn-secondary {
  background: transparent;
  color: var(--eco-green);
  border: 2px solid var(--eco-green);
}

.btn-secondary:hover {
  background: var(--eco-green);
  color: white;
  transform: translateY(-2px);
}

/* Contact Info */
.contact-info {
  animation: fade-in-up 0.6s ease-out 1.2s both;
}

.contact-info h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

.contact-methods {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: var(--bg-eco-light);
  border-radius: 12px;
  text-decoration: none;
  color: var(--text-primary);
  border: 1px solid var(--border-eco);
  transition: all 0.3s ease;
  font-weight: 500;
}

.contact-method:hover {
  background: var(--eco-green);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--shadow-eco);
}

.contact-method svg {
  font-size: 1.2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .thank-you-page {
    padding: 1rem 0;
  }

  .container {
    padding: 0 1rem;
  }

  .thank-you-content {
    padding: 3rem 2rem;
  }

  .main-title {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.3rem;
  }

  .description {
    font-size: 1rem;
  }

  .steps-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .step-item {
    padding: 1.5rem 1rem;
  }

  .action-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }

  .contact-methods {
    flex-direction: column;
    align-items: center;
  }

  .contact-method {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }

  .pattern-dot,
  .pattern-wave {
    display: none;
  }
}

@media (max-width: 480px) {
  .thank-you-content {
    padding: 2rem 1.5rem;
  }

  .main-title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .next-steps h3 {
    font-size: 1.5rem;
  }

  .contact-info h3 {
    font-size: 1.3rem;
  }
}
</style>
