import React, { useContext, useEffect, useState } from 'react'
import Nav from '../components/Nav'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare, faComment, faPoll } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faClock, faLocation, faMapLocation, faMapMarker, faTicket, faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import proImg from "../assets/images/proImg.jpg"
// import { useParams } from 'react-router-dom';
import logo from "../assets/images/logo.png"

const Home = () => {

  // const options = {
  //   method: 'GET',
  //   url: 'http://localhost:3069/getAllEvents',
  //  };

  // console.log("request body" + JSON.stringify(requestBody))

  const [madarchodState, setMadarchodState] = useState({});

  let events = []

  async function getData() {
    try {
      let res = await axios({
        url: 'http://localhost:3069/getAllEvents',
        method: 'GET',
        timeout: 8000,
        headers: {
          'Content-Type': 'application/json'
        }
      })

      console.log(res.data.data)
      return res.data.data
    } catch (error) {
      console.error(error)
    }
  }



  useEffect(() => {
    getData().then(res => {
      setMadarchodState(res)
      console.log(madarchodState)
    })
  }, [])

  return (
    <>
      <Nav />
      <section>
        <div className='container px-5'>
            {
              Array.isArray(madarchodState)? 
              madarchodState.map((events,index) =>{
                let userKey = Object.keys(events);
                let userEvents = events[userKey]
                //console.log(`${userKey} has events ${JSON.stringify(userEvents[0])}`)
                if(Object.keys(userEvents[0]).length ===0 ){
                  
                }else if(Array.isArray(userEvents[0])) {
                  
                    userEvents[0].map((uevent,index)=> {
                      return (
                        <div key={index}>
                          {JSON.stringify(uevent)}
                        </div>
                      )
                    })
                   
                  
                  // return(
                  //   <div key={index}>
                  //     {/* <h1>{JSON.stringify(events)}</h1> */}
                      
                  //     {
                        

                  //       Object.keys(events).length!=0 ? 
                  //       `${JSON.stringify(events)} -- 
                  //         ${Object.keys(events)}
                  //       ` : "no"
                  //     }
                  //     <h1>hello one event</h1>
                  //   </div>
                  // )
                } else{
                  return (
                    <h1>{userEvents}</h1>
                  )
                }
                
              }
              ):
              "loading"
            }

          </div>
      <ToastContainer />
      </section>
    </>
  )
}

export default Home


