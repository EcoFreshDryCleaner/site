// Auto-generated file - do not edit manually
// Generated on: 2025-09-08T05:15:29.170Z
// Source: Firestore promotions collection

export const promotionsData = [
  {
    "id": "QiNvBfKxalUaP5ymY0bf",
    "createdAt": {
      "type": "firestore/timestamp/1.0",
      "seconds": 1755978940,
      "nanoseconds": 562000000
    },
    "title": "Express Service Premium",
    "modalConfig": {
      "showOnce": false,
      "closeText": "Maybe Later",
      "buttonLink": "#mobile-app",
      "image": null,
      "buttonText": "Claim Now",
      "dismissible": true,
      "showOnMobile": true,
      "delay": 3000
    },
    "featured": true,
    "active": true,
    "showModal": false,
    "originalPrice": "",
    "icon": "fa-solid fa-bolt",
    "updatedAt": {
      "type": "firestore/timestamp/1.0",
      "seconds": 1757294671,
      "nanoseconds": 384000000
    },
    "description": "Get same-day service when you use Express Service.",
    "discountPercentage": "",
    "terms": "",
    "expiryDate": "",
    "discountPrice": "",
    "discountCode": "",
    "validUntil": null,
    "validFrom": null,
    "badge": "Fast",
    "features": [
      "Same-day turnaround",
      "Premium care included",
      "Priority processing"
    ]
  },
  {
    "id": "lnuo7i4zCMJfINadoSTd",
    "terms": "",
    "discountAmount": "",
    "discountPrice": "",
    "modalConfig": {
      "showOnce": true,
      "image": null,
      "buttonLink": "#mobile-app",
      "showOnMobile": true,
      "dismissible": true,
      "buttonText": "Get Offer",
      "closeText": "Maybe Later",
      "delay": 3000
    },
    "features": [
      "Free pickup & delivery",
      "Same-day service available"
    ],
    "updatedAt": {
      "type": "firestore/timestamp/1.0",
      "seconds": 1757039660,
      "nanoseconds": 144000000
    },
    "discountPercentage": "25%",
    "validFrom": null,
    "badge": "Most Popular",
    "originalPrice": "",
    "icon": "fa-solid fa-plus",
    "discountCode": "",
    "title": "New Customer Deal",
    "featured": true,
    "showModal": true,
    "expiryDate": "",
    "validUntil": null,
    "active": true,
    "createdAt": {
      "type": "firestore/timestamp/1.0",
      "seconds": 1755978939,
      "nanoseconds": 604000000
    },
    "description": "Save big when on your first order with 25% off!"
  },
  {
    "id": "oJZGaA0y9sdE196Z70pl",
    "discountPercentage": "10%",
    "title": "Monthly Special",
    "showModal": false,
    "updatedAt": {
      "type": "firestore/timestamp/1.0",
      "seconds": 1757294707,
      "nanoseconds": 270000000
    },
    "icon": "fa-solid fa-calendar",
    "description": "Enjoy a special discount on us on suits!",
    "featured": false,
    "modalConfig": {
      "closeText": "Maybe Later",
      "dismissible": true,
      "image": null,
      "showOnMobile": true,
      "buttonLink": "#mobile-app",
      "showOnce": false,
      "delay": 3000,
      "buttonText": "Claim Now"
    },
    "originalPrice": "",
    "discountAmount": "20%",
    "validUntil": {
      "type": "firestore/timestamp/1.0",
      "seconds": 1756425600,
      "nanoseconds": 0
    },
    "validFrom": {
      "type": "firestore/timestamp/1.0",
      "seconds": 1756339200,
      "nanoseconds": 0
    },
    "features": [],
    "discountCode": "SEPT10",
    "discountPrice": "",
    "createdAt": {
      "type": "firestore/timestamp/1.0",
      "seconds": 1755978940,
      "nanoseconds": 303000000
    },
    "terms": "",
    "expiryDate": "Every Month",
    "active": true,
    "badge": ""
  }
]

// Export featured promotions for easier access
export const featuredPromotions = promotionsData.filter(p => p.featured === true)

// Export active promotions (same as promotionsData for now)
export const activePromotions = promotionsData
