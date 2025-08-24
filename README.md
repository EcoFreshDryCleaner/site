# EcoFresh Dry Cleaner

A modern, sleek, one-page Vue.js website for EcoFresh Dry Cleaner - an eco-friendly dry cleaning service. Built with Vue 3, Vite, and Font Awesome icons.

## 🌟 Features

- **Modern Design**: Clean, professional interface with gradient backgrounds and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Navigation**: Smooth scrolling navigation with active section highlighting
- **Service Area Map**: Interactive Google Maps integration showing service coverage in Maryland
- **Contact Form**: Formspree integration for easy customer inquiries
- **Mobile App Section**: Download links for iOS and Android apps
- **Font Awesome Icons**: Professional iconography throughout the site

## 📱 Sections

1. **Hero Section** - Main landing area with call-to-action
2. **Promotions Section** - Current offers and deals
3. **About Section** - Company information and eco-friendly practices
4. **Pricing Section** - Service tiers and pricing
5. **Testimonials Section** - Customer reviews and feedback
6. **Contact Section** - Contact information and service area map
7. **Mobile App Section** - App download links and features

## 🛠️ Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Fast build tool and dev server
- **Font Awesome** - Professional icon library
- **Google Maps API** - Interactive service area mapping
- **Formspree** - Contact form handling
- **CSS3** - Modern styling with gradients and animations

## 🚀 Getting Started

### Prerequisites

- Node.js (^20.19.0 or >=22.12.0)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd site
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint and fix code
npm run lint

# Format code
npm run format
```

## 🌐 Deployment

### GitHub Pages

This project is configured for easy deployment to GitHub Pages:

```bash
# Deploy to GitHub Pages
npm run deploy
```

This command will:

1. Build the project for production
2. Deploy the `dist` folder to the `gh-pages` branch
3. Make your site available at `https://ecofreshdrycleaner.github.io/site`

### Manual Deployment

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting service

## 📁 Project Structure

```
site/
├── src/
│   ├── components/
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── PricingSection.vue
│   │   ├── TestimonialsSection.vue
│   │   ├── PromotionsSection.vue
│   │   ├── ContactSection.vue
│   │   ├── MobileAppSection.vue
│   │   ├── Navigation.vue
│   │   └── ServiceArea.vue
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   └── main.js
├── public/
├── index.html
├── package.json
└── README.md
```

## 🎨 Customization

### Colors and Styling

The project uses a consistent color scheme defined in CSS variables. Main colors:

- Primary: `#3b82f6` to `#1d4ed8` (gradient)
- Text: `#1a202c`
- Secondary text: `#64748b`

### Service Area

Update the service area in `src/components/ServiceArea.vue`:

- Modify the `cities` array with your service locations
- Adjust the `serviceAreaBoundaries` for your coverage area
- Update the map center and zoom level

### Contact Information

Update contact details in:

- `src/components/ContactSection.vue`
- `src/App.vue` (footer section)

## 📞 Dev Support

For development questions or technical support, please contact:

- **Developer**: Tanuj Siripurapu
- **Email**: dev@tanuj.xyz

---

Built with ❤️ using Vue 3 and modern web technologies.
