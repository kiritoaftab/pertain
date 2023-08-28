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
                let useEvents = userEvents[0]
                if(Object.keys(useEvents).length ===0 ){
                  
                }else {
                  return( 
                  <div key={index}>
                      <h1>   {userKey}  </h1>
                      {/* {JSON.stringify(useEvents)} */}
                      {
                        Object.keys(useEvents).map((key)=>{
                           
                          return(
                            <div key={key}>
                              {/* <h1>{JSON.stringify(useEvents[key])}</h1> */}
                              <h2>Event Name -- {useEvents[key].eventName? useEvents[key].eventName : ""} </h2>
                              <h2>Organizer Name -- {useEvents[key].organizerName? useEvents[key].organizerName: ""} </h2>
                              <h2>Desc-- {useEvents[key].desc? useEvents[key].desc : ""} </h2>
                              <h2>Genre -- {useEvents[key].genre? useEvents[key].genre : ""} </h2>
                              <h2>Date -- {useEvents[key].date? useEvents[key].date : ""} </h2>
                              <h2>Location -- {useEvents[key].location? useEvents[key].location : ""}</h2>
                              <h2>Time -- {useEvents[key].time? useEvents[key].time : "" }</h2>
                              <h2>Price -- {useEvents[key].price? useEvents[key].price: ""} </h2>
                              <img src={useEvents[key].imgUrl[0]} />
                              <h1> ------ </h1>
                            </div>
                            
                            
                          )

                        })
                      }
                  </div>
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


