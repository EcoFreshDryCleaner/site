import { 
  collection, 
  getDocs, 
  query, 
  where, 
  orderBy,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp 
} from 'firebase/firestore'
import { db } from '../firebase/config.js'

/**
 * Services Service
 * Handles all Firestore operations for the services collection
 */
export class ServicesService {
  constructor() {
    this.collectionName = 'services'
  }

  /**
   * Get all active services
   * @returns {Promise<Array>} Array of service documents
   */
  async getAllServices() {
    try {
      const q = query(
        collection(db, this.collectionName),
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
      
      return services
    } catch (error) {
      console.error('Error fetching services:', error)
      throw error
    }
  }

  /**
   * Get a single service by slug
   * @param {string} slug - The service slug
   * @returns {Promise<Object|null>} Service document or null if not found
   */
  async getServiceBySlug(slug) {
    try {
      const q = query(
        collection(db, this.collectionName),
        where('slug', '==', slug),
        where('active', '==', true)
      )
      
      const querySnapshot = await getDocs(q)
      
      if (querySnapshot.empty) {
        return null
      }
      
      const doc = querySnapshot.docs[0]
      return {
        id: doc.id,
        ...doc.data()
      }
    } catch (error) {
      console.error('Error fetching service by slug:', error)
      throw error
    }
  }

  /**
   * Get a single service by ID
   * @param {string} id - The service document ID
   * @returns {Promise<Object|null>} Service document or null if not found
   */
  async getServiceById(id) {
    try {
      const docRef = doc(db, this.collectionName, id)
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data()
        }
      }
      
      return null
    } catch (error) {
      console.error('Error fetching service by ID:', error)
      throw error
    }
  }

  /**
   * Get featured services
   * @returns {Promise<Array>} Array of featured service documents
   */
  async getFeaturedServices() {
    try {
      const q = query(
        collection(db, this.collectionName),
        where('active', '==', true),
        where('featured', '==', true),
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
      
      return services
    } catch (error) {
      console.error('Error fetching featured services:', error)
      throw error
    }
  }

  /**
   * Add a new service
   * @param {Object} serviceData - The service data to add
   * @returns {Promise<string>} The ID of the created document
   */
  async addService(serviceData) {
    try {
      const serviceWithTimestamps = {
        ...serviceData,
        active: true,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      }
      
      const docRef = await addDoc(collection(db, this.collectionName), serviceWithTimestamps)
      return docRef.id
    } catch (error) {
      console.error('Error adding service:', error)
      throw error
    }
  }

  /**
   * Update an existing service
   * @param {string} id - The service document ID
   * @param {Object} updateData - The data to update
   * @returns {Promise<void>}
   */
  async updateService(id, updateData) {
    try {
      const docRef = doc(db, this.collectionName, id)
      const updateWithTimestamp = {
        ...updateData,
        updatedAt: serverTimestamp()
      }
      
      await updateDoc(docRef, updateWithTimestamp)
    } catch (error) {
      console.error('Error updating service:', error)
      throw error
    }
  }

  /**
   * Delete a service (mark as inactive)
   * @param {string} id - The service document ID
   * @returns {Promise<void>}
   */
  async deleteService(id) {
    try {
      const docRef = doc(db, this.collectionName, id)
      await updateDoc(docRef, {
        active: false,
        updatedAt: serverTimestamp()
      })
    } catch (error) {
      console.error('Error deleting service:', error)
      throw error
    }
  }

  /**
   * Hard delete a service (permanently remove)
   * @param {string} id - The service document ID
   * @returns {Promise<void>}
   */
  async hardDeleteService(id) {
    try {
      const docRef = doc(db, this.collectionName, id)
      await deleteDoc(docRef)
    } catch (error) {
      console.error('Error hard deleting service:', error)
      throw error
    }
  }
}

// Export a singleton instance
export const servicesService = new ServicesService()
export default servicesService
