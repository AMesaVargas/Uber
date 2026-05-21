import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCeS3w6WGa6Nro3fqkQydQSpMGde-7YA1U',
  authDomain: 'uberclone-aa41e.firebaseapp.com',
  projectId: 'uberclone-aa41e',
  storageBucket: 'uberclone-aa41e.firebasestorage.app',
  messagingSenderId: '219068361435',
  appId: '1:219068361435:web:a63281ed9689f671d3fafe',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
