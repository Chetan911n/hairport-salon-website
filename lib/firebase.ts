import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4GfV_-UN_51Nxr87lxAWvbMeZZS0J9u0",
  authDomain: "hairport-queue.firebaseapp.com",
  projectId: "hairport-queue",
  storageBucket: "hairport-queue.firebasestorage.app",
  messagingSenderId: "549250266901",
  appId: "1:549250266901:web:e6ada249699eaea7471b1c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
