<template>
  <section id="gallery" class="gallery">
    <!-- Background Pattern -->
    <div class="gallery-bg-pattern">
      <div class="pattern-camera camera-1">
        <FontAwesomeIcon :icon="['fas', 'camera']" />
      </div>
      <div class="pattern-camera camera-2">
        <FontAwesomeIcon :icon="['fas', 'camera']" />
      </div>
      <div class="pattern-image image-1">
        <FontAwesomeIcon :icon="['fas', 'image']" />
      </div>
      <div class="pattern-image image-2">
        <FontAwesomeIcon :icon="['fas', 'image']" />
      </div>
    </div>

    <div class="container">
      <div class="section-header">
        <div class="header-badge">
          <FontAwesomeIcon :icon="['fas', 'images']" class="badge-icon" />
          <span>Our Gallery</span>
        </div>
        <h2 class="section-title">See Our Work in Action</h2>
        <p class="section-subtitle">
          Explore our facility, process, and the quality results we deliver every day
        </p>
      </div>

      <!-- Gallery Categories -->
      <div class="gallery-categories">
        <button
          v-for="category in categories"
          :key="category.id"
          :class="['category-btn', { active: activeCategory === category.id }]"
          @click="setActiveCategory(category.id)"
        >
          <FontAwesomeIcon :icon="category.icon" class="category-icon" />
          {{ category.name }}
        </button>
      </div>

      <!-- Gallery Grid -->
      <div class="gallery-grid">
        <div
          v-for="image in filteredImages"
          :key="image.id"
          :class="['gallery-item', image.size]"
          @click="openLightbox(image)"
        >
          <img :src="image.src" :alt="image.alt" />
          <div class="gallery-overlay">
            <div class="overlay-content">
              <FontAwesomeIcon :icon="['fas', 'search-plus']" class="overlay-icon" />
              <h4>{{ image.title }}</h4>
              <p>{{ image.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Before/After Comparison -->
      <div class="before-after-section">
        <h3 class="comparison-title">Before & After Results</h3>
        <div class="before-after-grid">
          <div class="comparison-item">
            <div class="comparison-container">
              <div class="before-image">
                <img src="/ecofresh-image-4.png" alt="Before cleaning" />
                <span class="image-label">Before</span>
              </div>
              <div class="after-image">
                <img src="/ecofresh-image-5.png" alt="After cleaning" />
                <span class="image-label">After</span>
              </div>
            </div>
            <h4>Stain Removal Excellence</h4>
          </div>
          <div class="comparison-item">
            <div class="comparison-container">
              <div class="before-image">
                <img src="/ecofresh-image-3.png" alt="Before pressing" />
                <span class="image-label">Before</span>
              </div>
              <div class="after-image">
                <img src="/ecofresh-image-1.png" alt="After pressing" />
                <span class="image-label">After</span>
              </div>
            </div>
            <h4>Professional Pressing</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('all')

const categories = ref([
  { id: 'all', name: 'All', icon: ['fas', 'th'] },
  { id: 'facility', name: 'Facility', icon: ['fas', 'building'] },
  { id: 'process', name: 'Process', icon: ['fas', 'cogs'] },
  { id: 'team', name: 'Team', icon: ['fas', 'users'] },
  { id: 'results', name: 'Results', icon: ['fas', 'star'] },
])

const galleryImages = ref([
  {
    id: 1,
    src: '/ecofresh-image-1.png',
    alt: 'Modern dry cleaning facility',
    title: 'Modern Facility',
    description: 'State-of-the-art equipment and clean workspace',
    category: 'facility',
    size: 'large',
  },
  {
    id: 2,
    src: '/ecofresh-image-3.png',
    alt: 'Eco-friendly cleaning machines',
    title: 'Eco Equipment',
    description: 'Environmentally friendly cleaning technology',
    category: 'facility',
    size: 'medium',
  },
  {
    id: 3,
    src: '/ecofresh-image-4.png',
    alt: 'Professional team at work',
    title: 'Expert Team',
    description: 'Skilled professionals with years of experience',
    category: 'team',
    size: 'medium',
  },
  {
    id: 4,
    src: '/ecofresh-image-5.png',
    alt: 'Garment inspection process',
    title: 'Quality Inspection',
    description: 'Thorough inspection of every garment',
    category: 'process',
    size: 'small',
  },
  {
    id: 5,
    src: '/ecofresh-image-1.png',
    alt: 'Eco-friendly cleaning process',
    title: 'Green Cleaning',
    description: 'Biodegradable and safe cleaning solutions',
    category: 'process',
    size: 'small',
  },
  {
    id: 6,
    src: '/ecofresh-image-3.png',
    alt: 'Perfectly cleaned garments',
    title: 'Perfect Results',
    description: 'Pristine garments ready for pickup',
    category: 'results',
    size: 'small',
  },
])

const filteredImages = computed(() => {
  if (activeCategory.value === 'all') {
    return galleryImages.value
  }
  return galleryImages.value.filter((image) => image.category === activeCategory.value)
})

const setActiveCategory = (categoryId) => {
  activeCategory.value = categoryId
}

const openLightbox = (image) => {
  // Lightbox functionality can be implemented here
  console.log('Opening lightbox for:', image.title)
}
</script>

<style scoped>
.gallery {
  padding: 6rem 0;
  background: var(--bg-eco-lighter);
  position: relative;
  overflow: hidden;
}

/* Background Pattern */
.gallery-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.pattern-camera {
  position: absolute;
  font-size: 1.5rem;
  animation: float-camera 8s ease-in-out infinite;
  opacity: 0.1;
  color: var(--eco-green);
}

.camera-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.camera-2 {
  bottom: 25%;
  right: 15%;
  animation-delay: 4s;
}

.pattern-image {
  position: absolute;
  font-size: 1.2rem;
  animation: pulse-image 6s ease-in-out infinite;
  opacity: 0.1;
  color: var(--eco-green);
}

.image-1 {
  top: 60%;
  right: 20%;
  animation-delay: 2s;
}

.image-2 {
  bottom: 40%;
  left: 15%;
  animation-delay: 5s;
}

@keyframes float-camera {
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

@keyframes pulse-image {
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

/* Gallery Categories */
.gallery-categories {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.category-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--bg-primary);
  border: 2px solid var(--border-eco);
  border-radius: 50px;
  color: var(--text-secondary);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-btn:hover {
  background: var(--bg-eco-light);
  border-color: var(--eco-green-light);
  color: var(--eco-green);
  transform: translateY(-2px);
}

.category-btn.active {
  background: var(--gradient-eco);
  color: white;
  border-color: var(--eco-green);
  box-shadow: 0 4px 15px var(--shadow-eco);
}

.category-icon {
  font-size: 1rem;
}

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.gallery-item {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px var(--shadow-light);
  cursor: pointer;
  transition: all 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px var(--shadow-medium);
}

.gallery-item.large {
  grid-column: span 2;
}

.gallery-item.medium {
  height: 250px;
}

.gallery-item.small {
  height: 200px;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.overlay-content {
  text-align: center;
  color: white;
  padding: 1rem;
}

.overlay-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--eco-green);
}

.overlay-content h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.overlay-content p {
  font-size: 0.9rem;
  opacity: 0.9;
  line-height: 1.4;
}

/* Before/After Section */
.before-after-section {
  background: var(--bg-primary);
  padding: 3rem 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px var(--shadow-light);
  border: 1px solid var(--border-eco);
  text-align: center;
}

.comparison-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.before-after-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.comparison-item {
  background: var(--bg-eco-light);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid var(--border-eco);
  transition: all 0.3s ease;
}

.comparison-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px var(--shadow-medium);
  border-color: var(--eco-green-light);
}

.comparison-container {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.before-image,
.after-image {
  flex: 1;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px var(--shadow-light);
}

.before-image img,
.after-image img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.before-image:hover img,
.after-image:hover img {
  transform: scale(1.05);
}

.image-label {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  background: var(--gradient-eco);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 2px 8px var(--shadow-eco);
}

.comparison-item h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

@media (max-width: 768px) {
  .gallery {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .gallery-categories {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .category-btn {
    width: 200px;
    justify-content: center;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .gallery-item.large {
    grid-column: span 1;
  }

  .before-after-grid {
    grid-template-columns: 1fr;
  }

  .comparison-container {
    flex-direction: column;
  }

  .pattern-camera,
  .pattern-image {
    display: none;
  }
}

@media (max-width: 480px) {
  .before-after-section {
    padding: 2rem 1rem;
  }

  .comparison-item {
    padding: 1rem;
  }

  .before-image img,
  .after-image img {
    height: 120px;
  }
}
</style>
