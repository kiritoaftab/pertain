// Import the functions you need from the SDKs you need

const express = require('express');
const firebase = require('firebase/compat/app')
require('firebase/compat/firestore')
const firebaseFunctions = require('firebase-functions')
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

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
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const { doc, setDoc, updateDoc, addDoc, collection, getDoc, onSnapshot, DocumentSnapshot, where, limit, getDocs, query ,getCountFromServer,orderBy, QueryOrderByConstraint, QueryConstraint, startAfter} = require('firebase/firestore')
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
        const timestamp = firebase.firestore.FieldValue.serverTimestamp;
        console.log(JSON.stringify(timestamp)+"for adding event")
        const eventData = {
            'eventName': eventName,
            'organizerName': organizerName,
            'imgUrl':imgUrl,
            'desc': desc,
            'location':location,
            'date':date,
            'time':time,
            'price':price,
            'genre':genre,
            'timestamp':timestamp()
        }

        console.log(`Event data object ${JSON.stringify(eventData)}`)

        const userBool = await userExists(username)
        console.log(`User exists ${userBool} `)

        if(userBool){
            const eventDoc = await addEvent(eventData,username)
            console.log(`Event added at the path ${eventDoc.id}`)
            await addEventToCollection(eventData,eventDoc.id)
            res.send({"msg":"Event added successfully"})
        }else{
            res.send({"msg":`Cannot add event to ${username}, as it does not exist`})
        }
    } catch (error) {
        console.log(error)
        res.send({"msg":`cannot add event ${error}`})
    }
})



app.post('/eventsForUser',async (req,res) => {
    try {
        const recvData = req.body;
        console.log(JSON.stringify(recvData)+" for displaying user events")
        const username = recvData.username;
        const userBool = await userExists(username);
        console.log(userBool+" for username"+ username)
        const responseList= []
        if(userBool){
            const docsData = await getEventForUser(username)
            console.log(JSON.stringify(docsData) +" docs data")
            for(const key in docsData){
                console.log(`${key} -> ${docsData[key]}`)
                const innerDoc = docsData[key];
                innerDoc["id"]=key;
                responseList.push(innerDoc)
            }
            console.log("Res list" + responseList)
            res.send({
                "msg":`Events for the user ${username}\n`,
                "data":responseList
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

app.post('/allUsers',async(req,res) => {
    try{
        const allUsernames = await getAllUsers()
        console.log(allUsernames)
        res.send({"data":allUsernames})
    }
    catch(error){
        console.log(error)
        res.send({"msg" : `error ${error}`})
    }
})

app.get('/getAllEvents',async(req,res)=>{
    try {
        const userList = await getAllUsers()
        console.log(`All users are ${userList}`)
        let allEvents = []
        for(var i=0;i<userList.length;i++){
            const currUser = userList[i]
            const userEvents = await getEventForUser(userList[i])
            const userDoc ={}
            userDoc[currUser] = []
            console.log(`user events = ${userEvents}`)
            if (userEvents){
                //console.log(`User id ${userList[i]} events ${JSON.stringify(userEvents)}`)
                userDoc[currUser].push(userEvents)
                allEvents.push(userDoc)
            }else{
                console.log("i am here")
            }
        }
        // userList.forEach(async user => {
        //     const userEvents = await getEventForUser(user);
        //     allEvents.push(userEvents)
        // });
        //console.log(`All events are ${JSON.stringify(allEvents)}`)
        res.send({"data":allEvents})
    } catch (error) {
        res.send({"msg":`Cannot get All events ${error}`})
    }
})

app.get('/getPost',async(req,res)=> {
    try {
        console.log(req.query)
        const reqParams = req.query
        const postId = reqParams["postId"]
        const username = reqParams["username"] 
        const userEvent = await getEvent(username,postId)
        console.log(userEvent)
        if(userEvent ){
            const resBody ={
                "msg":"Event exists",
                "data":userEvent,
                "username":username
            }  
                res.send(resBody)
            }else{
                res.send({
                    "msg":"no such event for user",
                    "code":100,
                    "username":username
                })
            }
        } catch (error) {
            res.send({
                "msg":`${error} occured`
            })
        }
    })

var lastEvent = {}
var next = {}
app.post('/getPosts',async(req,res)=> {
    const eventsCollection = collection(db,"events");
    
    const eventsQuery = query(
        eventsCollection,
        orderBy('timestamp','desc'),
        limit(2)
    )
    
    
    const eventsSnap = await getDocs(eventsQuery);
    
    lastEvent = eventsSnap.docs[eventsSnap.docs.length-1]
    // console.log(`last ${JSON.stringify(lastEvent)}`)
    
    const eventsList =[]
    eventsSnap.forEach((snap) => {
        var docArray= {}
        // console.log(`Document has id ${snap.id} contains data ${JSON.stringify(snap.data())} \n`)
        docArray[snap.id] = snap.data();
        eventsList.push(docArray)
    })

    console.log(`events list ${JSON.stringify(eventsList)} \n`)
    res.send(eventsList)
})

app.post('/getPostsNext',async(req,res)=> {
    const next = query(collection(db,"events"),
    orderBy('timestamp','desc'),
    startAfter(lastEvent),
    limit(2)
    );

    const eventsSnap = await getDocs(next);
    
    lastEvent = eventsSnap.docs[eventsSnap.docs.length-1]

    console.log(`Next events `)

    const eventsList =[]
    eventsSnap.forEach((snap) => {
        var docArray= {}
        // console.log(`Document has id ${snap.id} contains data ${JSON.stringify(snap.data())} \n`)
        docArray[snap.id] = snap.data();
        eventsList.push(docArray)
    })

    console.log(`events list ${JSON.stringify(eventsList)} \n`)
    res.send(eventsList)
})

async function userExists(username){
    console.log(`Checking if username already exists ${username}`)
    const q = query(userCollection, where("username", "==", username))
    const snap = await getCountFromServer(q)
    console.log('count: ', snap.data().count);
    const count = snap.data().count
    return count!= 0
}

async function getEvent(username,postId) {
    const eventDoc = doc(db, "users",username,"events",postId)
    const eventData = await getDoc(eventDoc)
    console.log(eventData.data())
    if(eventData.data()){
        console.log(`i am here`)
        return eventData.data()
    }
    return null
}

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

async function getAllUsers(){
    const usersCollection= collection(db,"users")
    
    const usersQuery = query(usersCollection)
    
    const usersQuerySnap = await getDocs(usersQuery)
    // const allDocs= usersQuerySnap.docs
    
    var docArray = []
    usersQuerySnap.forEach((user)=>{
        console.log(`${user.id} has data ${user.data()}`)
        docArray.push(user.id)
    })
    
    return docArray
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
        eventsCollection,
        orderBy('timestamp','desc')
    )
    
    
    const eventsSnap = await getDocs(eventsQuery);

    var docArray= {}
    eventsSnap.forEach((snap) => {
        //console.log(`Document has id ${snap.id} contains data ${JSON.stringify(snap.data())}`)
        docArray[snap.id] = snap.data();
    })
    return docArray
}

async function addEventToCollection(eventData,docId) {
    console.log(`Recieved ${JSON.stringify(eventData)} -- \n ${JSON.stringify(docId)}`)
    const eventPath = doc(db,`events/${docId}`)
    const addedEvent = await setDoc(eventPath,eventData)
    console.log(`Data added to the events collection ${JSON.stringify(addedEvent)}`)
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

exports.api = firebaseFunctions.https.onRequest(app)