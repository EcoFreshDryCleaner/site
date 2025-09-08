# Data Population Scripts

This directory contains scripts to populate local data files from Firestore for SSG (Static Site Generation) builds.

## Overview

The SSG build process needs access to data at build time, but Firestore data is only available at runtime. These scripts solve this by:

1. Fetching data from Firestore during build time
2. Writing it to local data files
3. Components use local data during SSG builds and Firestore data during runtime

## Scripts

### `populate-services.js`
Fetches all active services from Firestore and writes them to `src/data/servicesData.js`.

### `populate-promotions.js`
Fetches all active promotions from Firestore and writes them to `src/data/promotionsData.js`.

### `populate-all-data.js`
Runs both services and promotions population scripts.

## Usage

### Running Scripts

```bash
# Populate all data (services + promotions)
npm run populate:data

# Populate only services
npm run populate:services

# Populate only promotions
npm run populate:promotions

# Build with fresh data
npm run build
```

### Automatic Data Population

The build process automatically runs data population:
```bash
npm run build  # Runs populate:data then vite-ssg build
```

## How It Works

### During SSG Build (`import.meta.env.SSR === true`)
- Components use local data from `src/data/` files
- No Firestore calls are made
- Faster build times
- Data is available immediately

### During Runtime (`import.meta.env.SSR === false`)
- Components fetch fresh data from Firestore
- Real-time data updates
- Dynamic content loading

## Data Files

### `src/data/servicesData.js`
```javascript
export const servicesData = [
  {
    id: "service-id",
    slug: "service-slug",
    title: "Service Title",
    subtitle: "Service Description",
    // ... other service properties
  }
]
```

### `src/data/promotionsData.js`
```javascript
export const promotionsData = [
  {
    id: "promotion-id",
    title: "Promotion Title",
    description: "Promotion Description",
    active: true,
    // ... other promotion properties
  }
]
```

## Components Using This System

- `PricingSection.vue` - Uses services data
- `PromotionsSection.vue` - Uses promotions data  
- `ServiceDetailView.vue` - Uses services data for individual service pages

## Troubleshooting

### Environment Variables Not Set
```
Error: Firebase configuration missing
```
**Solution**: Set all required Firebase environment variables.

### Firestore Permission Issues
```
Error: Permission denied
```
**Solution**: Ensure your Firebase project allows read access to the services and promotions collections.

### Data Not Updating
If you see stale data in your SSG build:
1. Run `npm run populate:data` to fetch fresh data
2. Run `npm run build` to rebuild with new data

## Development Workflow

1. **Update Firestore data** (services, promotions)
2. **Run data population**: `npm run populate:data`
3. **Build site**: `npm run build`
4. **Deploy**: Deploy the `dist/` folder

This ensures your SSG build always has the latest data from Firestore.
