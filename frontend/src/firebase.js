// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyAlXbGAnSnYlvQXdntY73jk3UwQ2Hkeo10",
  authDomain: "pertain-56cb8.firebaseapp.com",
  projectId: "pertain-56cb8",
  storageBucket: "pertain-56cb8.appspot.com",
  messagingSenderId: "165069803137",
  appId: "1:165069803137:web:5a725e09cc558c6cbcc780",
  measurementId: "G-TCRXT69Q3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);