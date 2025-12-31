<template>
  <div class="service-area-section">
    <div class="container">
      <div class="section-header">
        <h2>Our Service Area</h2>
        <p>Three convenient locations serving Charlotte, North Carolina</p>
      </div>
      <div class="map-container">
        <div id="map" ref="mapRef"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const mapRef = ref(null)
let map = null

const initMap = () => {
  // Define EcoFresh locations with exact coordinates
  const locations = [
    {
      name: 'EcoFresh - Mathews',
      lat: 35.0168,
      lng: -80.7236,
      address: '1115 A Mathews Mint Hill Rd, Mathews, NC 28105',
      phone: '(704) 847-5992',
    },
    {
      name: 'EcoFresh - Mallard Creek',
      lat: 35.3071,
      lng: -80.7431,
      address: '2712 W Mallard Creek Church Rd, Charlotte, NC 28262',
      phone: '(704) 717-8180',
    },
    {
      name: 'EcoFresh - Piedmont Row',
      lat: 35.1271,
      lng: -80.8431,
      address: '4625 Piedmont Row Dr #145A, Charlotte, NC 28210',
      phone: '(704) 554-1788',
    },
  ]

  // Calculate center point between all three locations
  const centerLat = (35.0168 + 35.3071 + 35.1271) / 3
  const centerLng = (-80.7236 + -80.7431 + -80.8431) / 3

  // Create a circle with 20-mile radius (approximately 0.29 degrees)
  const radiusInDegrees = 20 / 69 // 1 degree ≈ 69 miles
  const circlePoints = []
  const numPoints = 64 // Number of points to create smooth circle

  for (let i = 0; i < numPoints; i++) {
    const angle = (i / numPoints) * 2 * Math.PI
    const lat = centerLat + radiusInDegrees * Math.cos(angle)
    const lng =
      centerLng + (radiusInDegrees * Math.sin(angle)) / Math.cos((centerLat * Math.PI) / 180)
    circlePoints.push({ lat, lng })
  }

  // Close the circle
  circlePoints.push(circlePoints[0])

  const serviceAreaBoundaries = circlePoints

  map = new google.maps.Map(mapRef.value, {
    center: { lat: centerLat, lng: centerLng }, // Centered on calculated center point
    zoom: 10,
    styles: [
      {
        featureType: 'all',
        elementType: 'geometry',
        stylers: [{ color: 'var(--bg-secondary)' }],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: 'var(--border-medium)' }],
      },
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
      },
    ],
  })

  // Create a polygon for the service area
  const serviceAreaPolygon = new google.maps.Polygon({
    paths: serviceAreaBoundaries,
    strokeColor: 'var(--primary-blue)',
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: 'var(--primary-blue)',
    fillOpacity: 0.1,
    map: map,
  })

  // Add markers and labels for each location
  locations.forEach((location) => {
    // Create marker
    const marker = new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: map,
      title: location.name,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        fillColor: 'var(--primary-blue)',
        fillOpacity: 1,
        strokeColor: 'var(--text-white)',
        strokeWeight: 2,
      },
    })

    // Create info window for the location details
    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="padding: 10px; max-width: 250px;">
          <div style="color: var(--primary-blue); font-weight: 600; margin-bottom: 5px;">${location.name}</div>
          <div style="font-size: 12px; color: #666; margin-bottom: 3px;">${location.address}</div>
          <div style="font-size: 12px; color: #666;">${location.phone}</div>
        </div>
      `,
      pixelOffset: new google.maps.Size(0, -5),
      disableAutoPan: true,
      closeButton: false,
    })

    // Hide the close button after the info window is created
    google.maps.event.addListener(infoWindow, 'domready', () => {
      if (!import.meta.env.SSR) {
        const closeButtons = document.querySelectorAll('.gm-ui-hover-effect')
        closeButtons.forEach((button) => {
          button.style.display = 'none'
        })
      }
    })

    // Add hover event listeners
    marker.addListener('mouseover', () => {
      infoWindow.open(map, marker)
    })

    marker.addListener('mouseout', () => {
      infoWindow.close()
    })
  })
}

onMounted(() => {
  if (import.meta.env.SSR) return

  // Wait for Google Maps to be fully loaded
  if (window.google && window.google.maps) {
    initMap()
  } else {
    // If Google Maps isn't loaded yet, wait for it
    window.initMap = initMap
    const checkGoogleMaps = setInterval(() => {
      if (window.google && window.google.maps) {
        initMap()
        clearInterval(checkGoogleMaps)
      }
    }, 100)
  }
})
</script>

<style scoped>
.service-area-section {
  padding: 6rem 0;
  background: var(--bg-primary);
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

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-header p {
  font-size: 1.2rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.map-container {
  display: flex;
  justify-content: center;
}

#map {
  width: 100%;
  max-width: 800px;
  height: 500px;
  border-radius: 20px;
  box-shadow: 0 4px 6px var(--transparent-black);
  background-color: var(--bg-secondary);
  position: relative;
  overflow: hidden;
}

@media (max-width: 768px) {
  .service-area-section {
    display: none;
  }
}

</style>
