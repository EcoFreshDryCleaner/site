import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  orderBy,
  limit,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase/config'

// Promotions Collection
export const promotionsCollection = 'promotions'

// Get all active promotions (excluding modal promotion)
export const getPromotions = async () => {
  try {
    const q = query(
      collection(db, promotionsCollection),
      where('active', '==', true),
      orderBy('featured', 'desc'),
      orderBy('createdAt', 'desc'),
    )

    const querySnapshot = await getDocs(q)
    const promotions = []

    querySnapshot.forEach((doc) => {
      promotions.push({
        id: doc.id,
        ...doc.data(),
      })
    })

    return promotions
  } catch (error) {
    console.error('Error getting promotions:', error)
    return []
  }
}

// Get featured promotions (excluding modal promotion)
export const getFeaturedPromotions = async (limit = 3) => {
  try {
    const q = query(
      collection(db, promotionsCollection),
      where('active', '==', true),
      where('showModal', '==', false),
      where('featured', '==', true),
      orderBy('createdAt', 'desc'),
      limit(limit),
    )

    const querySnapshot = await getDocs(q)
    const promotions = []

    querySnapshot.forEach((doc) => {
      promotions.push({
        id: doc.id,
        ...doc.data(),
      })
    })

    return promotions
  } catch (error) {
    console.error('Error getting featured promotions:', error)
    return []
  }
}

// Get the modal promotion (only one should exist)
export const getModalPromotion = async () => {
  try {
    const q = query(
      collection(db, promotionsCollection),
      where('active', '==', true),
      where('showModal', '==', true),
      limit(1),
    )

    const querySnapshot = await getDocs(q)

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0]
      return {
        id: doc.id,
        ...doc.data(),
      }
    }

    return null
  } catch (error) {
    console.error('Error getting modal promotion:', error)
    return null
  }
}

// Get promotion by ID
export const getPromotionById = async (id) => {
  try {
    const docRef = doc(db, promotionsCollection, id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      }
    } else {
      return null
    }
  } catch (error) {
    console.error('Error getting promotion:', error)
    return null
  }
}

// Track promotion claim
export const trackPromotionClaim = async (promotionId, userId = null) => {
  try {
    const claimData = {
      promotionId,
      userId,
      claimedAt: serverTimestamp(),
      userAgent: navigator.userAgent,
      timestamp: serverTimestamp(),
    }

    await addDoc(collection(db, 'promotionClaims'), claimData)
    return true
  } catch (error) {
    console.error('Error tracking promotion claim:', error)
    return false
  }
}

// Admin functions (for future use)
export const createPromotion = async (promotionData) => {
  try {
    // If this promotion is set to show as modal, ensure no other modal exists
    if (promotionData.showModal) {
      await ensureOnlyOneModal()
    }

    const docRef = await addDoc(collection(db, promotionsCollection), {
      ...promotionData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      active: true,
    })
    return docRef.id
  } catch (error) {
    console.error('Error creating promotion:', error)
    throw error
  }
}

export const updatePromotion = async (id, updateData) => {
  try {
    // If this promotion is set to show as modal, ensure no other modal exists
    if (updateData.showModal) {
      await ensureOnlyOneModal(id)
    }

    const docRef = doc(db, promotionsCollection, id)
    await updateDoc(docRef, {
      ...updateData,
      updatedAt: serverTimestamp(),
    })
    return true
  } catch (error) {
    console.error('Error updating promotion:', error)
    throw error
  }
}

export const deletePromotion = async (id) => {
  try {
    const docRef = doc(db, promotionsCollection, id)
    await deleteDoc(docRef)
    return true
  } catch (error) {
    console.error('Error deleting promotion:', error)
    throw error
  }
}

// Helper function to ensure only one modal promotion exists
const ensureOnlyOneModal = async (excludeId = null) => {
  try {
    const q = query(
      collection(db, promotionsCollection),
      where('active', '==', true),
      where('showModal', '==', true),
    )

    const querySnapshot = await getDocs(q)

    // Update all existing modal promotions to not show as modal
    const updatePromises = querySnapshot.docs
      .filter((doc) => doc.id !== excludeId)
      .map((doc) =>
        updateDoc(doc.ref, {
          showModal: false,
          updatedAt: serverTimestamp(),
        }),
      )

    if (updatePromises.length > 0) {
      await Promise.all(updatePromises)
    }
  } catch (error) {
    console.error('Error ensuring only one modal promotion:', error)
    throw error
  }
}
