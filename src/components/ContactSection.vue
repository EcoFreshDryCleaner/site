<template>
  <section id="contact" class="contact">
    <!-- Background Pattern -->
    <div class="contact-bg-pattern">
      <div class="pattern-dot dot-1"></div>
      <div class="pattern-dot dot-2"></div>
      <div class="pattern-dot dot-3"></div>
      <div class="pattern-dot dot-4"></div>
      <div class="pattern-wave wave-1"></div>
      <div class="pattern-wave wave-2"></div>
    </div>

    <div class="container">
      <div class="section-header">
        <div class="header-badge">
          <FontAwesomeIcon :icon="['fas', 'phone']" class="badge-icon" />
          <span>Contact Us</span>
        </div>
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
                      <span>(794) 847-5992</span>
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
            <FontAwesomeIcon :icon="['fas', 'edit']" class="form-icon" />
            <h3>Send us a Message</h3>
            <p>We'll get back to you within 24 hours</p>
          </div>

          <form
            action="https://formkeep.com/f/6563620d882d"
            accept-charset="UTF-8"
            enctype="multipart/form-data"
            class="form"
            method="POST"
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
              <select id="service" name="service">
                <option value="">Select a service</option>
                <option value="basic">Basic Clean</option>
                <option value="premium">Premium Care</option>
                <option value="luxury">Luxury Service</option>
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
import ServiceArea from './ServiceArea.vue'

const openMap = () => {
  // Open map in new window or modal
  if (!import.meta.env.SSR) {
    window.open('https://maps.google.com', '_blank')
  }
}
</script>

<style scoped>
.contact {
  padding: 6rem 0;
  background: var(--bg-eco-lighter);
  position: relative;
  overflow: hidden;
}

/* Background Pattern */
.contact-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.pattern-dot {
  position: absolute;
  width: 6px;
  height: 6px;
  background: var(--pattern-medium);
  border-radius: 50%;
  animation: float-dot 8s ease-in-out infinite;
}

.dot-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.dot-2 {
  top: 30%;
  right: 15%;
  animation-delay: 2s;
}

.dot-3 {
  bottom: 25%;
  left: 20%;
  animation-delay: 4s;
}

.dot-4 {
  bottom: 15%;
  right: 25%;
  animation-delay: 6s;
}

.pattern-wave {
  position: absolute;
  width: 100px;
  height: 2px;
  background: var(--pattern-light);
  border-radius: 1px;
  animation: wave 6s ease-in-out infinite;
}

.wave-1 {
  top: 40%;
  left: 5%;
  animation-delay: 0s;
}

.wave-2 {
  bottom: 35%;
  right: 10%;
  animation-delay: 3s;
}

@keyframes float-dot {
  0%,
  100% {
    transform: translateY(0px) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-15px) scale(1.2);
    opacity: 1;
  }
}

@keyframes wave {
  0%,
  100% {
    transform: scaleX(1);
    opacity: 0.3;
  }
  50% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.header-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--gradient-eco);
  color: white;
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 4px 15px var(--shadow-eco);
}

.badge-icon {
  font-size: 1.2rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card {
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: var(--bg-primary);
  border-radius: 20px;
  box-shadow: 0 8px 25px var(--shadow-light);
  transition: all 0.3s ease;
  border: 1px solid var(--border-eco);
  position: relative;
  overflow: hidden;
}

.info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-eco);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.info-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px var(--shadow-medium);
  border-color: var(--eco-green-light);
}

.info-card:hover::before {
  opacity: 1;
}

.info-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-eco);
  border-radius: 16px;
  color: white;
  box-shadow: 0 4px 15px var(--shadow-eco);
}

.info-icon svg {
  font-size: 2rem;
}

.locations-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.info-content h3 {
  font-size: 1.25rem;
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

.locations-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.location-item {
  padding: 1.5rem;
  background: var(--bg-eco-light);
  border: 2px solid var(--border-eco);
  border-radius: 16px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  min-height: 200px;
  justify-content: space-between;
}

.location-item::before {
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

.location-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px var(--shadow-medium);
  border-color: var(--eco-green-light);
}

.location-item:hover::before {
  transform: scaleX(1);
}

.location-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
}

.location-title {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-right: 2rem;
}

.location-title strong {
  color: var(--text-primary);
  font-weight: 700;
  font-size: 1.1rem;
}

.location-subtitle {
  color: var(--text-muted);
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.location-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.address,
.phone,
.hours {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;
  background: var(--bg-primary);
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid var(--border-eco);
}

.address:hover,
.phone:hover,
.hours:hover {
  background: var(--bg-eco-light);
  border-color: var(--eco-green-light);
  transform: translateX(5px);
}

.detail-icon {
  font-size: 1.2rem;
  margin-top: 0.125rem;
  flex-shrink: 0;
  width: 20px;
  text-align: center;
  color: var(--eco-green);
}

.address span,
.phone span,
.hours span {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
}

.contact-form {
  background: var(--bg-primary);
  padding: 2.5rem;
  border-radius: 24px;
  box-shadow: 0 8px 25px var(--shadow-light);
  border: 1px solid var(--border-eco);
  position: relative;
  overflow: hidden;
}

.contact-form::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-eco);
  opacity: 0.8;
}

.form-header {
  text-align: center;
  margin-bottom: 2rem;
}

.form-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
  color: var(--eco-green);
}

.form-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.form-header p {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.95rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 1rem;
  border: 2px solid var(--border-eco);
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: var(--bg-primary);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--eco-green);
  box-shadow: 0 0 0 3px var(--shadow-eco);
  transform: translateY(-2px);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
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

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--shadow-eco);
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
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

/* Services Showcase Styles */
.services-showcase {
  background: var(--bg-primary);
  padding: 3rem 2rem;
  border-radius: 24px;
  box-shadow: 0 8px 25px var(--shadow-light);
  border: 1px solid var(--border-eco);
  margin-bottom: 4rem;
  text-align: center;
}

.showcase-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 2rem;
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: var(--bg-eco-light);
  border-radius: 16px;
  border: 1px solid var(--border-eco);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.service-card::before {
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

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px var(--shadow-medium);
  border-color: var(--eco-green-light);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-eco-lighter);
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.service-info h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.service-info p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.service-price {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--eco-green);
  background: var(--bg-eco-lighter);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  display: inline-block;
}

@media (max-width: 768px) {
  .contact {
    padding: 4rem 0;
  }

  .container {
    padding: 0 1.5rem;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1.1rem;
  }

  .info-card {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }

  .info-icon {
    align-self: center;
    margin-bottom: 1rem;
  }

  .info-content {
    text-align: center;
  }

  .locations-header {
    justify-content: center;
    margin-bottom: 2rem;
  }

  .locations-list {
    gap: 1.25rem;
  }

  .location-item {
    padding: 1.25rem;
    min-height: auto;
    flex-direction: column;
  }

  .location-header {
    flex-direction: column;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .location-title {
    padding-right: 0;
    text-align: center;
  }

  .location-details {
    gap: 1.25rem;
  }

  .address,
  .phone,
  .hours {
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
  }

  .detail-icon {
    align-self: center;
    margin-top: 0;
    font-size: 1.5rem;
  }

  .address span,
  .phone span,
  .hours span {
    font-size: 1rem;
    text-align: center;
  }

  .contact-form {
    padding: 2rem;
  }

  .form {
    gap: 1.25rem;
  }

  .form-group {
    gap: 0.75rem;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 1.25rem;
    font-size: 1rem;
  }

  .btn {
    padding: 1.25rem 2rem;
    font-size: 1.1rem;
    justify-content: center;
    width: 100%;
  }

  .pattern-dot,
  .pattern-wave {
    display: none;
  }

  .services-showcase {
    padding: 2rem 1.5rem;
  }

  .showcase-title {
    font-size: 1.8rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .service-card {
    padding: 1.5rem;
  }

  .service-image {
    height: 150px;
  }
}

/* Service Area Placeholder */
.service-area-placeholder {
  padding: 4rem 0;
  text-align: center;
  background: var(--bg-secondary);
  border-radius: 20px;
  margin-top: 2rem;
}

.placeholder-content h3 {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.placeholder-content p {
  color: var(--text-muted);
  font-size: 1rem;
}
</style>
