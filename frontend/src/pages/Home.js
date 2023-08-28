import React, { useContext, useEffect, useState } from 'react'
import Nav from '../components/Nav'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare, faComment, faPoll } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faClock, faLocation, faMapLocation, faMapMarker, faTicket, faTicketAlt, fa } from '@fortawesome/free-solid-svg-icons';
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
              madarchodState.map((events, index) => {
                let userKey = Object.keys(events);
                let userEvents = events[userKey]
                //console.log(`${userKey} has events ${JSON.stringify(userEvents[0])}`)
                let useEvents = userEvents[0]
                if (Object.keys(useEvents).length === 0) {

                } else {
                  return (
                    <div key={index}>
                      <h1>     </h1>
                      {/* {JSON.stringify(useEvents)} */}
                      {
                        Object.keys(useEvents).map((key) => {
                          const shareUrl = `/${userKey}/${key}`
                          return (
                            <div key={key}>
                              <div className='row'>
                                <div className='col-lg-12 d-flex justify-content-center align-items-center'>
                                  <div className=" card border rounded shadow-sm mt-3 " style={{ maxWidth: '700px' }}>
                                    <div className="d-flex align-items-center">
                                      <img src={logo} alt="profileImage" className="rounded-circle mx-4" height={60} />
                                      <div>
                                        <h5 className="fw-bold mt-0 mb-0 text-info" style={{ fontSize: '18px' }}>{userKey}</h5>
                                        <p className="fw-bold mt-0 mb-0 text-muted" style={{ fontSize: '16px' }}>Organised By :</p>
                                        <div className='row'>
                                          <div className="col-lg-8">
                                            <h2 className="fw-bold mt-1 mb-0" style={{ fontSize: '18px' }}>   {useEvents[key].organizerName ? useEvents[key].organizerName : ""}</h2>
                                          </div>
                                          <div className="col-lg-4">
                                            <p className="fw-bold mt-1 mb-0 badge bg-info text-white" style={{ fontSize: '14px' }}>{useEvents[key].genre ? useEvents[key].genre : ""}</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="event-banner mt-4 mb-4">
                                      <img src={useEvents[key].imgUrl[0]} alt="event-banner" className="rounded img-fluid" />
                                      <div className='row mt-4'>
                                        <div className="col-lg-8 d-flex justify-content-center align-items-center">
                                          <h2 className="fw-bolder">
                                            {useEvents[key].eventName ? useEvents[key].eventName : ""}
                                          </h2>
                                        </div>
                                        <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                          <p className='fs-5'><span className='text-info fw-bolder fs-4 me-2'>&#x20B9;</span>  {useEvents[key].price ? useEvents[key].price : ``} <a href={shareUrl}> <FontAwesomeIcon icon={faShare} size="lg" className="me-1 text-info"/></a></p>
                                        
                                        </div>
                                      </div>

                                      <h5 className="fs-6">
                                        {useEvents[key].desc ? useEvents[key].desc : ""}
                                      </h5>
                                    </div>

                                    <div className='row'>
                                      <div className="col-lg-4 d-flex justify-content-center ">
                                        <p className='fs-6'> <FontAwesomeIcon icon={faCalendar} size="lg" className="me-1 text-info" />{useEvents[key].date ? useEvents[key].date : ""}</p>
                                      </div>
                                      <div className="col-lg-3 d-flex justify-content-center ">
                                        <p className='fs-6'> <FontAwesomeIcon icon={faClock} size="lg" className="me-1 text-info" /> {useEvents[key].time ? useEvents[key].time : ""}</p>
                                      </div>
                                      <div className="col-lg-5 d-flex justify-content-center ">
                                        <p className='fs-6'>  <FontAwesomeIcon icon={faMapLocation} size="lg" className="me-1 text-info" />  {useEvents[key].location ? useEvents[key].location : ""}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>


                          )

                        })
                      }
                    </div>
                  )
                }

              }
              ) :
              "loading"
          }


        </div>
        <ToastContainer />
      </section>
    </>
  )
}

export default Home


