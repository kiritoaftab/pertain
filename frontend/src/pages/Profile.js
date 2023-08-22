import React from 'react'
import '../assets/style/core.css'
import proImg from "../assets/images/proImg.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import rectangle44 from '../assets/images/Rectangle 29.png'
import { faCalendar, faClock, faLocation, faMapLocation, faMapMarker, faTicket, faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';


function Profile() {

    const { username } = useParams();

    console.log("Username:", username);
    const requestBody = {
        username: username
    }

    const options = {
        method: 'POST',
        url: 'http://localhost:3069/eventsForUser',
        data: requestBody
    };

    console.log("request body" + JSON.stringify(requestBody))

    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                setEvents(response.data.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);
    // console.log(typeof (events) + "The typeof Events")
    // console.log(JSON.stringify(events))
    return (
        <>
            <div className="container my-3 mt-5">
                <div className="d-flex">
                    <div className="circle">
                        <a href="/">
                            <img src={proImg} alt="" />
                        </a>
                    </div>
                    <div className="mx-3">
                        <h1>{username}</h1>
                        <p className="text-info">Lorem ipsum dolor sit</p>
                    </div>
                </div>
            </div>
            <div className="container">
                {/* Tabs navs */}
                <ul className="nav nav-tabs mb-3 " id="ex1" role="tablist">
                    <li className="nav-item mb-3" role="presentation">
                        <a className="btn btn-outline-info active me-4" id="ex1-tab-1" data-bs-toggle="tab" href="#ex1-tabs-1" role="tab" aria-controls="ex1-tabs-1" aria-selected="true" style={{ height: '77px', width: '370px' }}>
                            <span style={{ position: 'relative', top: '19px' }}>My Events</span>
                        </a>
                    </li>
                    <li className="nav-item mb-3" role="presentation">
                        <a className="btn btn-outline-info me-4" id="ex1-tab-2" data-bs-toggle="tab" href="#ex1-tabs-2" role="tab" aria-controls="ex1-tabs-2" aria-selected="false" style={{ height: '77px', width: '370px' }}>
                            <span style={{ position: 'relative', top: '19px' }}>Bookings</span>
                        </a>
                    </li>
                    <li className="nav-item mb-3" role="presentation">
                        <a className="btn btn-outline-info" id="ex1-tab-3" data-bs-toggle="tab" href="#ex1-tabs-3" role="tab" aria-controls="ex1-tabs-3" aria-selected="false" style={{ height: '77px', width: '370px' }}>
                            <span style={{ position: 'relative', top: '19px' }}>Insights</span>
                        </a>
                    </li>
                </ul>
                {/* Tabs navs */}

                {/* Tabs content */}
                <div className="tab-content" id="ex1-content">
                    {/* Events */}

                    {/* {events.map((event, index) => (
                            <div key={index}>
                                <h3 className='text-dark'>{event.eventName}</h3>
                                <p>Organizer: {event.organizerName}</p>
                                <p>Description: {event.desc}</p>
                                <p>Location: {event.location}</p>
                                <p>Date: {event.date}</p>
                                <p>Genre: {event.genre}</p>
                                <p>Time: {event.time}</p>
                            </div>
                        ))} */}
                    <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                        <h2>Events for {username}</h2>
                        {events.map(event => {
                            return (
                                <> 
                                <div key={event.id}>

                                    <div className='row'>
                                        <div className='col-lg-12 d-flex justify-content-center align-items-center'>
                                            <div className=" card border rounded shadow-sm mt-3 " style={{ maxWidth: '600px' }}>
                                                <div className="d-flex align-items-center">
                                                    <img src={proImg} alt="profileImage" className="rounded-circle mx-4" height={100} />
                                                    <div>
                                                        <h4 className="fw-bold fs-5 fs-lg-4">{username}</h4>
                                                        <h4 className="fw-bold fs-5 fs-lg-4">{event.genre}</h4>
                                                    </div>
                                                </div>
                                                <div className="event-banner d-flex justify-content-center align-items-center mt-4 mb-4">
                                                    <img src={event.imgUrl} alt="event-banner" className="rounded img-fluid" />
                                                </div>

                                                <h5 className="fs-6">
                                                    {event.desc}
                                                </h5>
                                                <div className='col-lg-12 d-flex justify-content-center align-items-center'>
                                                    <div className="border rounded p-4">
                                                        <div className="d-flex">
                                                            <FontAwesomeIcon icon={faCalendar} size="lg" className="me-4 text-info" /><p className='fs-5'>{event.date}</p>
                                                        </div>
                                                        <div className="d-flex">
                                                            <FontAwesomeIcon icon={faClock} size="lg" className="me-4 text-info" /><p className='fs-5'>{event.time}</p>
                                                        </div>
                                                        <div className="d-flex">
                                                            <FontAwesomeIcon icon={faMapLocation} size="lg" className="me-4 text-info" /><p className='fs-5'>{event.location}</p>
                                                        </div>
                                                        <div className="d-flex">
                                                            <FontAwesomeIcon icon={faMapLocation} size="lg" className="me-4 text-info" /><p className='fs-5'>{event.price}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                </>
                            );
                        }
                        )}




                    </div>


                    {/* Bookings Tab */}
                    <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                        <h1 className="fw-bold twitter-blue my-5">Bookings</h1>
                        <div className="bookingtab my-5">
                            <div className="row">
                                <div className="col-sm-4">
                                    <h1 className="text-center my-4">Booked</h1>
                                    <p className="text-center" style={{ fontSize: '2rem' }}>12</p>
                                </div>
                                <div className="col-sm-4">
                                    <h1 className="text-center my-4">Available</h1>
                                    <p className="text-center" style={{ fontSize: '2rem' }}>30</p>
                                </div>
                                <div className="col-sm-4">
                                    <h1 className="text-center my-4">Total</h1>
                                    <p className="text-center" style={{ fontSize: '2rem' }}>42</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Insights Tab */}
                    <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                        <div className="d-flex">
                            <div className="mx-3">
                                <div className="circle1">
                                    <a href="/profile.html">
                                        <img src="/Images/UNJ05AV8_400x400.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="mx-5">
                                <p style={{ position: 'relative', top: '20px' }}>Rachel liked your post</p>
                            </div>
                            <div className="mx-5">
                                <p style={{ position: 'relative', top: '20px' }}>4m ago</p>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex">
                            <div className="mx-3">
                                <div className="circle1">
                                    <a href="/profile.html">
                                        <img src="/Images/UNJ05AV8_400x400.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="mx-5">
                                <p style={{ position: 'relative', top: '20px' }}>Rachel liked your post</p>
                            </div>
                            <div className="mx-5">
                                <p style={{ position: 'relative', top: '20px' }}>4m ago</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div >
                {/* Tabs content Ended */}
            </div>


        </>
    )
}

export default Profile