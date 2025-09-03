<template>
  <section id="mobile-app" class="mobile-app">
    <!-- Background Pattern -->
    <div class="mobile-app-bg-pattern">
      <div class="pattern-phone phone-1">
        <FontAwesomeIcon :icon="['fas', 'mobile-alt']" />
      </div>
      <div class="pattern-phone phone-2">
        <FontAwesomeIcon :icon="['fas', 'mobile-alt']" />
      </div>
      <div class="pattern-phone phone-3">
        <FontAwesomeIcon :icon="['fas', 'mobile-alt']" />
      </div>
      <div class="pattern-app app-1">
        <FontAwesomeIcon :icon="['fas', 'mobile']" />
      </div>
      <div class="pattern-app app-2">
        <FontAwesomeIcon :icon="['fas', 'mobile']" />
      </div>
    </div>

    <div class="container">
      <div class="app-content">
        <div class="app-info">
          <div class="section-header">
            <div class="header-badge">
              <FontAwesomeIcon :icon="['fas', 'rocket']" class="badge-icon" />
              <span>Coming Soon</span>
            </div>
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
              <button class="download-btn app-store coming-soon" @click="notifyComingSoon('ios')">
                <div class="btn-content">
                  <FontAwesomeIcon :icon="['fab', 'apple']" class="store-icon" />
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
                  <FontAwesomeIcon :icon="['fab', 'google-play']" class="store-icon" />
                  <div class="store-info">
                    <span class="store-label">Coming Soon on</span>
                    <span class="store-name">Google Play</span>
                  </div>
                </div>
              </button>
            </div>

            <!-- <div class="notification-signup">
              <FontAwesomeIcon :icon="['fas', 'bell']" class="signup-icon" />
              <p>Get notified when the app launches!</p>
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

            <!-- Floating Elements -->
            <div class="floating-element element-1">
              <FontAwesomeIcon :icon="['fas', 'star']" />
            </div>
            <div class="floating-element element-2">
              <FontAwesomeIcon :icon="['fas', 'rocket']" />
            </div>
            <div class="floating-element element-3">
              <FontAwesomeIcon :icon="['fas', 'magic']" />
            </div>
          </div>
        </div>
      </div>

      <div class="app-stats">
        <div class="stat-item">
          <div class="stat-icon">
            <FontAwesomeIcon :icon="['fas', 'mobile-alt']" />
          </div>
          <div class="stat-number">Coming</div>
          <div class="stat-label">Mobile App</div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">
            <FontAwesomeIcon :icon="['fas', 'clock']" />
          </div>
          <div class="stat-number">Soon</div>
          <div class="stat-label">Stay Tuned</div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">
            <FontAwesomeIcon :icon="['fas', 'bullseye']" />
          </div>
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

/* Background Pattern */
.mobile-app-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.pattern-phone {
  position: absolute;
  font-size: 1.5rem;
  animation: float-phone 8s ease-in-out infinite;
  opacity: 0.1;
  color: var(--eco-green);
}

.phone-1 {
  top: 15%;
  left: 10%;
  animation-delay: 0s;
}

.phone-2 {
  top: 25%;
  right: 15%;
  animation-delay: 2s;
}

.phone-3 {
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

.pattern-app {
  position: absolute;
  font-size: 1.2rem;
  animation: float-app 6s ease-in-out infinite;
  opacity: 0.1;
  color: var(--eco-green);
}

.app-1 {
  top: 60%;
  right: 10%;
  animation-delay: 1s;
}

.app-2 {
  bottom: 30%;
  right: 25%;
  animation-delay: 3s;
}

@keyframes float-phone {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.1;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 0.2;
  }
}

@keyframes float-app {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.2;
  }
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

.header-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: white;
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.badge-icon {
  font-size: 1.2rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--eco-mint), var(--eco-sage));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.2rem;
  opacity: 0.95;
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
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(5px);
}

.feature-icon {
  font-size: 2rem;
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-eco);
  border-radius: 16px;
  color: white;
  box-shadow: 0 4px 15px var(--shadow-eco);
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
  opacity: 0.9;
  line-height: 1.5;
  margin: 0;
}

.app-actions {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
}

.download-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.download-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  min-width: 220px;
}

.download-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
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
  background: var(--eco-mint);
  color: var(--primary-blue-dark);
  font-size: 0.7rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 10px;
  transform: rotate(15deg);
  box-shadow: 0 4px 15px var(--shadow-eco);
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

.notification-signup {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.signup-icon {
  font-size: 1.5rem;
  color: var(--eco-green);
}

.notification-signup p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.9;
}

.app-preview {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.phone-mockup {
  position: relative;
  width: 300px;
  height: 600px;
  background: var(--bg-dark);
  border-radius: 30px;
  padding: 10px;
  box-shadow: 0 25px 50px var(--overlay-dark);
  border: 2px solid var(--border-eco);
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

/* App Screenshot Styles */
.app-screenshot {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.app-screenshot img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  filter: blur(2px);
}

.screenshot-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  margin-bottom: 1rem;
}

.app-header h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  color: var(--eco-green);
}

.user-avatar {
  font-size: 1.5rem;
  color: var(--eco-green);
}

.back-btn {
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--eco-green);
}

.quick-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.action-btn {
  background: var(--bg-eco-light);
  border: 1px solid var(--border-eco);
  border-radius: 12px;
  padding: 0.75rem;
  text-align: center;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
}

.action-btn:hover {
  background: var(--eco-green);
  color: white;
  transform: translateY(-2px);
}

.action-icon {
  font-size: 1.5rem;
  color: var(--eco-green);
}

.order-status h4 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.status-card {
  background: var(--bg-eco-light);
  border: 1px solid var(--border-eco);
  border-radius: 12px;
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
  background: var(--bg-eco-light);
  border: 1px solid var(--border-eco);
  border-radius: 12px;
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
  background: var(--bg-eco-light);
  border: 1px solid var(--border-eco);
  border-radius: 12px;
  padding: 0.5rem;
  text-align: center;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
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
  border-radius: 12px;
  padding: 0.75rem;
}

.counter-btn {
  width: 30px;
  height: 30px;
  background: var(--eco-green);
  color: white;
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

/* Floating Elements */
.floating-element {
  position: absolute;
  font-size: 1.5rem;
  animation: float-element 4s ease-in-out infinite;
  opacity: 0.6;
  color: var(--eco-green);
}

.element-1 {
  top: 10%;
  right: -20px;
  animation-delay: 0s;
}

.element-2 {
  bottom: 20%;
  left: -20px;
  animation-delay: 2s;
}

.element-3 {
  top: 50%;
  right: -30px;
  animation-delay: 1s;
}

@keyframes float-element {
  0%,
  100% {
    transform: translateY(0px);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-15px);
    opacity: 1;
  }
}

.app-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stat-item::before {
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

.stat-item:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.15);
  border-color: var(--eco-green-light);
}

.stat-item:hover .stat-icon {
  background: rgba(255, 255, 255, 0.25);
  border-color: var(--eco-green);
  transform: scale(1.1);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
}

.stat-item:hover::before {
  opacity: 1;
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
  color: var(--eco-green);
  background: rgba(255, 255, 255, 0.15);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem auto;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, var(--eco-mint), var(--eco-sage));
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
    width: 50px;
    height: 50px;
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
    grid-template-columns: repeat(2, 1fr);
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

  .floating-element {
    display: none;
  }

  .pattern-phone,
  .pattern-app {
    display: none;
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
    padding: 0.75rem;
  }

  .feature-icon {
    width: 45px;
    height: 45px;
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
    grid-template-columns: 1fr;
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
