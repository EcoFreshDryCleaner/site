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

// Firebase configuration - you'll need to set these as environment variables
import { firebaseConfig } from '../src/firebase/config.js'


async function populatePromotionsData() {
  let app = null
  
  try {
    console.log('🔥 Initializing Firebase...')
    
    // Initialize Firebase
    app = initializeApp(firebaseConfig)
    const db = getFirestore(app)
    
    console.log('📡 Fetching promotions from Firestore...')
    
    // Fetch all active promotions
    const q = query(
      collection(db, 'promotions'),
      where('active', '==', true),
      orderBy('featured', 'desc'),
      orderBy('createdAt', 'desc'),
    )
    
    const querySnapshot = await getDocs(q)
    const promotions = []
    
    querySnapshot.forEach((doc) => {
      promotions.push({
        id: doc.id,
        ...doc.data()
      })
    })
    
    console.log(`✅ Found ${promotions.length} promotions`)
    
    // Generate the promotions data file
    const promotionsDataContent = `// Auto-generated file - do not edit manually
// Generated on: ${new Date().toISOString()}
// Source: Firestore promotions collection

export const promotionsData = ${JSON.stringify(promotions, null, 2)}

// Export featured promotions for easier access
export const featuredPromotions = promotionsData.filter(p => p.featured === true)

// Export active promotions (same as promotionsData for now)
export const activePromotions = promotionsData
`
    
    // Write to src/data/promotionsData.js
    const outputPath = join(__dirname, '..', 'src', 'data', 'promotionsData.js')
    writeFileSync(outputPath, promotionsDataContent, 'utf8')
    
    console.log(`📝 Promotions data written to: ${outputPath}`)
    console.log('🎉 Promotions data population completed!')
    
  } catch (error) {
    console.error('❌ Error populating promotions data:', error)
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
populatePromotionsData()
