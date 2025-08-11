<template>
  <div class="service-area-section">
    <div class="container">
      <div class="section-header">
        <h2>Our Service Area</h2>
        <p>Three locations serving Charlotte, North Carolina</p>
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
  // Define Charlotte locations with exact coordinates
  const locations = [
    { name: 'Charlotte - Uptown', lat: 35.2271, lng: -80.8431 },
    { name: 'Charlotte - South End', lat: 35.2071, lng: -80.8581 },
    { name: 'Charlotte - University Area', lat: 35.3071, lng: -80.7431 },
  ]

  // Define service area boundaries with smooth, continuous curves around Charlotte
  const serviceAreaBoundaries = [
    // Start from northwest and create smooth, continuous curves
    { lat: 35.33, lng: -80.95 }, // North boundary start
    { lat: 35.33, lng: -80.85 }, // North
    { lat: 35.33, lng: -80.75 }, // Northeast
    { lat: 35.33, lng: -80.65 }, // East
    { lat: 35.33, lng: -80.55 }, // Southeast
    { lat: 35.33, lng: -80.50 }, // East boundary

    // Smooth curve down to southeast - no sharp angles
    { lat: 35.30, lng: -80.48 }, // Southeast extension
    { lat: 35.26, lng: -80.45 }, // Southeast curve
    { lat: 35.23, lng: -80.42 }, // Southeast curve
    { lat: 35.20, lng: -80.45 }, // Southeast curve
    { lat: 35.18, lng: -80.50 }, // South boundary

    // Smooth curve to southwest - continuous flow
    { lat: 35.16, lng: -80.55 }, // Southwest curve
    { lat: 35.13, lng: -80.65 }, // Southwest curve
    { lat: 35.10, lng: -80.75 }, // Southwest curve
    { lat: 35.08, lng: -80.85 }, // Southwest extension
    { lat: 35.10, lng: -80.90 }, // Southwest curve
    { lat: 35.13, lng: -80.92 }, // Southwest curve
    { lat: 35.16, lng: -80.95 }, // Southwest curve
    { lat: 35.18, lng: -80.95 }, // West boundary

    // Smooth curve back to northwest - no sharp turns
    { lat: 35.20, lng: -80.97 }, // Northwest curve
    { lat: 35.23, lng: -80.98 }, // Northwest curve
    { lat: 35.26, lng: -80.98 }, // Northwest curve
    { lat: 35.30, lng: -80.97 }, // Northwest curve
    { lat: 35.33, lng: -80.96 }, // Northwest curve
  ]

  map = new google.maps.Map(mapRef.value, {
    center: { lat: 35.2271, lng: -80.8431 }, // Centered on Charlotte
    zoom: 10,
    styles: [
      {
        featureType: 'all',
        elementType: 'geometry',
        stylers: [{ color: '#f8fafc' }],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#e2e8f0' }],
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
    strokeColor: '#667eea',
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: '#667eea',
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
        fillColor: '#667eea',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeWeight: 2,
      },
    })

    // Create info window for the location name
    const infoWindow = new google.maps.InfoWindow({
      content: `<div style="color: #667eea; font-weight: 600; padding: 5px;">${location.name}</div>`,
      pixelOffset: new google.maps.Size(0, -5),
      disableAutoPan: true,
      closeButton: false,
    })

    // Hide the close button after the info window is created
    google.maps.event.addListener(infoWindow, 'domready', () => {
      const closeButtons = document.querySelectorAll('.gm-ui-hover-effect')
      closeButtons.forEach((button) => {
        button.style.display = 'none'
      })
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
  background: white;
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
  color: #1a202c;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-header p {
  font-size: 1.2rem;
  color: #64748b;
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  background-color: #f8fafc;
  position: relative;
  overflow: hidden;
}



@media (max-width: 768px) {
  #map {
    height: 400px;
  }

  .section-header h2 {
    font-size: 2rem;
  }
}

@media (max-width: 600px) {
  #map {
    height: 300px;
  }

  .service-area-section {
    padding: 4rem 0;
  }
}
</style>
