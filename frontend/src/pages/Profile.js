import React from 'react'
import '../assets/style/core.css'
import proImg from "../assets/images/proImg.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import rectangle44 from '../assets/images/Rectangle 29.png'
import { faCalendar, faClock, faShareAlt, faLocation, faMapLocation, faMapMarker, faTicket, faTicketAlt,faShare } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import logo from "../assets/images/logo.png"


function Profile() {

    const { username } = useParams();

    console.log("Username:", username);
    const requestBody = {
        username: username
    }
    console.log("request body" + JSON.stringify(requestBody))

    const [events, setEvents] = useState([]);

    async function getData() {
        try {
          let res = await axios({
            url: 'http://localhost:3069/eventsForUser',
            method: 'POST',
            timeout: 8000,
            headers: {
              'Content-Type': 'application/json'
            },
            data: requestBody
          })
    
          console.log(res.data.data)
          return res.data.data
        } catch (error) {
          console.error(error);
        }
      }

      useEffect(() => {
        getData().then(res => {
          console.log("Calling for events for the user")
          setEvents(res);
          console.log(events)
        });
      }, []);
    console.log(typeof (events) + "The typeof Events")
    console.log(JSON.stringify(events))
    return (
        <>
            <Nav />
            <div className="p-1">
                <div className="container rounded p-3 mt-4 mb-5 shadow-sm">
                    <h2 className='mt-3 text-dark fw-bolder'>Events listed by<span className='text-info'> {username}</span> </h2>
                    <hr></hr>
                    {Array.isArray(events)?  
                    events.map((event,index) => {
                        const shareUrl = `/${username}/${event.id}`
                        return (    
                                <div key={index}>
                                    <div className='row'>
                                        <div className='col-lg-12 d-flex justify-content-center align-items-center'>
                                            <div className=" card border rounded shadow-sm mt-3 " style={{ maxWidth: '600px' }}>

                                                <div className="d-flex align-items-center">
                                                    <img src={logo} alt="profileImage" className="rounded-circle mx-4" height={100} />
                                                    <div>
                                                        <h4 className="fw-bold mt-0 mb-0" style={{ fontSize: '22px' }}>{username}</h4>
                                                        <p className="fw-bold mt-2 mb-0 text-muted" style={{ fontSize: '16px' }}>Organised By :</p>
                                                        <div className='row'>
                                                            <div className="col-lg-8">
                                                                <h2 className="fw-bold mt-1 mb-0" style={{ fontSize: '18px' }}>{event.organizerName}</h2>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <p className="fw-bold mt-1 mb-0 badge bg-info text-white" style={{ fontSize: '14px' }}>{event.genre}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="event-banner mt-4 mb-4">
                                                    <img src={event.imgUrl} alt="event-banner" className="rounded img-fluid" />
                                                    <div className='row mt-4'>
                                                        <div className="col-lg-8 d-flex justify-content-center align-items-center">
                                                            <h2 className="fw-bolder">
                                                                {event.eventName}
                                                            </h2>
                                                        </div>
                                                        <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                                            <p className='fs-5'><span className='text-info fw-bolder fs-4 me-2'>&#x20B9;</span>{event.price}</p>
                                                            <a href={shareUrl}> 
                                                             <FontAwesomeIcon icon={faShare} size="lg" className="me-1 text-info"/></a>
                                                        </div>
                                                    </div>

                                                    <h5 className="fs-6 ">
                                                        {event.desc}
                                                    </h5>
                                                </div>

                                                <div className='row'>
                                                    <div className="col-lg-4 d-flex justify-content-center ">
                                                        <p className='fs-6'> <FontAwesomeIcon icon={faCalendar} size="lg" className="me-1 text-info" />{event.date}</p>
                                                    </div>
                                                    <div className="col-lg-3 d-flex justify-content-center ">
                                                        <p className='fs-6'> <FontAwesomeIcon icon={faClock} size="lg" className="me-1 text-info" /> {event.time}</p>
                                                    </div>
                                                    <div className="col-lg-5 d-flex justify-content-center ">
                                                        <p className='fs-6'>  <FontAwesomeIcon icon={faMapLocation} size="lg" className="me-1 text-info" /> {event.location}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        );
                    })
                    : "loading"}
                    {/* </div> */}



                </div >
            </div>

        </>
    )
}

export default Profile