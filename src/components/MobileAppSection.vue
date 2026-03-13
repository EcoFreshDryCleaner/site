<template>
  <section id="mobile-app" class="mobile-app">
    <div class="container">
      <div class="app-content">
        <div class="app-info">
          <div class="section-header">
            <span class="header-badge">Coming Soon</span>
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
                <FontAwesomeIcon :icon="['fas', 'calendar-alt']" />
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
                <FontAwesomeIcon :icon="['fas', 'clipboard-list']" />
              </div>
              <div class="feature-content">
                <h3>Order History</h3>
                <p>Access your complete order history and reorder your favorite services.</p>
              </div>
            </div>
          </div>

          <div class="app-actions">
            <div class="download-buttons">
              <button class="download-btn" @click="notifyComingSoon('ios')">
                <div class="btn-content">
                  <FontAwesomeIcon :icon="['fab', 'apple']" class="store-icon" />
                  <div class="store-info">
                    <span class="store-label">Coming Soon on</span>
                    <span class="store-name">App Store</span>
                  </div>
                </div>
              </button>

              <button class="download-btn" @click="notifyComingSoon('android')">
                <div class="btn-content">
                  <FontAwesomeIcon :icon="['fab', 'google-play']" class="store-icon" />
                  <div class="store-info">
                    <span class="store-label">Coming Soon on</span>
                    <span class="store-name">Google Play</span>
                  </div>
                </div>
              </button>
            </div>
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
                        <FontAwesomeIcon :icon="['fas', 'signal']" />
                        <FontAwesomeIcon :icon="['fas', 'battery-full']" />
                      </div>
                    </div>
                  </div>
                  <div class="screen-content">
                    <div class="app-header">
                      <h3>EcoFresh</h3>
                      <FontAwesomeIcon :icon="['fas', 'user']" class="user-avatar" />
                    </div>
                    <div class="quick-actions">
                      <div class="action-btn">
                        <FontAwesomeIcon :icon="['fas', 'box']" class="action-icon" />
                        <span>Schedule Pickup</span>
                      </div>
                      <div class="action-btn">
                        <FontAwesomeIcon :icon="['fas', 'clipboard-list']" class="action-icon" />
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
                        <FontAwesomeIcon :icon="['fas', 'signal']" />
                        <FontAwesomeIcon :icon="['fas', 'battery-full']" />
                      </div>
                    </div>
                  </div>
                  <div class="screen-content">
                    <div class="app-header">
                      <h3>Schedule Pickup</h3>
                      <FontAwesomeIcon :icon="['fas', 'arrow-left']" class="back-btn" />
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
  padding: 5rem 0;
  background: var(--primary-blue);
  color: var(--text-white);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.app-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.app-info {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.section-header {
  text-align: left;
}

.header-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border-radius: 4px;
  padding: 0.4rem 0.75rem;
  margin-bottom: 1.25rem;
  font-size: 0.85rem;
  font-weight: 600;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-white);
}

.section-subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
  line-height: 1.6;
}

.app-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.feature-icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  color: var(--eco-mint);
}

.feature-icon svg {
  font-size: 1.2rem;
}

.feature-content h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.feature-content p {
  opacity: 0.85;
  line-height: 1.5;
  margin: 0;
  font-size: 0.9rem;
}

.app-actions {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
}

.download-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.download-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 8px;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  min-width: 200px;
  color: white;
}

.download-btn:hover {
  background: rgba(255, 255, 255, 0.18);
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.store-icon {
  font-size: 1.4rem;
}

.store-info {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.store-label {
  font-size: 0.75rem;
  opacity: 0.7;
}

.store-name {
  font-size: 0.95rem;
  font-weight: 600;
}

.app-preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

.phone-mockup {
  width: 280px;
  height: 560px;
  background: var(--bg-dark);
  border-radius: 28px;
  padding: 10px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
}

.phone-screen {
  width: 100%;
  height: 100%;
  background: var(--bg-primary);
  border-radius: 22px;
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
  0%, 45% {
    opacity: 1;
    transform: translateX(0);
  }
  50%, 95% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.screen-header {
  background: var(--eco-green);
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
  margin-bottom: 0.75rem;
}

.app-header h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
  color: var(--eco-green);
}

.user-avatar {
  font-size: 1.3rem;
  color: var(--eco-green);
}

.back-btn {
  font-size: 1.1rem;
  color: var(--eco-green);
}

.quick-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.action-btn {
  background: var(--bg-eco-light);
  border: 1px solid var(--border-eco);
  border-radius: 8px;
  padding: 0.6rem;
  text-align: center;
  font-size: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.action-icon {
  font-size: 1.3rem;
  color: var(--eco-green);
}

.order-status h4 {
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.status-card {
  background: var(--bg-eco-light);
  border: 1px solid var(--border-eco);
  border-radius: 8px;
  padding: 0.6rem;
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
  color: var(--eco-green);
  font-weight: 600;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background: var(--border-eco);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  width: 60%;
  height: 100%;
  background: var(--eco-green);
  border-radius: 2px;
}

.schedule-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.form-field label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.date-picker {
  background: var(--bg-eco-light);
  border: 1px solid var(--border-eco);
  border-radius: 8px;
  padding: 0.6rem;
  font-size: 0.85rem;
  text-align: center;
}

.service-selector {
  display: flex;
  gap: 0.4rem;
}

.service-option {
  flex: 1;
  background: var(--bg-eco-light);
  border: 1px solid var(--border-eco);
  border-radius: 8px;
  padding: 0.4rem;
  text-align: center;
  font-size: 0.75rem;
}

.service-option.selected {
  background: var(--eco-green);
  color: white;
  border-color: var(--eco-green);
}

.item-counter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: var(--bg-eco-light);
  border: 1px solid var(--border-eco);
  border-radius: 8px;
  padding: 0.6rem;
}

.counter-btn {
  width: 28px;
  height: 28px;
  background: var(--eco-green);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
}

.counter-value {
  font-size: 1rem;
  font-weight: 600;
  min-width: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .app-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .section-title {
    font-size: 1.75rem;
    text-align: center;
  }

  .section-subtitle {
    text-align: center;
  }

  .app-actions {
    align-items: center;
  }

  .download-buttons {
    width: 100%;
    max-width: 280px;
  }

  .download-btn {
    min-width: auto;
    width: 100%;
  }

  .btn-content {
    justify-content: center;
  }

  .phone-mockup {
    width: 260px;
    height: 520px;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.5rem;
  }

  .phone-mockup {
    width: 240px;
    height: 480px;
  }
}
</style>
