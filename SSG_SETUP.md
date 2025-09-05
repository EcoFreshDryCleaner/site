# Static Site Generation (SSG) Setup for EcoFresh Dry Cleaner

This project has been configured to use Vite SSG for static site generation, making it ready for deployment on Cloudflare Pages.

## What's Been Configured

### 1. Vite SSG Integration
- **Entry Point**: `src/main.ts` - Uses ViteSSG for static generation
- **Router**: Updated to use `createMemoryHistory` for SSR compatibility
- **Route Generation**: Dynamic routes for all service pages are automatically generated

### 2. SSR Compatibility
- **Navigation Component**: Added client-side checks for `window` and `document` objects
- **HomeView Component**: Protected all DOM access with environment checks
- **FontAwesome**: Properly configured for SSR

### 3. Build Configuration
- **Package Scripts**: 
  - `npm run build` - Builds static site with SSG
  - `npm run build:spa` - Builds traditional SPA (fallback)
- **Vite Config**: Optimized for SSG with proper output directory

### 4. Cloudflare Pages Configuration
- **`_headers`**: Security headers and caching rules
- **`_redirects`**: SPA fallback routing
- **`wrangler.toml`**: Cloudflare Pages deployment config

## Generated Routes

The following routes are automatically generated during build:

- `/` - Home page
- `/service/free-pickup-delivery` - Free Pickup and Delivery service
- `/service/dry-cleaning` - Dry Cleaning service
- `/service/wash-fold` - Wash & Fold service
- `/service/alterations` - Alterations service
- `/service/leather-cleaning` - Leather Cleaning service
- `/service/outerwear-cleaning` - Outerwear Cleaning service
- `/service/wedding-dress-cleaning` - Wedding Dress Cleaning service
- `/service/shoe-cleaning` - Shoe Cleaning service
- `/service/bedding-cleaning` - Bedding Cleaning service
- `/service/shirt-cleaning` - Shirt Cleaning service

## Deployment to Cloudflare Pages

### Option 1: Git Integration
1. Connect your repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set build output directory: `dist`
4. Deploy automatically on git push

### Option 2: Wrangler CLI
```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the site
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy dist --project-name ecofresh-drycleaner
```

## Development

### Local Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Key Features

- **Static Generation**: All pages are pre-rendered at build time
- **SEO Optimized**: Each service page has proper meta tags and content
- **Fast Loading**: Static files with optimal caching headers
- **Client-Side Hydration**: Interactive features work after initial load
- **Progressive Enhancement**: Works without JavaScript, enhanced with it

## File Structure

```
src/
├── main.ts              # SSG entry point
├── routes.ts            # Route generation logic
├── router/
│   └── index.js         # Router configuration
├── components/          # Vue components (SSR compatible)
└── views/              # Page components

dist/                   # Generated static files
├── index.html          # Home page
├── service/            # Service pages
│   ├── free-pickup-delivery/
│   │   └── index.html
│   └── ...
└── assets/             # Static assets
```

## Troubleshooting

### Build Errors
- Ensure all components check for `window`/`document` availability
- Use `typeof window !== 'undefined'` for client-side only code
- Test with `npm run build` before deploying

### Routing Issues
- Check `_redirects` file for SPA fallback
- Verify route generation in `src/routes.ts`
- Ensure all service slugs exist in `servicesData.js`

### Performance
- Images are optimized during build
- CSS and JS are minified and tree-shaken
- Static assets have long-term caching headers
