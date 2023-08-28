import React, { useContext, useEffect, useState } from 'react'
import Nav from '../components/Nav'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare, faComment, faPoll } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faClock, faLocation, faMapLocation, faMapMarker, faTicket, faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import proImg from "../assets/images/proImg.jpg"
import logo from "../assets/images/logo.png"

const Home = () => {
  const [madarchodState, setMadarchodState] = useState();
  const [events, setEvents] = useState([]);

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
      console.error(error);
    }
  }

  useEffect(() => {
    getData().then(res => {
      setMadarchodState(res);
      console.log(madarchodState)
    });
  }, []);

  return (
    <>
      <Nav />
      <section>
        <div className='container px-5'>
          {
           Array.isArray(madarchodState) ?
           Object.keys(madarchodState).map((userKey, index) => {
                const userEvents = madarchodState[userKey];
                if (Object.keys(userEvents[0]).length === 0) {
                  return null;
                } else if (Array.isArray(userEvents[0])) {
                  return userEvents[0].map((uevent, eventIndex) => (
                    <div key={eventIndex}>
                      <p>{uevent.eventName}</p>
                    </div>
                  ));
                } else {
                  return (
                    <h1 key={index}>{userEvents.eventName}</h1>
                  );
                }
              }) :
              "loading"
          }


        </div>
        <ToastContainer />
      </section>
    </>
  )
}

export default Home


