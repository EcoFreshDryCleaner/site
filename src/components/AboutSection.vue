<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">About Our Eco-Friendly Service</h2>
        <p class="section-subtitle">
          We're committed to providing professional dry cleaning while protecting our environment
        </p>
      </div>

      <!-- Visual Gallery Section -->
      <div class="visual-gallery">
        <h3 class="gallery-title">Our Commitment to Excellence</h3>
        <div class="gallery-grid">
          <div class="gallery-item large">
            <img
              :src="optimizeImageUrl('https://cdn.ecofreshdrycleaner.com/dry-cleaning-1.jpg')"
              alt="Professional dry cleaning facility"
            />
            <div class="gallery-overlay">
              <h4>Efficient Cleaning Process</h4>
              <p>For faster, more efficient results</p>
            </div>
          </div>
          <div class="gallery-item large">
            <img
              :src="optimizeImageUrl('https://cdn.ecofreshdrycleaner.com/leather-1.jpg')"
              alt="Eco-friendly cleaning process"
            />
            <div class="gallery-overlay">
              <h4>Eco-Friendly Process</h4>
              <p>Biodegradable solutions for a cleaner planet</p>
            </div>
          </div>
          <div class="gallery-item large">
            <img
              :src="optimizeImageUrl('https://cdn.ecofreshdrycleaner.com/outerwear-2.jpg')"
              alt="Quality garment care"
            />
            <div class="gallery-overlay">
              <h4>Quality Garment Care</h4>
              <p>Expert attention to every detail</p>
            </div>
          </div>
        </div>
      </div>

      <div class="about-content">
        <div class="about-text">
          <div class="about-item">
            <div class="item-icon">
              <FontAwesomeIcon :icon="['fas', 'leaf']" />
            </div>
            <div class="item-content">
              <h3>Your Charlotte Neighborhood Dry Cleaner</h3>
              <p>
                For over 25 years, EcoFresh Drycleaners has been more than just a business—we're
                your neighbors, your friends, and your trusted partners in keeping your wardrobe
                fresh. As a family-owned local business with three convenient Charlotte area locations, we've built
                lasting relationships with our Charlotte community, treating every customer like family.
              </p>
            </div>
          </div>

          <div class="about-item">
            <div class="item-icon">
              <FontAwesomeIcon :icon="['fas', 'heart']" />
            </div>
            <div class="item-content">
              <h3>Personal Care & Attention</h3>
              <p>
                We understand that behind every garment is a story—your first job interview suit,
                your wedding dress, your child's school uniform. That's why we treat each piece with
                the same care and attention we'd give our own family's clothes. Our experienced team
                has been perfecting their craft for decades, ensuring your most precious garments
                receive the gentle, expert care they deserve.
              </p>
            </div>
          </div>

          <div class="about-item">
            <div class="item-icon">
              <FontAwesomeIcon :icon="['fas', 'truck']" />
            </div>
            <div class="item-content">
              <h3>Charlotte Community-Focused Convenience</h3>
              <p>
                Our free pickup and delivery service throughout Charlotte isn't just about convenience—it's about being
                there for our Charlotte community. Whether you're a busy parent, a working professional, or a
                senior who values the personal touch, we bring our trusted service right to your
                Charlotte doorstep, just like we've been doing for over two decades.
              </p>
            </div>
          </div>
        </div>

        <div class="about-visual">
          <div class="about-image-container">
            <img
              :src="optimizeImageUrl('https://cdn.ecofreshdrycleaner.com/delivery-1.jpg')"
              alt="Eco-friendly dry cleaning process"
              class="about-main-image"
            />
            <div class="image-badge">
              <span class="badge-text">Charlotte Locally Owned</span>
            </div>
          </div>

          <div class="about-stats">
            <div class="stat-card">
              <div class="stat-number">25+</div>
              <div class="stat-label">Years Serving You</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">3</div>
              <div class="stat-label">Family Locations</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Eco Features -->
      <div class="eco-features">
        <div class="eco-feature">
          <div class="eco-icon">
            <FontAwesomeIcon :icon="['fas', 'globe']" />
          </div>
          <h4>Carbon Neutral</h4>
          <p>We offset our carbon footprint through sustainable practices</p>
        </div>
        <div class="eco-feature">
          <div class="eco-icon">
            <FontAwesomeIcon :icon="['fas', 'tint']" />
          </div>
          <h4>Water Conservation</h4>
          <p>Advanced water recycling systems reduce consumption by 60%</p>
        </div>
        <div class="eco-feature">
          <div class="eco-icon">
            <FontAwesomeIcon :icon="['fas', 'leaf']" />
          </div>
          <h4>Biodegradable</h4>
          <p>All cleaning solutions are 100% biodegradable and safe</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const optimizeImageUrl = (url) => {
  if (!url) return url
  
  if (url.includes('cdn.ecofreshdrycleaner.com')) {
    const urlObj = new URL(url)
    const imagePath = urlObj.pathname
    return `https://cdn.ecofreshdrycleaner.com/cdn-cgi/image/format=auto,width=600,height=400,quality=85,fit=cover${imagePath}`
  }
  
  return url
}
</script>

<style scoped>
.about {
  padding: 5rem 0;
  background: var(--bg-eco-light);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
  margin-bottom: 3rem;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-item {
  display: flex;
  gap: 1.25rem;
  padding: 1.5rem;
  background: var(--bg-primary);
  border-radius: 10px;
  border: 1px solid var(--border-medium);
  transition: box-shadow 0.2s ease;
}

.about-item:hover {
  box-shadow: 0 2px 8px var(--shadow-light);
}

.item-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-eco-light);
  border-radius: 10px;
  color: var(--eco-green);
}

.item-icon svg {
  font-size: 1.4rem;
}

.item-content h3 {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.item-content p {
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

/* About Visual Section */
.about-visual {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-image-container {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}

.about-main-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.image-badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: var(--eco-green);
  color: white;
  padding: 0.4rem 0.75rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
}

.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.stat-card {
  background: var(--bg-primary);
  padding: 1.25rem;
  border-radius: 10px;
  text-align: center;
  border: 1px solid var(--border-medium);
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--eco-green);
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
}

/* Eco Features Section */
.eco-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.eco-feature {
  background: var(--bg-primary);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  border: 1px solid var(--border-medium);
}

.eco-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
  color: var(--eco-green);
}

.eco-feature h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.eco-feature p {
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

/* Visual Gallery Section */
.visual-gallery {
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: var(--bg-primary);
  border-radius: 10px;
  border: 1px solid var(--border-medium);
}

.gallery-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  text-align: center;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.gallery-item {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
}

.gallery-item.large {
  min-height: 300px;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.03);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
  padding: 1.5rem 1rem 1rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}

.gallery-overlay h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: white;
}

.gallery-overlay p {
  font-size: 0.9rem;
  opacity: 0.9;
  line-height: 1.4;
  margin: 0;
}

@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .about-stats {
    grid-template-columns: 1fr 1fr;
  }

  .about-item {
    flex-direction: column;
    text-align: center;
  }

  .item-icon {
    align-self: center;
  }

  .eco-features {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .gallery-item.large {
    min-height: 250px;
  }
}

@media (max-width: 480px) {
  .about-stats {
    grid-template-columns: 1fr;
  }

  .about-item {
    padding: 1.25rem;
  }
}
</style>
