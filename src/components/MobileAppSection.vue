<template>
  <section id="mobile-app" class="mobile-app">
    <div class="container">
      <div class="app-content">
        <div class="app-info">
          <div class="section-header">
            <h2 class="section-title">Our Mobile App is Coming Soon!</h2>
            <p class="section-subtitle">
              We're working hard to bring you a mobile app that will make scheduling pickups and
              drop-offs effortless. Track your orders in real-time and manage your dry cleaning from
              anywhere.
            </p>
          </div>

          <div class="app-features">
            <div class="feature-item">
              <div class="feature-icon">
                <FontAwesomeIcon :icon="['fas', 'mobile']" />
              </div>
              <div class="feature-content">
                <h3>Easy Scheduling</h3>
                <p>Book pickup and delivery times that work for you with just a few taps.</p>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-icon">
                <FontAwesomeIcon :icon="['fas', 'chart-bar']" />
              </div>
              <div class="feature-content">
                <h3>Real-time Tracking</h3>
                <p>Follow your order from pickup to delivery with live status updates.</p>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-icon">
                <FontAwesomeIcon :icon="['fas', 'credit-card']" />
              </div>
              <div class="feature-content">
                <h3>Secure Payments</h3>
                <p>Pay securely through the app with multiple payment options available.</p>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-icon">
                <FontAwesomeIcon :icon="['fas', 'bullseye']" />
              </div>
              <div class="feature-content">
                <h3>Order History</h3>
                <p>Access your complete order history and reorder your favorite services.</p>
              </div>
            </div>
          </div>

          <div class="app-actions">
            <div class="download-buttons">
              <button class="download-btn app-store coming-soon" @click="notifyComingSoon('ios')">
                <div class="btn-content">
                  <span class="store-icon">
                    <FontAwesomeIcon :icon="['fab', 'apple']" />
                  </span>
                  <div class="store-info">
                    <span class="store-label">Coming Soon on</span>
                    <span class="store-name">App Store</span>
                  </div>
                </div>
              </button>

              <button
                class="download-btn google-play coming-soon"
                @click="notifyComingSoon('android')"
              >
                <div class="btn-content">
                  <span class="store-icon">
                    <FontAwesomeIcon :icon="['fab', 'google-play']" />
                  </span>
                  <div class="store-info">
                    <span class="store-label">Coming Soon on</span>
                    <span class="store-name">Google Play</span>
                  </div>
                </div>
              </button>
            </div>

            <!-- <div class="qr-section">
              <div class="qr-code">
                <div class="qr-placeholder">
                  <span class="qr-icon">
                    <FontAwesomeIcon :icon="['fas', 'qrcode']" />
                  </span>
                  <span class="qr-text">Scan to download</span>
                </div>
              </div>
            </div> -->
          </div>
        </div>

        <div class="app-preview">
          <div class="phone-mockup">
            <div class="phone-screen">
              <div class="app-screens">
                <div class="screen screen-1">
                  <div class="screen-header">
                    <div class="status-bar">
                      <span>9:41</span>
                      <div class="status-icons">
                        <span><FontAwesomeIcon :icon="['fas', 'signal']" /></span>
                        <span><FontAwesomeIcon :icon="['fas', 'battery-full']" /></span>
                      </div>
                    </div>
                  </div>
                  <div class="screen-content">
                    <div class="app-header">
                      <h3>EcoFresh</h3>
                      <span class="user-avatar">
                        <FontAwesomeIcon :icon="['fas', 'user']" />
                      </span>
                    </div>
                    <div class="quick-actions">
                      <div class="action-btn">
                        <span class="action-icon">
                          <FontAwesomeIcon :icon="['fas', 'box']" />
                        </span>
                        <span>Schedule Pickup</span>
                      </div>
                      <div class="action-btn">
                        <span class="action-icon">
                          <FontAwesomeIcon :icon="['fas', 'clipboard-list']" />
                        </span>
                        <span>My Orders</span>
                      </div>
                    </div>
                    <div class="order-status">
                      <h4>Current Order</h4>
                      <div class="status-card">
                        <div class="status-info">
                          <span class="order-number">#12345</span>
                          <span class="status-text">In Progress</span>
                        </div>
                        <div class="progress-bar">
                          <div class="progress-fill"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="screen screen-2">
                  <div class="screen-header">
                    <div class="status-bar">
                      <span>9:41</span>
                      <div class="status-icons">
                        <span><FontAwesomeIcon :icon="['fas', 'signal']" /></span>
                        <span><FontAwesomeIcon :icon="['fas', 'battery-full']" /></span>
                      </div>
                    </div>
                  </div>
                  <div class="screen-content">
                    <div class="app-header">
                      <h3>Schedule Pickup</h3>
                      <span class="back-btn">
                        <FontAwesomeIcon :icon="['fas', 'arrow-left']" />
                      </span>
                    </div>
                    <div class="schedule-form">
                      <div class="form-field">
                        <label>Pickup Date</label>
                        <div class="date-picker">Today, 2:00 PM</div>
                      </div>
                      <div class="form-field">
                        <label>Service Type</label>
                        <div class="service-selector">
                          <span class="service-option selected">Premium Care</span>
                          <span class="service-option">Basic Clean</span>
                        </div>
                      </div>
                      <div class="form-field">
                        <label>Items Count</label>
                        <div class="item-counter">
                          <span class="counter-btn">-</span>
                          <span class="counter-value">5</span>
                          <span class="counter-btn">+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="app-stats">
        <div class="stat-item">
          <div class="stat-number">Coming</div>
          <div class="stat-label">Mobile App</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">Soon</div>
          <div class="stat-label">Stay Tuned</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">2025</div>
          <div class="stat-label">Launch Year</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const notifyComingSoon = (platform) => {
  const platformName = platform === 'ios' ? 'App Store' : 'Google Play'
  alert(`Our mobile app will be available on ${platformName} soon! Stay tuned for updates.`)
}
</script>

<style scoped>
.mobile-app {
  padding: 6rem 0;
  background: var(--gradient-hero);
  color: var(--text-white);
  position: relative;
  overflow: hidden;
}

.mobile-app::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="app-grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23app-grain)"/></svg>');
  opacity: 0.3;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.app-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
}

.app-info {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.section-header {
  text-align: left;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--accent-yellow), var(--accent-yellow));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  line-height: 1.6;
}

.app-features {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.feature-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.feature-icon {
  font-size: 2rem;
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--transparent-white);
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.feature-icon svg {
  font-size: 1.5rem;
}

.feature-content h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.feature-content p {
  opacity: 0.8;
  line-height: 1.5;
  margin: 0;
}

.app-actions {
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
}

.download-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.download-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  min-width: 200px;
}

.download-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.download-btn.coming-soon {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  position: relative;
}

.download-btn.coming-soon:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-1px);
}

.download-btn.coming-soon::after {
  content: 'Coming Soon';
  position: absolute;
  top: -8px;
  right: -8px;
  background: var(--accent-yellow);
  color: var(--text-primary);
  font-size: 0.7rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 10px;
  transform: rotate(15deg);
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.store-icon {
  font-size: 1.5rem;
  color: white;
}

.store-icon svg {
  font-size: 1.5rem;
  color: white;
}

.store-info {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.store-label {
  font-size: 0.8rem;
  opacity: 0.8;
  color: var(--text-white);
}

.store-name {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-white);
}

.qr-section {
  text-align: center;
}

.qr-code {
  margin-bottom: 1rem;
}

.qr-placeholder {
  width: 100px;
  height: 100px;
  background: var(--transparent-white);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  border: 2px solid var(--transparent-white);
}

.qr-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.qr-icon svg {
  font-size: 2rem;
}

.qr-text {
  font-size: 0.8rem;
  opacity: 0.8;
}

.qr-note {
  font-size: 0.9rem;
  opacity: 0.7;
  margin: 0;
}

.app-preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

.phone-mockup {
  position: relative;
  width: 300px;
  height: 600px;
  background: var(--bg-dark);
  border-radius: 30px;
  padding: 10px;
  box-shadow: 0 20px 40px var(--overlay-dark);
}

.phone-screen {
  width: 100%;
  height: 100%;
  background: var(--bg-primary);
  border-radius: 25px;
  overflow: hidden;
  position: relative;
}

.app-screens {
  width: 100%;
  height: 100%;
  position: relative;
}

.screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--bg-primary);
  color: var(--text-primary);
  animation: screenSlide 6s infinite;
}

.screen-2 {
  animation-delay: 3s;
}

@keyframes screenSlide {
  0%,
  45% {
    opacity: 1;
    transform: translateX(0);
  }
  50%,
  95% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.screen-header {
  background: var(--primary-blue);
  color: var(--text-white);
  padding: 0.5rem 1rem;
}

.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 600;
}

.status-icons {
  display: flex;
  gap: 0.25rem;
}

.status-icons svg {
  font-size: 0.8rem;
}

.screen-content {
  padding: 1rem;
  height: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.app-header h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
}

.user-avatar {
  font-size: 1.5rem;
}

.user-avatar svg {
  font-size: 1.5rem;
}

.back-btn {
  font-size: 1.2rem;
  cursor: pointer;
}

.back-btn svg {
  font-size: 1.2rem;
}

.quick-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.action-btn {
  background: var(--bg-secondary);
  border: 1px solid var(--border-medium);
  border-radius: 8px;
  padding: 0.75rem;
  text-align: center;
  font-size: 0.8rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.action-btn:hover {
  background: var(--bg-secondary);
}

.action-icon {
  display: block;
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}

.action-icon svg {
  font-size: 1.5rem;
}

.order-status h4 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.status-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-medium);
  border-radius: 8px;
  padding: 0.75rem;
}

.status-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
}

.order-number {
  font-weight: 600;
}

.status-text {
  color: var(--primary-blue);
  font-weight: 600;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background: var(--border-medium);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  width: 60%;
  height: 100%;
  background: var(--primary-blue);
  border-radius: 2px;
  animation: progress 3s infinite;
}

@keyframes progress {
  0% {
    width: 30%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 30%;
  }
}

.schedule-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-field label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.date-picker {
  background: var(--bg-secondary);
  border: 1px solid var(--border-medium);
  border-radius: 8px;
  padding: 0.75rem;
  font-size: 0.9rem;
  text-align: center;
}

.service-selector {
  display: flex;
  gap: 0.5rem;
}

.service-option {
  flex: 1;
  background: var(--bg-secondary);
  border: 1px solid var(--border-medium);
  border-radius: 8px;
  padding: 0.5rem;
  text-align: center;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.service-option.selected {
  background: var(--primary-blue);
  color: var(--text-white);
  border-color: var(--primary-blue);
}

.item-counter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-medium);
  border-radius: 8px;
  padding: 0.75rem;
}

.counter-btn {
  width: 30px;
  height: 30px;
  background: var(--primary-blue);
  color: var(--text-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
}

.counter-value {
  font-size: 1.1rem;
  font-weight: 600;
  min-width: 20px;
  text-align: center;
}

.app-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-item {
  background: var(--transparent-white);
  padding: 2rem;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid var(--transparent-white);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, var(--accent-yellow), var(--accent-yellow));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .mobile-app {
    padding: 4rem 0;
  }

  .container {
    padding: 0 1rem;
  }

  .app-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .section-title {
    font-size: 2rem;
    text-align: center;
  }

  .section-subtitle {
    font-size: 1rem;
    text-align: center;
  }

  .app-features {
    gap: 1rem;
  }

  .feature-item {
    gap: 0.75rem;
  }

  .feature-icon {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }

  .feature-icon svg {
    font-size: 1.2rem;
  }

  .feature-content h3 {
    font-size: 1rem;
  }

  .feature-content p {
    font-size: 0.9rem;
  }

  .app-actions {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .download-buttons {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }

  .download-btn {
    min-width: auto;
    width: 100%;
    padding: 0.875rem 1rem;
  }

  .btn-content {
    justify-content: center;
  }

  .phone-mockup {
    width: 280px;
    height: 560px;
    margin: 0 auto;
  }

  .app-stats {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .stat-item {
    padding: 1.5rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .mobile-app {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .section-subtitle {
    font-size: 0.95rem;
  }

  .app-features {
    gap: 0.75rem;
  }

  .feature-item {
    gap: 0.5rem;
  }

  .feature-icon {
    width: 35px;
    height: 35px;
  }

  .feature-icon svg {
    font-size: 1rem;
  }

  .feature-content h3 {
    font-size: 0.95rem;
  }

  .feature-content p {
    font-size: 0.85rem;
  }

  .download-buttons {
    max-width: 280px;
  }

  .download-btn {
    padding: 0.75rem 0.875rem;
  }

  .store-label {
    font-size: 0.75rem;
  }

  .store-name {
    font-size: 0.9rem;
  }

  .phone-mockup {
    width: 240px;
    height: 480px;
  }

  .app-stats {
    gap: 1rem;
  }

  .stat-item {
    padding: 1.25rem;
  }

  .stat-number {
    font-size: 1.75rem;
  }

  .stat-label {
    font-size: 0.85rem;
  }
}
</style>
