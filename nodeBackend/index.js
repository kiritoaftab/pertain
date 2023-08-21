// Import the functions you need from the SDKs you need

const express = require('express');
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
const { doc, setDoc, updateDoc, addDoc, collection, getDoc, onSnapshot, DocumentSnapshot, where, limit, getDocs, query ,getCountFromServer} = require('firebase/firestore')
const cors = require('cors');


const app = express();

const port = 3069;

app.use(express.json())
app.use(cors({  
    origin: '*'
}));

//GLOBAL app variables
const userCollection = collection(db,'users')

app.get('/test', (req, res) => {
  res.send('Hello Pertain');
});

app.post('/login',async(req,res) => {
    try {
        
        const recvData = req.body;
        console.log(`Recieved request to login user \n ${recvData}`)
        const username = recvData.username;
        const password= recvData.password;

        const [userBool] = await Promise.all(userExists(username));

        console.log(userBool)
        if(userBool){
            res.send({"msg":"User logged in successfully"})
        }
    } catch (error) {
        res.send({"msg":`cannot update ${error}`})
    }
})

app.post('/register', async(req,res) => {
    try {
        const recvData = req.body;

        console.log(`Recieved request to Register user \n ${JSON.stringify(recvData)}`)
        const email = recvData.email;
        const name = recvData.name;
        const phone = recvData.phone;
        const password = recvData.password;
        const username = recvData.username;

        const userBool = await userExists(username);
        console.log(userBool + " User Boolean")
        if(userBool){
            res.send({"msg": "User already exists, please login"})
        }else{

            const userData = {
                email: email,
                name: name,
                phone: phone,
                password: password,
                username: username
            }
    
            await addUser(userData);
    
            res.send({"msg":"User added successfully"})
        }
        
    } catch (error) {
        console.log(error);
        res.send({"msg":`cannot register ${error}`})
    }
})


async function addUser(userData){
    
    const userPath = doc(db,`users/${userData.username}`)
    const addedUser = await setDoc(userPath,userData)
    console.log(addedUser)

}

async function userExists(username){
    console.log(`Checking if username already exists ${username}`)
    const q = query(userCollection, where("username", "==", username))
    const snap = await getCountFromServer(q)
    console.log('count: ', snap.data().count);
    const count = snap.data().count
    return count!= 0
}

// get call
function authenticateUser(username,password) {
    const userDoc = null;
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});