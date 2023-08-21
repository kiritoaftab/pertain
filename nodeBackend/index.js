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
        console.log(`Recieved request to login user \n ${JSON.stringify(recvData)}`)
        const username = recvData.username;
        const password= recvData.password;

        const userBool = await userExists(username);

        console.log(userBool + " if user exists") 
        if(userBool){
            const authenticatedUser = await authenticateUser(username,password)
            if(authenticatedUser){
                res.send({
                    "msg":"User logged in successfully",
                    "code":200, //All okay , can proceeed
                })
            }else{
                res.send({
                    "msg":"Password entered is incorrect, Please try again",
                    "code": 401,  //Password is not correct
                })
            }
            
        }else{
            res.send({
                "msg":"User does not exist, please login",
                "code":301,     // User does not exist, redirect to /register
            })
        }
    } catch (error) {
        console.log(error);
        res.send({"msg":`cannot login ${error}`})
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
            res.send({"msg": "User already exists, please login",
                    "code": 301
                })
        }else{

            const userData = {
                email: email,
                name: name,
                phone: phone,
                password: password,
                username: username
            }
    
            await addUser(userData);
    
            res.send({"msg":"User added successfully",
                    "code":200})
        }
        
    } catch (error) {
        console.log(error);
        res.send({"msg":`cannot register ${error}`,
                    "code":500})
    }
})

app.post('/addEvent', async(req,res) => {
    try {
        const recvData = req.body;
        console.log(`Request recieved to add Event ${JSON.stringify(recvData)}`)

        const eventName = recvData.eventName;
        const organizerName = recvData.organizerName;
        const imgUrl = recvData.imgUrl;
        const desc = recvData.desc;
        const location = recvData.location;
        const date = recvData.date;
        const time = recvData.time;
        const price = recvData.price;
        const username= recvData.username;
        const genre = recvData.genre;

        const eventData = {
            'eventName': eventName,
            'organizerName': organizerName,
            'imgUrl':imgUrl,
            'desc': desc,
            'location':location,
            'date':date,
            'time':time,
            'price':price,
            'genre':genre
        }

        console.log(`Event data object ${JSON.stringify(eventData)}`)

        const userBool = await userExists(username)
        console.log(`User exists ${userBool} `)

        if(userBool){
            const eventDoc = await addEvent(eventData,username)
            console.log(`Event added at the path ${eventDoc.path}`)
            res.send({"msg":"Event added successfully"})
        }else{
            res.send({"msg":`Cannot add event to ${username}, as it does not exist`})
        }
    } catch (error) {
        console.log(error)
        res.send({"msg":`cannot add event ${error}`})
    }
})

app.get('/allEvents',async(req,res) => {
    try {
        const allEventDocs= await getAllEvents();
        console.log(typeof(allEventDocs)+ "all event docs")
        res.send({"msg":"All events"})
    } catch (error) {
        console.log(error)
        res.send({"msg":`Cannot view all events ${error}`})
    }
})

app.get('/eventsForUser',async (req,res) => {
    try {
        const recvData = req.body;

        const username = recvData.username;
        const userBool = await userExists(username);
        if(userBool){
            const docsData = await getEventForUser(username)
            res.send({
                "msg":`Events for the user ${username}\n`,
                "data":docsData
            })
        }else{
            res.send({"msg":"Cannot add user, as it does not exist"})
        }
    } catch (error) {
        console.log(error)
        res.send({"msg":`Cannot get events for user ${error} `})
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
async function authenticateUser(username,password) {
    const userDocRef = doc(db,"users",username);
    const userDoc = await getDoc(userDocRef);

    if(userDoc.exists()){
        //perform authentication
        const userData=userDoc.data();
        console.log( typeof(userData.password) + " password data type " + userData.password )

        if (password === userData.password){
            return true;
        }
    }else{
        console.log("Cannot authenticate user, as document does not exist")
    }
    return false;
}

async function addEvent(eventData,username){
    const eventsCollection = collection(db,"users",username,"events")
    const eventObj = await addDoc(eventsCollection,eventData)
    return eventObj
}

async function getAllEvents(){
    const eventsQuery= db.collectionGroup('users')
  
    eventsQuery.get().then((querySnap) => {
        console.log("All username are: \n")
        let bombArray = []
        let docArray = []
        let docMap = {}
        querySnap.forEach(async (userDoc)=>{
            
            const userData = userDoc.data();
            const username= userData.username;
             
            console.log(username)
            if(username){
                const perUserCollection = collection(db,"users",username,"events")
                const perUserEventsQuery = query(perUserCollection);
                const perUserEventsQuerySnap= await getDocs(perUserEventsQuery); 
                console.log(JSON.stringify(perUserEventsQuerySnap.size))
                const allDocs= perUserEventsQuerySnap.docs;
                
                allDocs.forEach((doc) => {
                    console.log(`${doc.id} has ${JSON.stringify(doc.data())}`)
                    docArray.push(doc.data());
                    docMap[doc.id]=doc.data();
                })
                //console.log("i am here" + JSON.stringify(docArray.length))
                bombArray.push(docArray)
            }
           // console.log(bombArray)
        })
        console.log(bombArray)
       
       
    })
   
    
}

async function getEventForUser(username){
    const eventsCollection = collection(db,"users",username,"events");
    const eventsQuery = query(
        eventsCollection
    )
    const eventsSnap = await getDocs(eventsQuery);

    var docArray= {}
    eventsSnap.forEach((snap) => {
        console.log(`Document has id ${snap.id} contains data ${JSON.stringify(snap.data())}`)
        docArray[snap.id] = snap.data();
    })
    return docArray
}


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});