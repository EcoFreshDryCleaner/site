// Auto-generated file - do not edit manually
// Generated on: 2025-09-09T03:44:36.035Z
// Source: Firestore promotions collection

export const promotionsData = [
  {
    "id": "QiNvBfKxalUaP5ymY0bf",
    "expiryDate": "",
    "icon": "fa-solid fa-bolt",
    "badge": "Fast",
    "description": "Get same-day service when you use Express Service.",
    "validFrom": null,
    "originalPrice": "",
    "terms": "",
    "discountCode": "",
    "discountPrice": "",
    "showModal": false,
    "validUntil": null,
    "updatedAt": {
      "type": "firestore/timestamp/1.0",
      "seconds": 1757294671,
      "nanoseconds": 384000000
    },
    "features": [
      "Same-day turnaround",
      "Premium care included",
      "Priority processing"
    ],
    "modalConfig": {
      "closeText": "Maybe Later",
      "showOnMobile": true,
      "delay": 3000,
      "buttonLink": "#mobile-app",
      "buttonText": "Claim Now",
      "dismissible": true,
      "showOnce": false,
      "image": null
    },
    "active": true,
    "title": "Express Service Premium",
    "discountPercentage": "",
    "createdAt": {
      "type": "firestore/timestamp/1.0",
      "seconds": 1755978940,
      "nanoseconds": 562000000
    },
    "featured": true
  },
  {
    "id": "lnuo7i4zCMJfINadoSTd",
    "icon": "fa-solid fa-plus",
    "terms": "",
    "discountPrice": "",
    "badge": "Most Popular",
    "active": true,
    "createdAt": {
      "type": "firestore/timestamp/1.0",
      "seconds": 1755978939,
      "nanoseconds": 604000000
    },
    "discountAmount": "",
    "featured": true,
    "title": "New Customer Deal",
    "updatedAt": {
      "type": "firestore/timestamp/1.0",
      "seconds": 1757039660,
      "nanoseconds": 144000000
    },
    "validFrom": null,
    "expiryDate": "",
    "discountCode": "",
    "features": [
      "Free pickup & delivery",
      "Same-day service available"
    ],
    "showModal": true,
    "originalPrice": "",
    "validUntil": null,
    "discountPercentage": "25%",
    "modalConfig": {
      "delay": 3000,
      "dismissible": true,
      "closeText": "Maybe Later",
      "buttonText": "Get Offer",
      "image": null,
      "showOnce": true,
      "buttonLink": "#mobile-app",
      "showOnMobile": true
    },
    "description": "Save big when on your first order with 25% off!"
  },
  {
    "id": "oJZGaA0y9sdE196Z70pl",
    "badge": "",
    "active": true,
    "originalPrice": "",
    "discountPercentage": "10%",
    "updatedAt": {
      "type": "firestore/timestamp/1.0",
      "seconds": 1757294707,
      "nanoseconds": 270000000
    },
    "modalConfig": {
      "closeText": "Maybe Later",
      "buttonText": "Claim Now",
      "buttonLink": "#mobile-app",
      "showOnce": false,
      "delay": 3000,
      "dismissible": true,
      "showOnMobile": true,
      "image": null
    },
    "createdAt": {
      "type": "firestore/timestamp/1.0",
      "seconds": 1755978940,
      "nanoseconds": 303000000
    },
    "terms": "",
    "discountAmount": "20%",
    "validUntil": {
      "type": "firestore/timestamp/1.0",
      "seconds": 1756425600,
      "nanoseconds": 0
    },
    "features": [],
    "title": "Monthly Special",
    "validFrom": {
      "type": "firestore/timestamp/1.0",
      "seconds": 1756339200,
      "nanoseconds": 0
    },
    "featured": false,
    "showModal": false,
    "discountCode": "SEPT10",
    "icon": "fa-solid fa-calendar",
    "description": "Enjoy a special discount on us on suits!",
    "discountPrice": "",
    "expiryDate": "Every Month"
  }
]

// Export featured promotions for easier access
export const featuredPromotions = promotionsData.filter(p => p.featured === true)

// Export active promotions (same as promotionsData for now)
export const activePromotions = promotionsData
