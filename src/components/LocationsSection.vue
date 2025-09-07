<template>
  <section class="locations-section">
    <h2 class="section-title">Our Locations</h2>
    <div class="locations-grid">
      <div 
        v-for="location in locations" 
        :key="location.name" 
        class="location-card"
      >
        <h3 class="location-name">{{ location.name }}</h3>
        <div class="location-details">
          <div class="location-detail">
            <span class="detail-icon">📍</span>
            <span class="detail-text" v-html="location.address"></span>
          </div>
          <div class="location-detail">
            <span class="detail-icon">📞</span>
            <span class="detail-text">
              <a :href="`tel:${location.phone}`">{{ location.phone }}</a>
            </span>
          </div>
          <div class="location-detail">
            <span class="detail-icon">🕒</span>
            <span class="detail-text" v-html="location.hours"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const locations = [
  {
    name: 'Mathews Location',
    address: '1115 A Mathews Mint Hill Rd<br>Mathews, NC 28105',
    phone: '(794) 847-5992',
    hours: 'Mon-Fri: 7:00 AM - 6:00 PM<br>Sat: 9:00 AM - 3:00 PM'
  },
  {
    name: 'Mallard Creek Location',
    address: '2712 W Mallard Creek Church Rd<br>Charlotte, NC 28262',
    phone: '(704) 717-8180',
    hours: 'Mon-Fri: 8:00 AM - 6:00 PM<br>Sat: 9:00 AM - 3:00 PM'
  },
  {
    name: 'Piedmont Row Location',
    address: '4625 Piedmont Row Dr #145A<br>Charlotte, NC 28210',
    phone: '(704) 554-1788',
    hours: 'Mon-Fri: 8:00 AM - 6:00 PM<br>Sat: 9:00 AM - 3:00 PM'
  }
]
</script>

<style scoped>
.locations-section {
  background: var(--bg-primary);
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 8px 25px var(--shadow-light);
  border: 1px solid var(--border-eco);
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.locations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.location-card {
  background: var(--bg-eco-light);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--border-eco);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.location-card::before {
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

.location-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px var(--shadow-medium);
  border-color: var(--eco-green-light);
}

.location-card:hover::before {
  transform: scaleX(1);
}

.location-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.location-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.location-detail {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;
  background: var(--bg-primary);
  border-radius: 8px;
  border: 1px solid var(--border-eco);
}

.detail-icon {
  font-size: 1rem;
  color: var(--eco-green);
  margin-top: 0.125rem;
  flex-shrink: 0;
  width: 16px;
}

.detail-text {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.4;
}

.detail-text a {
  color: var(--eco-green);
  text-decoration: none;
  font-weight: 500;
}

.detail-text a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .locations-section {
    padding: 2rem;
  }

  .locations-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .locations-section {
    padding: 1.5rem;
  }

  .location-card {
    padding: 1.5rem;
  }
}
</style>
