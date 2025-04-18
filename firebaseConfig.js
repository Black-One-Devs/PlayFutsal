// firebaseConfig.js
import { initializeApp, getApps } from 'firebase/app';  // getApps checks if Firebase is already initialized
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'; // Firebase Authentication with persistence
import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage for storing auth state in React Native
import { getFirestore } from 'firebase/firestore';  // Firestore for database functionality
import { getStorage } from 'firebase/storage';  // Firebase Storage for handling file uploads/downloads

// Firebase configuration object containing project-specific details
const firebaseConfig = {
    apiKey: 'AIzaSyAj5y1MW8X9MBg0K5KdyJYax0qrN9SvUx4',
    authDomain: 'playfutsal-9d3cc.firebaseapp.com',
    projectId: 'playfutsal-9d3cc',
    storageBucket: 'playfutsal-9d3cc.firebasestorage.app',
    messagingSenderId: '889607647557',
    appId: '1:889607647557:android:e3f2fe06f66b5f68044e2c',
};

// Initialize Firebase app only if it's not already initialized
let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0]; // Use the already initialized app
}

// Initialize Firebase Auth with persistent storage using AsyncStorage
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore (Cloud Firestore database)
const firestore = getFirestore(app);

// Initialize Firebase Storage for file handling (uploads/downloads)
const storage = getStorage(app);

// Export the initialized instances to use across the app
export { auth, firestore, storage };
export default app;
