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
                      <FontAwesomeIcon :icon="['fas', 'home']" />
                      <span>1115 A Mathews Mint Hill Rd<br />Mathews, NC 28105</span>
                    </div>
                    <div class="phone">
                      <FontAwesomeIcon :icon="['fas', 'phone']" />
                      <span>(794) 847-5992</span>
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
                      <FontAwesomeIcon :icon="['fas', 'home']" />
                      <span>2712 W Mallard Creek Church Rd<br />Charlotte, NC 28262</span>
                    </div>
                    <div class="phone">
                      <FontAwesomeIcon :icon="['fas', 'phone']" />
                      <span>(704) 717-8180</span>
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
                      <FontAwesomeIcon :icon="['fas', 'home']" />
                      <span>4625 Piedmont Row Dr #145A<br />Charlotte, NC 28210</span>
                    </div>
                    <div class="phone">
                      <FontAwesomeIcon :icon="['fas', 'phone']" />
                      <span>(704) 554-1788</span>
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

            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>

      <ServiceArea />
    </div>
  </section>
</template>

<script setup>
import ServiceArea from './ServiceArea.vue'

const openMap = () => {
  // Open map in new window or modal
  window.open('https://maps.google.com', '_blank')
}
</script>

<style scoped>
.contact {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
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
  border-radius: 16px;
  box-shadow: 0 4px 6px var(--transparent-black);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.info-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px var(--shadow-light);
}

.info-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-hero);
  border-radius: 12px;
  color: var(--text-white);
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

.locations-icon {
  width: 40px;
  height: 40px;
  background: var(--gradient-primary);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-white);
  font-size: 1rem;
  flex-shrink: 0;
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
  color: var(--text-muted);
  font-style: italic;
}

.locations-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.location-item {
  padding: 1.5rem;
  background: var(--bg-primary);
  border: 2px solid var(--border-light);
  border-radius: 16px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.location-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.location-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px var(--shadow-light);
  border-color: var(--primary-blue);
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
.phone {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;
  background: var(--bg-secondary);
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.address:hover,
.phone:hover {
  background: var(--border-light);
}

.address svg,
.phone svg {
  color: var(--primary-blue);
  font-size: 1rem;
  margin-top: 0.125rem;
  flex-shrink: 0;
  width: 16px;
}

.address span,
.phone span {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
}

.contact-form {
  background: var(--bg-primary);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 6px var(--transparent-black);
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
  border: 2px solid var(--border-medium);
  border-radius: 12px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  background: var(--bg-primary);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px var(--shadow-primary);
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
  display: inline-block;
  text-align: center;
}

.btn-primary {
  background: var(--gradient-primary);
  color: var(--text-white);
  box-shadow: 0 4px 15px var(--shadow-primary);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--shadow-primary-hover);
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-secondary {
  background: transparent;
  color: var(--primary-blue);
  border: 2px solid var(--primary-blue);
}

.btn-secondary:hover {
  background: var(--primary-blue);
  color: var(--text-white);
  transform: translateY(-2px);
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

  .locations-header {
    justify-content: center;
    margin-bottom: 2rem;
  }

  .locations-list {
    gap: 1.25rem;
  }

  .location-item {
    padding: 1.25rem;
  }

  .location-header {
    flex-direction: column;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .location-details {
    gap: 1.25rem;
  }

  .address,
  .phone {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
    padding: 1rem;
  }

  .address svg,
  .phone svg {
    align-self: center;
    margin-top: 0;
    font-size: 1.25rem;
  }

  .address span,
  .phone span {
    font-size: 1rem;
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
  }
}
</style>
