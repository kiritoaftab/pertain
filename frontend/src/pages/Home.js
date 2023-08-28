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
            Array.isArray(madarchodState) ?  madarchodState.map((event, index) => {


              const eventDataKey = Object.keys(event)[0];
              console.log(`throw s error here ${eventDataKey}`)
              
              if(eventDataKey){
                const eventDataObj = event[eventDataKey];
              
                return (
                  <div key={eventDataKey} className="event-card">
                    <div className='row'>
                    <div className='col-lg-12 d-flex justify-content-center align-items-center'>
                      <div className=" card border rounded shadow-sm mt-3 " style={{ maxWidth: '700px' }}>
                        <div className="d-flex align-items-center">
                          <img src={logo} alt="profileImage" className="rounded-circle mx-4" height={60} />
                          <div>
                           
                            <p className="fw-bold mt-2 mb-0 text-muted" style={{ fontSize: '16px' }}>Organised By :</p>
                            <div className='row'>
                              <div className="col-lg-8">
                                <h2 className="fw-bold mt-1 mb-0" style={{ fontSize: '18px' }}>   {eventDataObj.organizerName? eventDataObj.organizerName : ``}</h2>
                              </div>
                              <div className="col-lg-4">
                                <p className="fw-bold mt-1 mb-0 badge bg-info text-white" style={{ fontSize: '14px' }}>{eventDataObj.genre ? eventDataObj.genre : ``}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="event-banner mt-4 mb-4">
                          <img src={eventDataObj.imgUrl? eventDataObj.imgUrl : ``}alt="event-banner" className="rounded img-fluid" />
                          <div className='row mt-4'>
                            <div className="col-lg-8 d-flex justify-content-center align-items-center">
                              <h2 className="fw-bolder">
                              {eventDataObj.eventName ? eventDataObj.eventName : ``}
                              </h2>
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                              <p className='fs-5'><span className='text-info fw-bolder fs-4 me-2'>&#x20B9;</span>  {eventDataObj.price ? eventDataObj.price : ``}</p>
                            </div>
                          </div>

                          <h5 className="fs-6">
                          {eventDataObj.desc ? eventDataObj.desc : `` }
                          </h5>
                        </div>

                        <div className='row'>
                          <div className="col-lg-4 d-flex justify-content-center ">
                            <p className='fs-6'> <FontAwesomeIcon icon={faCalendar} size="lg" className="me-1 text-info" />{event.date}</p>
                          </div>
                          <div className="col-lg-3 d-flex justify-content-center ">
                            <p className='fs-6'> <FontAwesomeIcon icon={faClock} size="lg" className="me-1 text-info" /> {eventDataObj.time ? eventDataObj.time : `` }</p>
                          </div>
                          <div className="col-lg-5 d-flex justify-content-center ">
                            <p className='fs-6'>  <FontAwesomeIcon icon={faMapLocation} size="lg" className="me-1 text-info" />  {eventDataObj.location? eventDataObj.location: ``}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                   
                  </div>
                );
              }
             
            }): `no`
          }          
          
          {/* <h1 className="text-info fw-bolder name mb-4 mt-5">Happening Today</h1>
          <div className='row'>
            <div className='col-lg-4'>
              <div className="happnCard   card border rounded shadow-sm mt-3 mb-3" style={{ maxWidth: '400px' }}>
                <div className="d-flex align-items-center">
                  <img src={proImg} alt="profileImage" className="rounded-circle mx-4" height={100} />
                  <div>
                    <h4 className="fw-bold fs-5 fs-lg-4">Luminary Fest</h4>
                    <h5 className="fs-6">
                      Lorem Ipsum is not simply random text.
                    </h5>
                  </div>
                </div>
                <div className="event-banner d-flex justify-content-center align-items-center mt-4 mb-4">
                  <img src={demoImg} alt="event-banner" className="rounded img-fluid" />
                </div>
                <div className="row">
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faHeart} className='text-danger' size="2x" />
                  </div>
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faComment} className='text-secondary' size="2x" />
                  </div>
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faShare} className='text-secondary' size="2x" />
                  </div>
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faPoll} className='text-secondary' size="2x" />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className=" happnCard card border rounded shadow-sm mt-3 mb-3" style={{ maxWidth: '400px' }}>
                <div className="d-flex align-items-center">
                  <img src={proImg} alt="profileImage" className="rounded-circle mx-4" height={100} />
                  <div>
                    <h4 className="fw-bold fs-5 fs-lg-4">Luminary Fest</h4>
                    <h5 className="fs-6">
                      Lorem Ipsum is not simply random text.
                    </h5>
                  </div>
                </div>
                <div className="event-banner d-flex justify-content-center align-items-center mt-4 mb-4">
                  <img src={demoImg} alt="event-banner" className="rounded img-fluid" />
                </div>
                <div className="row">
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faHeart} className='text-danger' size="2x" />
                  </div>
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faComment} className='text-secondary' size="2x" />
                  </div>
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faShare} className='text-secondary' size="2x" />
                  </div>
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faPoll} className='text-secondary' size="2x" />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="happnCard card border rounded shadow-sm mt-3 mb-3" style={{ maxWidth: '400px' }}>
                <div className="d-flex align-items-center">
                  <img src={proImg} alt="profileImage" className="rounded-circle mx-4" height={100} />
                  <div>
                    <h4 className="fw-bold fs-5 fs-lg-4">Luminary Fest</h4>
                    <h5 className="fs-6">
                      Lorem Ipsum is not simply random text.
                    </h5>
                  </div>
                </div>
                <div className="event-banner d-flex justify-content-center align-items-center mt-4 mb-4">
                  <img src={demoImg} alt="event-banner" className="rounded img-fluid" />
                </div>
                <div className="row">
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faHeart} className='text-danger' size="2x" />
                  </div>
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faComment} className='text-secondary' size="2x" />
                  </div>
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faShare} className='text-secondary' size="2x" />
                  </div>
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faPoll} className='text-secondary' size="2x" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}


          {/* {events.map(event => {
            return (
              <>
                <div>
                  <div className='row'>
                    <div className='col-lg-12 d-flex justify-content-center align-items-center'>
                      <div className=" card border rounded shadow-sm mt-3 " style={{ maxWidth: '600px' }}>

                        <div className="d-flex align-items-center">
                          <img src={proImg} alt="profileImage" className="rounded-circle mx-4" height={100} />
                          <div>
                            
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
          })} */}
        </div>
      </section>

      <section>
        {/* <div className='container px-5'>
          <h1 className="text-info fw-bolder mt-5 mb-3 p-0 d-flex justify-content-center align-items-center">"Indulge in more events, discover your passion."</h1>
          <div className='row'>
            <div className='col-lg-12 d-flex justify-content-center align-items-center'>
              <div className=" card border rounded shadow-sm mt-3 mb-3" style={{ maxWidth: '600px' }}>
                <div className="d-flex align-items-center">
                  <img src={proImg} alt="profileImage" className="rounded-circle mx-4" height={100} />
                  <div>
                    <h4 className="fw-bold fs-5 fs-lg-4">Luminary Fest</h4>
                    <h5 className="fs-6">
                      Lorem Ipsum is not simply random text.
                    </h5>
                  </div>
                </div>
                <div className="event-banner d-flex justify-content-center align-items-center mt-4 mb-4">
                  <img src={demoImg} alt="event-banner" className="rounded img-fluid" />
                </div>
                <div className='col-lg-12 mb-4 d-flex justify-content-center align-items-center'>
                  <div className="border rounded p-4">
                    <div className="d-flex">
                      <FontAwesomeIcon icon={faCalendar} size="lg" className="me-4 text-info" /><p className='fs-5'>5 June 2023</p>
                    </div>
                    <div className="d-flex">
                      <FontAwesomeIcon icon={faClock} size="lg" className="me-4 text-info" /><p className='fs-5'>12:30pm onwards</p>
                    </div>
                    <div className="d-flex">
                      <FontAwesomeIcon icon={faMapLocation} size="lg" className="me-4 text-info" /><p className='fs-5'>Cubix, Hubli</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faHeart} className='text-danger' size="2x" />
                  </div>
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faComment} className='text-secondary' size="2x" />
                  </div>
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faShare} className='text-secondary' size="2x" />
                  </div>
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faPoll} className='text-secondary' size="2x" />
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-12 d-flex justify-content-center align-items-center'>
              <div className=" card border rounded shadow-sm mt-3 mb-3" style={{ maxWidth: '600px' }}>
                <div className="d-flex align-items-center">
                  <img src={proImg} alt="profileImage" className="rounded-circle mx-4" height={100} />
                  <div>
                    <h4 className="fw-bold fs-5 fs-lg-4">Luminary Fest</h4>
                    <h5 className="fs-6">
                      Lorem Ipsum is not simply random text.
                    </h5>
                  </div>
                </div>
                <div className="event-banner d-flex justify-content-center align-items-center mt-4 mb-4">
                  <img src={demoImg} alt="event-banner" className="rounded img-fluid" />
                </div>
                <div className='col-lg-12 mb-4 d-flex justify-content-center align-items-center'>
                  <div className="border rounded p-4">
                    <div className="d-flex">
                      <FontAwesomeIcon icon={faCalendar} size="lg" className="me-4 text-info" /><p className='fs-5'>5 June 2023</p>
                    </div>
                    <div className="d-flex">
                      <FontAwesomeIcon icon={faClock} size="lg" className="me-4 text-info" /><p className='fs-5'>12:30pm onwards</p>
                    </div>
                    <div className="d-flex">
                      <FontAwesomeIcon icon={faMapLocation} size="lg" className="me-4 text-info" /><p className='fs-5'>Cubix, Hubli</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faHeart} className='text-danger' size="2x" />
                  </div>
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faComment} className='text-secondary' size="2x" />
                  </div>
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faShare} className='text-secondary' size="2x" />
                  </div>
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faPoll} className='text-secondary' size="2x" />
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-12 d-flex justify-content-center align-items-center'>
              <div className=" card border rounded shadow-sm mt-3 mb-3" style={{ maxWidth: '600px' }}>
                <div className="d-flex align-items-center">
                  <img src={proImg} alt="profileImage" className="rounded-circle mx-4" height={100} />
                  <div>
                    <h4 className="fw-bold fs-5 fs-lg-4">Luminary Fest</h4>
                    <h5 className="fs-6">
                      Lorem Ipsum is not simply random text.
                    </h5>
                  </div>
                </div>
                <div className="event-banner d-flex justify-content-center align-items-center mt-4 mb-4">
                  <img src={demoImg} alt="event-banner" className="rounded img-fluid" />
                </div>
                <div className='col-lg-12 mb-4 d-flex justify-content-center align-items-center'>
                  <div className="border rounded p-4">
                    <div className="d-flex">
                      <FontAwesomeIcon icon={faCalendar} size="lg" className="me-4 text-info" /><p className='fs-5'>5 June 2023</p>
                    </div>
                    <div className="d-flex">
                      <FontAwesomeIcon icon={faClock} size="lg" className="me-4 text-info" /><p className='fs-5'>12:30pm onwards</p>
                    </div>
                    <div className="d-flex">
                      <FontAwesomeIcon icon={faMapLocation} size="lg" className="me-4 text-info" /><p className='fs-5'>Cubix, Hubli</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faHeart} className='text-danger' size="2x" />
                  </div>
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faComment} className='text-secondary' size="2x" />
                  </div>
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faShare} className='text-secondary' size="2x" />
                  </div>
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faPoll} className='text-secondary' size="2x" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        {/* <div className="d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <div className="col d-flex justify-content-center">
                <div className="card border rounded shadow-sm mt-3 mb-3" style={{ maxWidth: '400px' }}>
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="d-flex align-items-center">
                        <img src={proImg} alt="profileImage" className="rounded-circle mx-4" height={100} />
                        <div>
                          <h4 className="fw-bold fs-5 fs-lg-4">Luminary Fest</h4>
                          <h5 className="fs-6 fs-lg-5">
                            Lorem Ipsum is not simply random text.
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center mt-3 mt-lg-0">
                      <h5 className="fs-6">6 July, 2023</h5>
                    </div>
                  </div>
                  <div className="event-banner d-flex justify-content-center align-items-center mt-4 mb-4">
                    <img src={demoImg} alt="event-banner" className="rounded img-fluid" />
                  </div>
                  <div className="p-2 d-flex flex-column align-items-center align-lg-items-start">
                    <div className="me-4 mb-3 mb-lg-0">
                      <h5 className="text-muted fs-3">Hosted By</h5>
                      <p className="fs-4 fw-bolder">John Doe</p>
                    </div>
                    <p className="fs-6">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                      industry's standard
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-3 d-flex justify-content-center align-items-center">
                      <FontAwesomeIcon icon={faHeart} className='text-danger' size="2x" />
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center">
                      <FontAwesomeIcon icon={faComment} className='text-secondary' size="2x" />
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center">
                      <FontAwesomeIcon icon={faShare} className='text-secondary' size="2x" />
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center">
                      <FontAwesomeIcon icon={faPoll} className='text-secondary' size="2x" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col d-flex justify-content-center">
                <div className="card border rounded shadow-sm mt-3 mb-3" style={{ maxWidth: '800px' }}>
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="d-flex align-items-center">
                        <img src={proImg} alt="profileImage" className="rounded-circle mx-4" height={100} />
                        <div>
                          <h4 className="fw-bold fs-5 fs-lg-4">Luminary Fest</h4>
                          <h5 className="fs-6 fs-lg-5">
                            Lorem Ipsum is not simply random text.
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center mt-3 mt-lg-0">
                      <h5 className="fs-6">6 July, 2023</h5>
                    </div>
                  </div>
                  <div className="event-banner d-flex justify-content-center align-items-center mt-4 mb-4">
                    <img src={demoImg} alt="event-banner" className="rounded img-fluid" />
                  </div>
                  <div className="p-2 d-flex flex-column align-items-center align-lg-items-start">
                    <div className="me-4 mb-3 mb-lg-0">
                      <h5 className="text-muted fs-3">Hosted By</h5>
                      <p className="fs-4 fw-bolder">John Doe</p>
                    </div>
                    <p className="fs-6">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                      industry's standard
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-3 d-flex justify-content-center align-items-center">
                      <FontAwesomeIcon icon={faHeart} className='text-danger' size="2x" />
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center">
                      <FontAwesomeIcon icon={faComment} className='text-secondary' size="2x" />
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center">
                      <FontAwesomeIcon icon={faShare} className='text-secondary' size="2x" />
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center">
                      <FontAwesomeIcon icon={faPoll} className='text-secondary' size="2x" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="row">
              <div className="col d-flex justify-content-center">
                <div className="card border rounded shadow-sm mt-3 mb-3" style={{ maxWidth: '800px' }}>
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="d-flex align-items-center">
                        <img src={proImg} alt="profileImage" className="rounded-circle mx-4" height={100} />
                        <div>
                          <h4 className="fw-bold fs-5 fs-lg-4">Luminary Fest</h4>
                          <h5 className="fs-6 fs-lg-5">
                            Lorem Ipsum is not simply random text.
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center mt-3 mt-lg-0">
                      <h5 className="fs-6">6 July, 2023</h5>
                    </div>
                  </div>
                  <div className="event-banner d-flex justify-content-center align-items-center mt-4 mb-4">
                    <img src={demoImg} alt="event-banner" className="rounded img-fluid" />
                  </div>
                  <div className="p-2 d-flex flex-column align-items-center align-lg-items-start">
                    <div className="me-4 mb-3 mb-lg-0">
                      <h5 className="text-muted fs-3">Hosted By</h5>
                      <p className="fs-4 fw-bolder">John Doe</p>
                    </div>
                    <p className="fs-6">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                      industry's standard
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-3 d-flex justify-content-center align-items-center">
                      <FontAwesomeIcon icon={faHeart} className='text-danger' size="2x" />
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center">
                      <FontAwesomeIcon icon={faComment} className='text-secondary' size="2x" />
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center">
                      <FontAwesomeIcon icon={faShare} className='text-secondary' size="2x" />
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center">
                      <FontAwesomeIcon icon={faPoll} className='text-secondary' size="2x" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div> */}
        {/* </div> */}
      </section>

      {/* <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="container-fluid">
          <button className="btn btn-primary fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add Event
            <img src="/Images/plus.png" className="mx-2" alt="" style={{ marginTop: '-7px' }} />
          </button>
        </div> */}

      {/* Modal add event */}
      {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h1 className="modal-title fw-bold text-primary" id="exampleModalLabel">Logo</h1>
                <img src="/Images/creatve connect.png" alt="" height="60px" width="150px" />
              </div>
              <div className="modal-body">
                <div className="container event-box">
                  <h3 className="text-center">Do yo have a account?</h3>
                </div>
                <div className='d-flex justify-content-center align-items-center '>
                  <a className='btn btn-primary mx-3' href='/login'>Login</a>
                  <a className='btn btn-secondary' href='/register'>Register</a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      <ToastContainer />
    </>
  )
}

export default Home


