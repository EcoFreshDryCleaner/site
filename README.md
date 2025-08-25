# EcoFresh Dry Cleaner

A modern, responsive Vue.js website for EcoFresh Dry Cleaner - an eco-friendly dry cleaning service with free pickup and delivery. Built with Vue 3, Vite, and Firebase integration.

## 🏢 About EcoFresh Dry Cleaner

EcoFresh Dry Cleaner is a forward-thinking dry cleaning service committed to environmental sustainability and exceptional customer service. Our mission is to provide professional dry cleaning solutions while minimizing our ecological footprint.

### What We Do

- **Eco-Friendly Cleaning**: Use of environmentally safe cleaning solutions
- **Free Pickup & Delivery**: Convenient service covering Maryland areas
- **Professional Care**: Expert handling of delicate fabrics and garments
- **Mobile App**: Easy scheduling and order management through our app

### Why Choose Us

- **Sustainability First**: Green cleaning practices that protect the environment
- **Customer Convenience**: Free pickup and delivery service
- **Quality Assurance**: Professional-grade cleaning with attention to detail
- **Technology Driven**: Modern app-based ordering and tracking system

This website serves as our digital storefront, showcasing our services, pricing, and commitment to eco-friendly practices while providing an easy way for customers to learn about our offerings and get in touch.

## 🌟 Features

- **Modern Design**: Clean, professional interface with gradient backgrounds and smooth animations
- **Responsive Layout**: Fully responsive design optimized for all devices
- **Interactive Navigation**: Smooth scrolling navigation with active section highlighting
- **Service Area Map**: Interactive Google Maps integration showing Maryland service coverage
- **Contact Form**: Formkeep integration for customer inquiries
- **Mobile App Section**: Download links for iOS and Android apps
- **Dynamic Promotions**: Firebase-powered promotional content management
- **Font Awesome Icons**: Professional iconography throughout the site

## 📱 Website Sections

1. **Hero Section** - Main landing area with call-to-action
2. **Promotions Section** - Dynamic offers and deals from Firebase
3. **About Section** - Company information and eco-friendly practices
4. **Pricing Section** - Service tiers and pricing
5. **Testimonials Section** - Customer reviews and feedback
6. **Contact Section** - Contact information and service area map
7. **Mobile App Section** - App download links and features

## 🛠️ Tech Stack

- **Frontend**: Vue 3.5.18 with Composition API
- **Build Tool**: Vite 7.0.6
- **Styling**: CSS3 with custom properties and gradients
- **Icons**: Font Awesome 7.0.0
- **Backend**: Firebase 12.1.0 (Firestore)
- **Maps**: Google Maps API integration
- **Forms**: Formkeep for contact handling
- **Deployment**: GitHub Pages with gh-pages

## 🚀 Development

### Prerequisites

- Node.js (^20.19.0 or >=22.12.0)
- npm or yarn

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Lint and fix code
npm run format       # Format code with Prettier
npm run deploy       # Deploy to GitHub Pages

# Firebase data management
npm run seed:promotions           # Seed promotions data
npm run seed:promotions:clear     # Clear promotions data
npm run seed:promotions:help      # Show seeding options
```

### 🌐 Deployment

### GitHub Pages (Recommended)

```bash
npm run deploy
```

This automatically builds and deploys to `https://ecofreshdrycleaner.github.io/site`

## 📁 Project Structure

```
site/
├── src/
│   ├── components/           # Vue components
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── PricingSection.vue
│   │   ├── TestimonialsSection.vue
│   │   ├── PromotionsSection.vue
│   │   ├── ContactSection.vue
│   │   ├── MobileAppSection.vue
│   │   ├── Navigation.vue
│   │   ├── ServiceArea.vue
│   │   └── PromoModal.vue
│   ├── firebase/            # Firebase configuration
│   │   └── config.js
│   ├── services/            # Business logic
│   │   └── firestoreService.js
│   ├── router/              # Vue Router setup
│   │   └── index.js
│   ├── styles/              # Global styles
│   │   └── colors.css
│   ├── App.vue              # Main app component
│   └── main.js              # App entry point
├── scripts/                  # Utility scripts
│   ├── seed-promotions.js
│   └── seed-script.md
├── public/                   # Static assets
└── package.json
```

## 🔧 Development

### Code Quality

- **ESLint**: Code linting with Vue-specific rules
- **Prettier**: Code formatting
- **Vue DevTools**: Development debugging

### Firebase Integration

The project uses Firebase Firestore for dynamic content:

- **Promotions Management**: Dynamic promotional content
- **Real-time Updates**: Live content updates
- **Data Seeding**: Utility scripts for initial data setup

### Customization

#### Colors and Styling

CSS variables in `src/styles/colors.css` control the theme:

- Primary: `#3b82f6` to `#1d4ed8` (gradient)
- Text: `#1a202c`
- Secondary: `#64748b`

#### Service Area

Update `src/components/ServiceArea.vue`:

- Modify `cities` array for service locations
- Adjust `serviceAreaBoundaries` for coverage area
- Update map center and zoom level

#### Contact Information

Update contact details in:

- `src/components/ContactSection.vue`
- `src/App.vue` (footer section)

## 📞 Support

- **Business Inquiries**: hello@ecofriendlydrycleaner.com
- **Technical Support**: dev@tanuj.xyz
- **Developer**: Tanuj Siripurapu

---

Built with ❤️ using Vue 3 and modern web technologies.
