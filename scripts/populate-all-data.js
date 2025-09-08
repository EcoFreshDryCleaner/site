#!/usr/bin/env node

import { execSync } from 'child_process'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function populateAllData() {
  try {
    console.log('🚀 Starting data population for all collections...')
    
    // Run services population
    console.log('\n📋 Populating services data...')
    execSync('node scripts/populate-services.js', { 
      stdio: 'inherit',
      cwd: __dirname + '/..'
    })
    
    // Run promotions population
    console.log('\n🎁 Populating promotions data...')
    execSync('node scripts/populate-promotions.js', { 
      stdio: 'inherit',
      cwd: __dirname + '/..'
    })
    
    console.log('\n🎉 All data population completed successfully!')
    console.log('💡 You can now run "npm run build" to generate SSG files with the latest data.')
    
  } catch (error) {
    console.error('❌ Error during data population:', error)
    process.exit(1)
  }
}

// Run the script
populateAllData()
