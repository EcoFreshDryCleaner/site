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

  const centerLat = (35.0168 + 35.3071 + 35.1271) / 3
  const centerLng = (-80.7236 + -80.7431 + -80.8431) / 3

  const radiusInDegrees = 20 / 69
  const circlePoints = []
  const numPoints = 64

  for (let i = 0; i < numPoints; i++) {
    const angle = (i / numPoints) * 2 * Math.PI
    const lat = centerLat + radiusInDegrees * Math.cos(angle)
    const lng =
      centerLng + (radiusInDegrees * Math.sin(angle)) / Math.cos((centerLat * Math.PI) / 180)
    circlePoints.push({ lat, lng })
  }

  circlePoints.push(circlePoints[0])

  const serviceAreaBoundaries = circlePoints

  map = new google.maps.Map(mapRef.value, {
    center: { lat: centerLat, lng: centerLng },
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

  const serviceAreaPolygon = new google.maps.Polygon({
    paths: serviceAreaBoundaries,
    strokeColor: '#1e40af',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#1e40af',
    fillOpacity: 0.08,
    map: map,
  })

  locations.forEach((location) => {
    const marker = new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: map,
      title: location.name,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        fillColor: '#1e40af',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeWeight: 2,
      },
    })

    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="padding: 10px; max-width: 250px;">
          <div style="color: #1e40af; font-weight: 600; margin-bottom: 5px;">${location.name}</div>
          <div style="font-size: 12px; color: #666; margin-bottom: 3px;">${location.address}</div>
          <div style="font-size: 12px; color: #666;">${location.phone}</div>
        </div>
      `,
      pixelOffset: new google.maps.Size(0, -5),
      disableAutoPan: true,
      closeButton: false,
    })

    google.maps.event.addListener(infoWindow, 'domready', () => {
      if (!import.meta.env.SSR) {
        const closeButtons = document.querySelectorAll('.gm-ui-hover-effect')
        closeButtons.forEach((button) => {
          button.style.display = 'none'
        })
      }
    })

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

  if (window.google && window.google.maps) {
    initMap()
  } else {
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
  padding: 4rem 0;
  background: var(--bg-primary);
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

.section-header h2 {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.section-header p {
  font-size: 1.1rem;
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
  height: 450px;
  border-radius: 10px;
  border: 1px solid var(--border-medium);
  background-color: var(--bg-secondary);
}

@media (max-width: 768px) {
  .service-area-section {
    display: none;
  }
}
</style>
