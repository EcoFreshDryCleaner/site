<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">EcoFresh Dry Cleaner</h3>
          <p class="footer-description">
            Professional eco-friendly dry cleaning services with free pickup and delivery.
          </p>
        </div>

        <div class="footer-section">
          <h4 class="footer-heading">Services</h4>
          <ul class="footer-links">
            <li><a href="/#pricing">Basic Clean</a></li>
            <li><a href="/#pricing">Premium Care</a></li>
            <li><a href="/#pricing">Luxury Service</a></li>
            <li><a href="/#mobile-app">Mobile App</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="footer-heading">Company</h4>
          <ul class="footer-links">
            <li><a href="/#about">About Us</a></li>
            <li><a href="/#contact">Contact</a></li>
            <li><a href="/#testimonials">Reviews</a></li>
            <li><a href="/#promotions">Offers</a></li>
            <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
            <li><router-link to="/terms-of-service">Terms of Service</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="footer-heading">Contact Info</h4>
          <div class="contact-info">
            <p><FontAwesomeIcon :icon="['fas', 'envelope']" /> hello@ecofreshdrycleaner.com</p>
          </div>
        </div>
      </div>

      <div class="footer-locations">
        <div class="location-item">
          <FontAwesomeIcon :icon="['fas', 'map-marker-alt']" />
          <div class="location-details">
            <strong>Mathews</strong>
            <span>1115 A Mathews Mint Hill Rd, Mathews, NC 28105</span>
            <span class="hours">Mon-Fri: 7:00 AM - 6:00 PM | Sat: 9:00 AM - 3:00 PM</span>
          </div>
        </div>
        <div class="location-item">
          <FontAwesomeIcon :icon="['fas', 'map-marker-alt']" />
          <div class="location-details">
            <strong>Mallard Creek</strong>
            <span>2712 W Mallard Creek Church Rd, Charlotte, NC 28262</span>
            <span class="hours">Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 3:00 PM</span>
          </div>
        </div>
        <div class="location-item">
          <FontAwesomeIcon :icon="['fas', 'map-marker-alt']" />
          <div class="location-details">
            <strong>Piedmont Row</strong>
            <span>4625 Piedmont Row Dr #145A, Charlotte, NC 28210</span>
            <span class="hours">Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 3:00 PM</span>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2025 EcoFresh Dry Cleaner. All rights reserved.</p>
        <div class="footer-legal">
          <router-link to="/privacy-policy">Privacy Policy</router-link>
          <router-link to="/terms-of-service">Terms of Service</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: var(--bg-dark);
  color: var(--text-white);
  padding: 3rem 0 1.5rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-title {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: var(--text-white);
}

.footer-description {
  color: var(--text-light);
  line-height: 1.6;
}

.footer-heading {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--border-medium);
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.footer-links a {
  color: var(--text-light);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--primary-blue-light);
}

.contact-info p {
  color: var(--text-light);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-info p svg {
  font-size: 1rem;
  width: 16px;
}

.footer-locations {
  margin: 1.5rem 0;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.location-item {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  padding: 0.6rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
}

.location-item svg {
  color: var(--primary-blue-light);
  font-size: 0.9rem;
  margin-top: 0.125rem;
  flex-shrink: 0;
}

.location-details {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.location-details strong {
  color: var(--primary-blue-light);
  font-weight: 600;
  font-size: 0.85rem;
}

.location-details span {
  color: var(--text-light);
  font-size: 0.8rem;
  line-height: 1.3;
}

.location-details .hours {
  color: var(--primary-blue-light);
  font-size: 0.75rem;
  font-weight: 500;
  margin-top: 0.15rem;
}

.footer-bottom {
  border-top: 1px solid var(--border-dark);
  padding-top: 1.5rem;
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom p {
  color: var(--text-light);
  font-size: 0.85rem;
}

.footer-legal {
  display: flex;
  gap: 1.5rem;
}

.footer-legal a {
  color: var(--text-light);
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.2s ease;
}

.footer-legal a:hover {
  color: var(--primary-blue-light);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }

  .footer-legal {
    justify-content: center;
  }

  .footer-locations {
    flex-direction: column;
  }
}
</style>
