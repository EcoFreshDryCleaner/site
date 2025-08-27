/**
 * Firestore Orders Deletion Script
 *
 * This script deletes all orders from your Firestore database
 * WARNING: This action is irreversible and will permanently remove all order data!
 *
 * Usage:
 * 1. Make sure you have Firebase config set up
 * 2. Run: node scripts/delete-orders.js
 * 3. Confirm deletion when prompted
 *
 * Note: This script will permanently delete ALL orders from the orders collection.
 * Use with extreme caution in production environments.
 */

import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  query,
  getDocs,
  deleteDoc,
  writeBatch,
  limit,
} from 'firebase/firestore'
import readline from 'readline'

// Your Firebase configuration (update with your actual values)
const firebaseConfig = {
  apiKey: 'AIzaSyBA4e8J5bkdXm8AiZ2Al9vnVI_M2KE469M',
  authDomain: 'ecofresh-2690b.firebaseapp.com',
  projectId: 'ecofresh-2690b',
  storageBucket: 'ecofresh-2690b.firebasestorage.app',
  messagingSenderId: '172084272805',
  appId: '1:172084272805:web:9617cf7b0809526604b74c',
  measurementId: 'G-K2EJ1EBCYY',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

/**
 * Prompts user for confirmation before proceeding with deletion
 */
function promptConfirmation(message) {
  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      resolve(answer.toLowerCase().trim())
    })
  })
}

/**
 * Deletes all orders from the Firestore database
 */
async function deleteAllOrders() {
  try {
    console.log('🗑️  Starting orders deletion process...')

    // Get all orders
    const ordersQuery = query(collection(db, 'orders'))
    const querySnapshot = await getDocs(ordersQuery)

    if (querySnapshot.empty) {
      console.log('✅ No orders found in the database')
      return
    }

    const totalOrders = querySnapshot.docs.length
    console.log(`📊 Found ${totalOrders} orders to delete`)

    // Show sample of orders that will be deleted
    console.log('\n📋 Sample orders that will be deleted:')
    querySnapshot.docs.slice(0, 5).forEach((doc, index) => {
      const orderData = doc.data()
      const customerName = orderData.customer_name || orderData.name || 'Unknown Customer'
      const orderDate = orderData.date_placed
        ? orderData.date_placed.toDate
          ? orderData.date_placed.toDate().toLocaleDateString()
          : 'Unknown Date'
        : 'Unknown Date'
      const status = orderData.status || 'Unknown Status'
      console.log(`  ${index + 1}. ${customerName} - ${orderDate} (${status})`)
    })

    if (totalOrders > 5) {
      console.log(`  ... and ${totalOrders - 5} more orders`)
    }

    // Final confirmation
    const finalConfirm = await promptConfirmation(
      `\n⚠️  WARNING: This will permanently delete ALL ${totalOrders} orders!\n` +
        `This action cannot be undone. Are you absolutely sure? (yes/no): `,
    )

    if (finalConfirm !== 'yes') {
      console.log('❌ Deletion cancelled by user')
      return
    }

    // Delete orders in batches to avoid overwhelming Firestore
    console.log('\n🗑️  Deleting orders...')
    const batchSize = 500 // Firestore batch limit
    let deletedCount = 0
    let batchCount = 0

    for (let i = 0; i < totalOrders; i += batchSize) {
      const batch = writeBatch(db)
      const batchDocs = querySnapshot.docs.slice(i, i + batchSize)

      batchDocs.forEach((doc) => {
        batch.delete(doc.ref)
      })

      await batch.commit()
      deletedCount += batchDocs.length
      batchCount++

      console.log(
        `✅ Deleted batch ${batchCount}: ${batchDocs.length} orders (${deletedCount}/${totalOrders})`,
      )

      // Small delay between batches to avoid overwhelming Firestore
      if (i + batchSize < totalOrders) {
        await new Promise((resolve) => setTimeout(resolve, 100))
      }
    }

    console.log('\n🎉 Orders deletion completed successfully!')
    console.log(`📊 Total orders deleted: ${deletedCount}`)
    console.log(`📦 Batches processed: ${batchCount}`)
  } catch (error) {
    console.error('❌ Error deleting orders:', error)
    throw error
  }
}

/**
 * Shows help information
 */
function showHelp() {
  console.log(`
📚 Firestore Orders Deletion Script

⚠️  WARNING: This script will permanently delete ALL orders from your database!

Usage:
  node scripts/delete-orders.js          # Delete all orders (with confirmation)
  node scripts/delete-orders.js --help   # Show this help message

This script will:
❌ Permanently delete ALL orders from the orders collection
❌ Remove all order history and customer data
❌ This action cannot be undone

Safety Features:
✅ Requires explicit user confirmation
✅ Shows sample of orders before deletion
✅ Processes deletions in batches
✅ Provides progress updates

Make sure your Firebase config is correct before running!
  `)
}

/**
 * Main execution
 */
async function main() {
  const args = process.argv.slice(2)

  if (args.includes('--help')) {
    showHelp()
    return
  }

  try {
    // Initial warning
    console.log('🚨 ORDERS DELETION SCRIPT 🚨')
    console.log('This script will permanently delete ALL orders from your Firestore database!')
    console.log('Make sure you have a backup if needed.\n')

    const confirm = await promptConfirmation('Do you want to continue? (yes/no): ')

    if (confirm !== 'yes') {
      console.log('❌ Script cancelled by user')
      return
    }

    // Proceed with deletion
    await deleteAllOrders()
  } catch (error) {
    console.error('\n💥 Script execution failed:', error)
    process.exit(1)
  } finally {
    rl.close()
  }
}

// Run the script
main()
  .then(() => {
    console.log('\n🏁 Script execution completed successfully')
    process.exit(0)
  })
  .catch((error) => {
    console.error('\n💥 Script execution failed:', error)
    process.exit(1)
  })
