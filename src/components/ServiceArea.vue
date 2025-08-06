<template>
  <div class="service-area-section">
    <div class="container">
      <div class="section-header">
        <h2>Our Service Area</h2>
        <p>Serving Baltimore and the surrounding Maryland area</p>
      </div>
      <div class="map-container">
        <div id="map" ref="mapRef"></div>
        <div class="service-areas">
          <h3>Areas We Serve</h3>
          <ul>
            <li>Baltimore</li>
            <li>Annapolis</li>
            <li>Salisbury</li>
            <li>Towson</li>
            <li>Columbia</li>
            <li>Rockville</li>
            <li>Frederick</li>
            <li>Hagerstown</li>
            <li>Gaithersburg</li>
            <li>Elkton</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const mapRef = ref(null)
let map = null

const initMap = () => {
  // Define city locations with exact coordinates
  const cities = [
    { name: 'Baltimore', lat: 39.2904, lng: -76.6122 },
    { name: 'Annapolis', lat: 38.9784, lng: -76.4922 },
    { name: 'Salisbury', lat: 38.3607, lng: -75.5994 },
    { name: 'Towson', lat: 39.4015, lng: -76.6019 },
    { name: 'Columbia', lat: 39.2037, lng: -76.8611 },
    { name: 'Rockville', lat: 39.084, lng: -77.1528 },
    { name: 'Frederick', lat: 39.4142, lng: -77.4105 },
    { name: 'Hagerstown', lat: 39.6418, lng: -77.72 },
    { name: 'Gaithersburg', lat: 39.1434, lng: -77.2014 },
    { name: 'Elkton', lat: 39.6068, lng: -75.8333 },
  ]

  // Define service area boundaries tracing around the cities with natural curves
  const serviceAreaBoundaries = [
    // Start from northwest (Hagerstown area)
    { lat: 39.75, lng: -77.8 }, // Northwest start
    { lat: 39.7, lng: -77.6 }, // Curve towards Frederick
    { lat: 39.5, lng: -77.5 }, // Around Frederick
    { lat: 39.3, lng: -77.3 }, // Curve towards Rockville
    { lat: 39.2, lng: -77.2 }, // Around Rockville
    { lat: 39.1, lng: -77.1 }, // Curve towards Gaithersburg
    { lat: 39.0, lng: -77.0 }, // Around Gaithersburg
    { lat: 38.9, lng: -76.9 }, // Curve towards Columbia
    { lat: 38.8, lng: -76.8 }, // Around Columbia
    { lat: 38.7, lng: -76.7 }, // Curve towards Baltimore
    { lat: 38.6, lng: -76.6 }, // Around Baltimore
    { lat: 38.5, lng: -76.5 }, // Curve towards Towson
    { lat: 38.4, lng: -76.4 }, // Around Towson
    { lat: 38.3, lng: -76.3 }, // Curve towards Annapolis
    { lat: 38.2, lng: -76.2 }, // Around Annapolis
    { lat: 38.1, lng: -76.1 }, // Curve towards Eastern Shore
    { lat: 38.0, lng: -76.0 }, // Around Eastern Shore
    { lat: 37.9, lng: -75.9 }, // Curve towards Salisbury
    { lat: 37.8, lng: -75.8 }, // Around Salisbury
    { lat: 37.7, lng: -75.7 }, // Curve towards Elkton
    { lat: 37.8, lng: -75.6 }, // Around Elkton
    { lat: 37.9, lng: -75.5 }, // Curve back towards Baltimore
    { lat: 38.0, lng: -75.4 }, // Around Baltimore area
    { lat: 38.1, lng: -75.3 }, // Curve towards Frederick
    { lat: 38.2, lng: -75.2 }, // Around Frederick area
    { lat: 38.3, lng: -75.1 }, // Curve towards Hagerstown
    { lat: 38.4, lng: -75.0 }, // Around Hagerstown area
    { lat: 38.5, lng: -75.1 }, // Curve back to northwest
    { lat: 38.6, lng: -75.2 }, // Around northwest
    { lat: 38.7, lng: -75.3 }, // Curve towards start
    { lat: 38.8, lng: -75.4 }, // Around start area
    { lat: 38.9, lng: -75.5 }, // Curve back to northwest
    { lat: 39.0, lng: -75.6 }, // Around northwest
    { lat: 39.1, lng: -75.7 }, // Curve towards start
    { lat: 39.2, lng: -75.8 }, // Around start area
    { lat: 39.3, lng: -75.9 }, // Curve back to northwest
    { lat: 39.4, lng: -76.0 }, // Around northwest
    { lat: 39.5, lng: -76.1 }, // Curve towards start
    { lat: 39.6, lng: -76.2 }, // Around start area
    { lat: 39.7, lng: -76.3 }, // Curve back to northwest
    { lat: 39.75, lng: -77.8 }, // Back to start
  ]

  map = new google.maps.Map(mapRef.value, {
    center: { lat: 39.2904, lng: -76.6122 }, // Centered on Baltimore
    zoom: 8,
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

  // Add markers and labels for each city
  cities.forEach((city) => {
    // Create marker
    const marker = new google.maps.Marker({
      position: { lat: city.lat, lng: city.lng },
      map: map,
      title: city.name,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        fillColor: '#667eea',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeWeight: 2,
      },
    })

    // Create info window for the city name
    const infoWindow = new google.maps.InfoWindow({
      content: `<div style="color: #667eea; font-weight: 600; padding: 5px;">${city.name}</div>`,
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
  gap: 4rem;
  align-items: center;
}

#map {
  flex: 1;
  height: 500px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  background-color: #f8fafc;
  position: relative;
  overflow: hidden;
}

.service-areas {
  width: 300px;
  padding: 2.5rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.service-areas h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 1.5rem;
}

.service-areas ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-areas li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #e2e8f0;
  color: #4a5568;
  font-size: 1rem;
}

.service-areas li:last-child {
  border-bottom: none;
}

@media (max-width: 768px) {
  .map-container {
    flex-direction: column;
    gap: 3rem;
  }

  .service-areas {
    width: 100%;
  }

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
