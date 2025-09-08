#!/usr/bin/env node

import { initializeApp, deleteApp } from 'firebase/app'
import { 
  getFirestore, 
  collection, 
  getDocs, 
  query, 
  where, 
  orderBy 
} from 'firebase/firestore'
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

import { firebaseConfig } from '../src/firebase/config.js'

async function populateServicesData() {
  let app = null
  
  try {
    console.log('🔥 Initializing Firebase...')
    
    // Initialize Firebase
    app = initializeApp(firebaseConfig)
    const db = getFirestore(app)
    
    console.log('📡 Fetching services from Firestore...')
    
    // Fetch all active services
    const q = query(
      collection(db, 'services'),
      where('active', '==', true),
      orderBy('order', 'asc')
    )
    
    const querySnapshot = await getDocs(q)
    const services = []
    
    querySnapshot.forEach((doc) => {
      services.push({
        id: doc.id,
        ...doc.data()
      })
    })
    
    console.log(`✅ Found ${services.length} services`)
    
    // Generate the services data file
    const servicesDataContent = `// Auto-generated file - do not edit manually
// Generated on: ${new Date().toISOString()}
// Source: Firestore services collection

export const servicesData = ${JSON.stringify(services, null, 2)}

// Export individual services for easier access
${services.map(service => 
  `export const ${service.slug.replace(/-/g, '_')} = servicesData.find(s => s.slug === '${service.slug}')`
).join('\n')}
`
    
    // Write to src/data/servicesData.js
    const outputPath = join(__dirname, '..', 'src', 'data', 'servicesData.js')
    writeFileSync(outputPath, servicesDataContent, 'utf8')
    
    console.log(`📝 Services data written to: ${outputPath}`)
    console.log('🎉 Services data population completed!')
    
  } catch (error) {
    console.error('❌ Error populating services data:', error)
    process.exit(1)
  } finally {
    // Close Firebase connection
    if (app) {
      try {
        await deleteApp(app)
        console.log('🔌 Firebase connection closed')
      } catch (deleteError) {
        console.warn('⚠️ Warning: Could not close Firebase connection:', deleteError.message)
      }
    }
  }
}

// Run the script
populateServicesData()
