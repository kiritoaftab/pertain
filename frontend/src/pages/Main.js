import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faCalendar, faClock, faMapLocation } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/images/logo.png"
import Nav from "../components/Nav";

function Main() {
  // Make api call
  async function getData() {
    try {
      let res = await axios({
        url: "http://localhost:3069/getPosts",
        method: "POST",
        timeout: 8000,
        headers: {
          "Content-Type": "application/json",
        },
      });

      return res.data;
    } catch (error) {
      console.error(error);
    }
  }

  // Make api call to next events 
  async function getNextData() {
    try {
      let res = await axios({
        url: "http://localhost:3069/getPostsNext",
        method: "POST",
        timeout: 8000,
        headers: {
          "Content-Type": "application/json",
        },
      });

      return res.data;
    } catch (error) {
      console.log(error)
    }
  }

  // Define a state to store events
  const [events, setEvents] = useState([]);

  // Fetch initial data on component mount
  useEffect(() => {
    getData().then((res) => {
      setEvents(res);
    });
  }, []);

  // Define a function to handle fetching next events
  const nextEventsHandler = () => {
    getNextData().then((res) => {
      setEvents(current => [...current, ...res]);
    });
  }

  // Define a function to render event items
  const renderEventItems = () => {

    return  events.map((event, index) => {
      const eventId = Object.keys(event)[0];
      const userKey = Object.keys(event);
      const userEvents = event[eventId];
      const useEvents = userEvents[0];
      const username = event[eventId].username
      const profileUrl = `/profile/${username}`;
      const shareUrl = `/${username}/${eventId}`;
      console.log(event)
      return (
        
        <div key={index}>
        <div className='row'>
        <div className='col-lg-12 d-flex justify-content-center align-items-center'>
          <div className=" card border rounded shadow-sm mt-3 " style={{ maxWidth: '700px' }}>
            <div className="d-flex align-items-center row">
              <img src={logo} alt="profileImage" className="rounded-circle  mx-4 col-2" height={100} />
              <div className='col-6'>
                <a className='text-decoration-none' href={profileUrl}> <h5 className="fw-bold mt-0 mb-0 text-dark" style={{ fontSize: '2rem' }}>{event[eventId].username ? event[eventId].username : ``}</h5> </a>
                <p className="fw-bold mt-3 mb-0 text-secondary" style={{ fontSize: '16px' }}>Organised By :</p>
                <div className='row'>
                  <div className="col-lg-8">
                    <h2 className="fw-bold mt-1 mb-0" style={{ fontSize: '18px' }}>  {event[eventId].organizerName ? event[eventId].organizerName : ``}</h2>
                  </div>

                </div>

              </div>
              <div className="col-2">
                <p className="fw-bold mt-1 mb-0 badge bg-info text-white" style={{ fontSize: '1rem' }}>{event[eventId].genre ? event[eventId].genre : ``}</p>
              </div>
            </div>

            <div className="event-banner mt-4 mb-4">
              <img src={event[eventId].imgUrl ? event[eventId].imgUrl : ``} alt="event-banner" className="rounded img-fluid" />
              <div className='row mt-4'>
                <div className="col-lg-8 d-flex justify-content-center align-items-center">
                  <h2 className="fw-bolder">
                    {event[eventId].eventName ? event[eventId].eventName : ``}                                            </h2>
                </div>
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                  <p className='fs-5'><span className='text-info fw-bolder fs-4 me-2'>&#x20B9;</span>
                    {event[eventId].price ? event[eventId].price : ``} <a href={shareUrl}>
                      <FontAwesomeIcon icon={faShare} size="lg" className="me-1 text-info" /></a></p>

                </div>
              </div>

              <h5 className="fs-6">
                {event[eventId].desc ? event[eventId].desc : ``}
              </h5>
            </div>

            <div className='row'>
              <div className="col-lg-4 d-flex justify-content-center ">
                <p className='fs-6'> <FontAwesomeIcon icon={faCalendar} size="lg" className="me-1 text-info" />{event[eventId].date ? event[eventId].date : ``}</p>
              </div>
              <div className="col-lg-3 d-flex justify-content-center ">
                <p className='fs-6'> <FontAwesomeIcon icon={faClock} size="lg" className="me-1 text-info" />  {event[eventId].time ? event[eventId].time : ``}</p>
              </div>
              <div className="col-lg-5 d-flex justify-content-center ">
                <p className='fs-6'>  <FontAwesomeIcon icon={faMapLocation} size="lg" className="me-1 text-info" />  {event[eventId].location ? event[eventId].location : ``}</p>
              </div>
            </div>
          </div>
        </div>
      </div>           </div>
      );
    });
  }

  return (
    <>
        <Nav />

      <div>
        All Events 
        <div>
          {events.length > 0 ? renderEventItems() : "Loading..."}
          <button onClick={nextEventsHandler}>Next events</button>
        </div>
      </div>
    </>
  );
}

export default Main;
