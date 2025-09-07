<template>
  <section id="about" class="about">
    <!-- Background Pattern -->
    <div class="about-bg-pattern">
      <div class="pattern-dot dot-1"></div>
      <div class="pattern-dot dot-2"></div>
      <div class="pattern-dot dot-3"></div>
      <div class="pattern-dot dot-4"></div>
      <div class="pattern-dot dot-5"></div>
    </div>

    <div class="container">
      <div class="section-header">
        <div class="header-badge">
          <FontAwesomeIcon :icon="['fas', 'leaf']" class="badge-icon" />
          <span>Our Story</span>
        </div>
        <h2 class="section-title">About Our Eco-Friendly Service</h2>
        <p class="section-subtitle">
          We're committed to providing professional dry cleaning while protecting our environment
        </p>
      </div>

      <!-- Visual Gallery Section - Moved to top -->
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
              <h3>Your Neighborhood Dry Cleaner</h3>
              <p>
                For over 25 years, EcoFresh Drycleaners has been more than just a business—we're
                your neighbors, your friends, and your trusted partners in keeping your wardrobe
                fresh. As a family-owned local business with three convenient locations, we've built
                lasting relationships with our community, treating every customer like family.
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
              <h3>Community-Focused Convenience</h3>
              <p>
                Our free pickup and delivery service isn't just about convenience—it's about being
                there for our community. Whether you're a busy parent, a working professional, or a
                senior who values the personal touch, we bring our trusted service right to your
                doorstep, just like we've been doing for over two decades.
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
              <span class="badge-text">Locally Owned</span>
            </div>
          </div>

          <div class="about-stats">
            <div class="stat-card">
              <div class="stat-icon">
                <FontAwesomeIcon :icon="['fas', 'leaf']" />
              </div>
              <div class="stat-number">25+</div>
              <div class="stat-label">Years Serving You</div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <FontAwesomeIcon :icon="['fas', 'map-marker-alt']" />
              </div>
              <div class="stat-number">3</div>
              <div class="stat-label">Family Locations</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Eco Features -->
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
// Function to optimize images using Cloudflare transformations
const optimizeImageUrl = (url) => {
  if (!url) return url
  
  // Check if it's a Cloudflare CDN URL
  if (url.includes('cdn.ecofreshdrycleaner.com')) {
    // Extract the image path from the full URL
    const urlObj = new URL(url)
    const imagePath = urlObj.pathname
    
    // Apply Cloudflare image transformations using the correct format
    // Format: https://<ZONE>/cdn-cgi/image/<OPTIONS>/<SOURCE-IMAGE>
    // - format=auto: Auto format selection (WebP/AVIF when supported)
    // - width=600: Width optimized for gallery display
    // - height=400: Height optimized for gallery display
    // - quality=85: High quality with good compression
    // - fit=cover: Maintain aspect ratio and cover the container
    return `https://cdn.ecofreshdrycleaner.com/cdn-cgi/image/format=auto,width=600,height=400,quality=85,fit=cover${imagePath}`
  }
  
  return url
}
</script>

<style scoped>
.about {
  padding: 6rem 0;
  background: var(--bg-eco-light);
  position: relative;
  overflow: hidden;
}

/* Background Pattern */
.about-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.pattern-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  background: var(--pattern-medium);
  border-radius: 50%;
  animation: float-dot 8s ease-in-out infinite;
}

.dot-1 {
  top: 15%;
  left: 10%;
  animation-delay: 0s;
}

.dot-2 {
  top: 25%;
  right: 15%;
  animation-delay: 2s;
}

.dot-3 {
  bottom: 30%;
  left: 20%;
  animation-delay: 4s;
}

.dot-4 {
  bottom: 20%;
  right: 25%;
  animation-delay: 6s;
}

.dot-5 {
  top: 60%;
  left: 50%;
  animation-delay: 1s;
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

.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: start;
  margin-bottom: 4rem;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.about-item {
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: var(--bg-primary);
  border-radius: 20px;
  box-shadow: 0 4px 20px var(--shadow-light);
  transition: all 0.3s ease;
  border: 1px solid var(--border-eco);
  position: relative;
  overflow: hidden;
}

.about-item::before {
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

.about-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px var(--shadow-medium);
  border-color: var(--eco-green-light);
}

.about-item:hover::before {
  opacity: 1;
}

.item-icon {
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

.item-icon svg {
  font-size: 2rem;
}

.item-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
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
  gap: 2rem;
}

.about-image-container {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px var(--shadow-medium);
}

.about-main-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.about-image-container:hover .about-main-image {
  transform: scale(1.05);
}

.image-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--gradient-eco);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 4px 15px var(--shadow-eco);
}

.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.stat-card {
  background: var(--bg-primary);
  padding: 1.5rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 15px var(--shadow-light);
  transition: all 0.3s ease;
  border: 1px solid var(--border-eco);
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px var(--shadow-medium);
  border-color: var(--eco-green-light);
}

.stat-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  display: block;
  color: var(--eco-green);
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--eco-green);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
}

/* Eco Features Section */
.eco-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.eco-feature {
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 4px 20px var(--shadow-light);
  transition: all 0.3s ease;
  border: 1px solid var(--border-eco);
  position: relative;
  overflow: hidden;
}

.eco-feature::before {
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

.eco-feature:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px var(--shadow-medium);
  border-color: var(--eco-green-light);
}

.eco-feature:hover::before {
  opacity: 1;
}

.eco-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
  color: var(--eco-green);
}

.eco-feature h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.eco-feature p {
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

/* Visual Gallery Section */
.visual-gallery {
  margin-top: 4rem;
  padding: 2rem;
  background: var(--bg-primary);
  border-radius: 20px;
  box-shadow: 0 4px 20px var(--shadow-light);
  border: 1px solid var(--border-eco);
}

.gallery-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 2rem;
  text-align: center;
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

.gallery-item {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 25px var(--shadow-medium);
  transition: all 0.3s ease;
  cursor: pointer;
}

.gallery-item.large {
  min-height: 350px;
}

.gallery-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px var(--shadow-medium);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 2rem 1.5rem 1.5rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}

.gallery-overlay h4 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
}

.gallery-overlay p {
  font-size: 1rem;
  opacity: 0.9;
  line-height: 1.4;
  margin: 0;
}

@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .section-title {
    font-size: 2rem;
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
    gap: 1.5rem;
  }

  .gallery-item.large {
    min-height: 300px;
  }
}

@media (max-width: 480px) {
  .about-stats {
    grid-template-columns: 1fr;
  }

  .about-item {
    padding: 1.5rem;
  }

  .item-icon {
    width: 60px;
    height: 60px;
  }

  .item-icon svg {
    font-size: 1.5rem;
  }

  .gallery-grid {
    gap: 1rem;
  }

  .gallery-item.large {
    min-height: 250px;
  }

  .gallery-overlay {
    padding: 1.5rem 1rem 1rem;
  }

  .gallery-overlay h4 {
    font-size: 1.2rem;
  }

  .gallery-overlay p {
    font-size: 0.9rem;
  }
}
</style>
