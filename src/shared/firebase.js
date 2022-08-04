import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5jNQiJcyCtFTQeiWk07pHdEQ7y2u2fK4",
    authDomain: "authex-11f67.firebaseapp.com",
    projectId: "authex-11f67",
    storageBucket: "authex-11f67.appspot.com",
    messagingSenderId: "1020272328155",
    appId: "1:1020272328155:web:4802730f5f7971025fbbfe",
    measurementId: "G-QEMF8EJMTK"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;