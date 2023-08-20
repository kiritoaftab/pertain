// Import the functions you need from the SDKs you need
const firebase = require('firebase/compat/app')
require('firebase/compat/firestore')

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
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()


const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Pertain');
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});