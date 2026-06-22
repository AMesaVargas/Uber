import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbdDGbfpRaWpd5jpHjI9vjKby0-yLQIYA",
  authDomain: "uber-clone-27e7d.firebaseapp.com",
  projectId: "uber-clone-27e7d",
  storageBucket: "uber-clone-27e7d.firebasestorage.app",
  messagingSenderId: "333661034384",
  appId: "1:333661034384:web:938d415e5412d018308515"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);