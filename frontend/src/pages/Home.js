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
  // const [madarchodState, setMadarchodState] = useState({});

  // let events = []

  // async function getData() {
  //   try {
  //     let res = await axios({
  //       url: 'http://localhost:3069/getAllEvents',
  //       method: 'GET',
  //       timeout: 8000,
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })

  //     return res.data.data
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  // useEffect(() => {
  //   getData().then(res => {
  //     setMadarchodState(res)
  //     console.log(madarchodState)
  //   })
  // }, [])
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
      });
      return res.data.data;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData().then(res => {
      setMadarchodState(res);
      //setEvents(res);
      console.log(madarchodState)
    });
  }, []);

  //console.log(madarchodState);
  //console.log(events);
  return (
    <>
      <Nav />
      <section>
        <div className='container px-5'>
          <h2 className='text-center text-dark fw-bolder mt-4'>Events listed<span className='text-info'> </span> </h2>
          {
            Array.isArray(madarchodState) ? {
              
            } :"no"
          }
          {/* {events.map(event => {
            return (
              <>
                <div key={event.username}>
                  <div className='row' >
                    <div className='col-lg-12 d-flex justify-content-center align-items-center'>
                      <div className=" card border rounded shadow-sm mt-3 " style={{ maxWidth: '700px' }}>
                        <div className="d-flex align-items-center">
                          <img src={logo} alt="profileImage" className="rounded-circle mx-4" height={60} />
                          <div>
                            <h4 className="fw-bold mt-0 mb-0" style={{ fontSize: '22px' }}>{event.username}</h4>
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
                            </div>
                          </div>

                          <h5 className="fs-6">
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
              </>
            );
          })}   */}
        </div>
      </section> 
      <ToastContainer />
    </>
  )
}

export default Home


