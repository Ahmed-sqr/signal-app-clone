
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
import { enableIndexedDbPersistence } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCanbguRCk8cJkmBuhd7OCRXn1pXGNIvLU",
  authDomain: "signal-clone-a4c50.firebaseapp.com",
  projectId: "signal-clone-a4c50",
  storageBucket: "signal-clone-a4c50.appspot.com",
  messagingSenderId: "1076805714911",
  appId: "1:1076805714911:web:54ced183bcf342e259fa6a"
}

const app = initializeApp(firebaseConfig)
let auth
try {
  const customPersistence = {
    // Set the custom timeout value in milliseconds
    timeout: 10000, // 10 seconds
    // The rest of the persistence object can be the same as the default one
    storage: ReactNativeAsyncStorage,
    sync: true,
  }
  
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(customPersistence)
  })
} catch (error) {
  console.log(error)
}
const db = getFirestore(app)

export { db }
export { auth }