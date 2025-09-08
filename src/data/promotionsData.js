// Auto-generated file - do not edit manually
// Generated on: 2025-09-08T05:04:28.625Z
// Source: Firestore promotions collection

export const promotionsData = [
  {
    "id": "QiNvBfKxalUaP5ymY0bf",
    "showModal": false,
    "originalPrice": "",
    "title": "Express Service Premium",
    "modalConfig": {
      "image": null,
      "showOnMobile": true,
      "showOnce": false,
      "dismissible": true,
      "closeText": "Maybe Later",
      "buttonLink": "#mobile-app",
      "delay": 3000,
      "buttonText": "Claim Now"
    },
    "discountPrice": "",
    "terms": "",
    "createdAt": {
      "type": "firestore/timestamp/1.0",
      "seconds": 1755978940,
      "nanoseconds": 562000000
    },
    "discountCode": "",
    "discountPercentage": "",
    "updatedAt": {
      "type": "firestore/timestamp/1.0",
      "seconds": 1757294671,
      "nanoseconds": 384000000
    },
    "badge": "Fast",
    "features": [
      "Same-day turnaround",
      "Premium care included",
      "Priority processing"
    ],
    "description": "Get same-day service when you use Express Service.",
    "validFrom": null,
    "expiryDate": "",
    "icon": "fa-solid fa-bolt",
    "validUntil": null,
    "active": true,
    "featured": true
  },
  {
    "id": "lnuo7i4zCMJfINadoSTd",
    "description": "Save big when on your first order with 25% off!",
    "title": "New Customer Deal",
    "features": [
      "Free pickup & delivery",
      "Same-day service available"
    ],
    "discountAmount": "",
    "createdAt": {
      "type": "firestore/timestamp/1.0",
      "seconds": 1755978939,
      "nanoseconds": 604000000
    },
    "badge": "Most Popular",
    "discountCode": "",
    "discountPercentage": "25%",
    "originalPrice": "",
    "featured": true,
    "discountPrice": "",
    "terms": "",
    "updatedAt": {
      "type": "firestore/timestamp/1.0",
      "seconds": 1757039660,
      "nanoseconds": 144000000
    },
    "modalConfig": {
      "showOnce": true,
      "delay": 3000,
      "buttonLink": "#mobile-app",
      "showOnMobile": true,
      "buttonText": "Get Offer",
      "closeText": "Maybe Later",
      "image": null,
      "dismissible": true
    },
    "expiryDate": "",
    "active": true,
    "showModal": true,
    "validUntil": null,
    "validFrom": null,
    "icon": "fa-solid fa-plus"
  },
  {
    "id": "oJZGaA0y9sdE196Z70pl",
    "showModal": false,
    "discountAmount": "20%",
    "discountPrice": "",
    "description": "Enjoy a special discount on us on suits!",
    "features": [],
    "badge": "",
    "terms": "",
    "updatedAt": {
      "type": "firestore/timestamp/1.0",
      "seconds": 1757294707,
      "nanoseconds": 270000000
    },
    "title": "Monthly Special",
    "validUntil": {
      "type": "firestore/timestamp/1.0",
      "seconds": 1756425600,
      "nanoseconds": 0
    },
    "active": true,
    "validFrom": {
      "type": "firestore/timestamp/1.0",
      "seconds": 1756339200,
      "nanoseconds": 0
    },
    "originalPrice": "",
    "modalConfig": {
      "closeText": "Maybe Later",
      "buttonText": "Claim Now",
      "delay": 3000,
      "showOnce": false,
      "buttonLink": "#mobile-app",
      "dismissible": true,
      "showOnMobile": true,
      "image": null
    },
    "featured": false,
    "expiryDate": "Every Month",
    "discountCode": "SEPT10",
    "createdAt": {
      "type": "firestore/timestamp/1.0",
      "seconds": 1755978940,
      "nanoseconds": 303000000
    },
    "icon": "fa-solid fa-calendar",
    "discountPercentage": "10%"
  }
]

// Export featured promotions for easier access
export const featuredPromotions = promotionsData.filter(p => p.featured === true)

// Export active promotions (same as promotionsData for now)
export const activePromotions = promotionsData
