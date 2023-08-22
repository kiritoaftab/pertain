import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare, faComment, faPoll } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faClock, faLocation, faMapLocation, faMapMarker, faTicket, faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import proImg from "../assets/images/proImg.jpg"
import demoImg from "../assets/images/Rectangle 48.png"
import HomeCarousel from '../components/HomeCarousel';
const Home = ({ isOpen }) => {

  return (
    <>
      <Navbar />
      <section>
        <div className='container px-5'>
          <h1 className="text-info fw-bolder name mb-4 mt-5">Happening Today</h1>
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
          </div>
        </div>

      </section>

      <section>
        <div className='container px-5'>
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
          </div>

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
        </div>
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


