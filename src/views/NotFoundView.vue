<template>
  <div id="not-found">
    <Navigation />

    <main class="not-found-main">
      <div class="not-found-container">
        <div class="not-found-content">
          <!-- 404 Icon/Illustration -->
          <div class="not-found-icon">
            <div class="icon-circle">
              <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>

          <!-- Error Message -->
          <div class="not-found-text">
            <h1 class="error-code">404</h1>
            <h2 class="error-title">Page Not Found</h2>
            <p class="error-description">
              Sorry, we couldn't find the page you're looking for. 
              It might have been moved, deleted, or you may have entered the wrong URL.
            </p>
          </div>

          <!-- Action Buttons -->
          <div class="not-found-actions">
            <router-link to="/" class="btn btn-primary">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 22V12H15V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Go Home
            </router-link>
            
            <button @click="goBack" class="btn btn-secondary">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Go Back
            </button>
          </div>

          <!-- Helpful Links -->
          <div class="helpful-links">
            <h3>Popular Pages</h3>
            <div class="links-grid">
              <router-link to="/" class="link-item">
                <FontAwesomeIcon :icon="['fas', 'home']" class="link-icon" />
                <span class="link-text">Home</span>
              </router-link>
              <router-link to="/service/dry-cleaning" class="link-item">
                <FontAwesomeIcon :icon="['fas', 'user-tie']" class="link-icon" />
                <span class="link-text">Dry Cleaning</span>
              </router-link>
              <router-link to="/service/wash-fold-laundry" class="link-item">
                <FontAwesomeIcon :icon="['fas', 'tshirt']" class="link-icon" />
                <span class="link-text">Wash & Fold</span>
              </router-link>
              <router-link to="/service/alterations" class="link-item">
                <FontAwesomeIcon :icon="['fas', 'cut']" class="link-icon" />
                <span class="link-text">Alterations</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'
import Navigation from '../components/Navigation.vue'
import Footer from '../components/Footer.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const router = useRouter()

// SEO Meta Tags
useHead({
  title: '404 - Page Not Found | EcoFresh Dry Cleaner',
  meta: [
    {
      name: 'description',
      content: 'The page you are looking for could not be found. Return to EcoFresh Dry Cleaner homepage or browse our services.'
    },
    {
      name: 'robots',
      content: 'noindex, nofollow'
    }
  ]
})

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.push('/')
  }
}
</script>

<style scoped>
.not-found-main {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--bg-eco-light) 0%, var(--bg-secondary) 100%);
  padding: 6rem 1rem 2rem 1rem;
}

.not-found-container {
  max-width: 600px;
  width: 100%;
  text-align: center;
}

.not-found-content {
  background: var(--bg-primary);
  border-radius: 20px;
  padding: 3rem 2rem;
  box-shadow: 0 20px 40px var(--shadow-light);
  border: 1px solid var(--border-light);
}

/* Icon Styles */
.not-found-icon {
  margin-bottom: 2rem;
}

.icon-circle {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  background: var(--gradient-eco);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px var(--shadow-eco);
}

.icon {
  width: 60px;
  height: 60px;
  color: var(--text-white);
}

/* Text Styles */
.not-found-text {
  margin-bottom: 2.5rem;
}

.error-code {
  font-size: 6rem;
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 1rem 0;
  line-height: 1;
}

.error-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 1rem 0;
}

.error-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
  max-width: 400px;
  margin: 0 auto;
}

/* Action Buttons */
.not-found-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.btn-primary {
  background: var(--gradient-primary);
  color: var(--text-white);
  box-shadow: 0 4px 15px var(--shadow-primary);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px var(--shadow-primary-hover);
}

.btn-secondary {
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 2px solid var(--border-medium);
}

.btn-secondary:hover {
  background: var(--bg-eco-light);
  border-color: var(--eco-green);
  transform: translateY(-2px);
}

.btn-icon {
  width: 20px;
  height: 20px;
}

/* Helpful Links */
.helpful-links {
  border-top: 1px solid var(--border-light);
  padding-top: 2rem;
}

.helpful-links h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 1.5rem 0;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.link-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 12px;
  text-decoration: none;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  border: 1px solid var(--border-light);
}

.link-item:hover {
  background: var(--bg-eco-light);
  color: var(--eco-green);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px var(--shadow-light);
}

.link-icon {
  font-size: 1.5rem;
  color: inherit;
}

.link-text {
  font-size: 0.875rem;
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 768px) {
  .not-found-main {
    padding: 1rem;
  }
  
  .not-found-content {
    padding: 2rem 1.5rem;
  }
  
  .error-code {
    font-size: 4rem;
  }
  
  .error-title {
    font-size: 1.5rem;
  }
  
  .error-description {
    font-size: 1rem;
  }
  
  .not-found-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 200px;
    justify-content: center;
  }
  
  .links-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .icon-circle {
    width: 100px;
    height: 100px;
  }
  
  .icon {
    width: 50px;
    height: 50px;
  }
  
  .error-code {
    font-size: 3rem;
  }
  
  .links-grid {
    grid-template-columns: 1fr;
  }
}
</style>
