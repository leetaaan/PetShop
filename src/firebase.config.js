
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBS3v7768moPQvKGUkc1MQ95ytnh9gLuHE",
  authDomain: "petshop-c19db.firebaseapp.com",
  projectId: "petshop-c19db",
  storageBucket: "petshop-c19db.appspot.com",
  messagingSenderId: "482693626351",
  appId: "1:482693626351:web:cc8a39f12e1e18e2f05e1a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app