// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyArGl9fkhmZvHJoNybKn3ZELciQtGyH82c",
  authDomain: "pertaink.firebaseapp.com",
  projectId: "pertaink",
  storageBucket: "pertaink.appspot.com",
  messagingSenderId: "482497548430",
  appId: "1:482497548430:web:1b95c8840d162db7c879df",
  measurementId: "G-YXQHECDLH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);