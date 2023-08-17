import React from 'react'
import '../assets/style/core.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare, faComment, faPoll } from '@fortawesome/free-solid-svg-icons';
import explogo from '../assets/images/Exlporelogo.png'
import exp1 from '../assets/images/Rectangle 44.png' 
import exp2 from '../assets/images/Rectangle 43.png' 
import exp3 from '../assets/images/Rectangle 45.png' 
import exp4 from '../assets/images/Rectangle 46.png' 
import proImg from "../assets/images/proImg.jpg"
import demoImg from "../assets/images/Rectangle 48.png"
import Navbar from '../components/Navbar';

function Explore() {
  return (
    <>
    <Navbar />
    <div className="row my-5 d-flex" style={{ width: '100%' }}>
      <div className="col-lg-4 d-flex justify-content-center align-items-center">
        <img src={explogo} alt="" height="110px" width="auto" className="ms-5" />
      </div>
      <div className="col-sm-8">
        <div className="scrollmenu" title="Scroll horizontally to see more options">
          <div className="d-flex flex-nowrap">
            <div className="mx-3">
                <a href='/meetups' className='text-decoration-none'>
              <img src={exp1} alt="" height="141px" width="167px" className="img-fluid rounded" />
              <h5 className="text-center text-dark my-2">Meet Ups</h5>
              </a>
            </div>
            <div className="mx-3">
            <a href='/conference' className='text-decoration-none'>
              <img src={exp2} alt="" height="141px" width="167px" className="img-fluid rounded" />
              <h5 className="text-center text-dark my-2">Conferences</h5>
              </a>
            </div>
            <div className="mx-3">
            <a href='/entertainment' className='text-decoration-none'>
              <img src={exp3} alt="" height="141px" width="167px" className="img-fluid rounded" />
              <h5 className="text-center text-dark my-2">Entertainment</h5>
              </a>
            </div>
            <div className="mx-3">
            <a href='/sports' className='text-decoration-none'>
              <img src={exp4} alt="" height="141px" width="167px" className="img-fluid rounded" />
              <h5 className="text-center text-dark my-2">Sports</h5>
              </a>
            </div>
            <div className="mx-3">
            <a href='/party' className='text-decoration-none'>
              <img src={exp1} alt="" height="141px" width="167px" className="img-fluid rounded" />
              <h5 className="text-center text-dark my-2">Party</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container p-3 d-flex justify-content-center align-items-center">
        <div className="row"> 
            <div className="col d-flex justify-content-center">
              <div className="card border rounded shadow-sm p-5 mt-3 mb-3" style={{ maxWidth: '800px' }}>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="d-flex align-items-center">
                      <img src={proImg} alt="profileImage" className="rounded-circle mx-4" height={100} />
                      <div>
                        <a className="fw-bold fs-5 fs-lg-4 h4 fw-bolder" href='/eventdetailsone'>Luminary Fest</a>
                        <h5 className="fs-6 fs-lg-5">
                          Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
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

          <div className="row">
            <div className="col d-flex justify-content-center">
              <div className="card border rounded shadow-sm p-5 mt-3 mb-3" style={{ maxWidth: '800px' }}>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="d-flex align-items-center">
                      <img src={proImg} alt="profileImage" className="rounded-circle mx-4" height={100} />
                      <div>
                      <a className="fw-bold fs-5 fs-lg-4 h4 fw-bolder" href='/eventdetailsone'> <h4 className="fw-bold fs-5 fs-lg-4">Luminary Fest</h4></a>
                        <h5 className="fs-6 fs-lg-5">
                          Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
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
              <div className="card border rounded shadow-sm p-5 mt-3 mb-3" style={{ maxWidth: '800px' }}>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="d-flex align-items-center">
                      <img src={proImg} alt="profileImage" className="rounded-circle mx-4" height={100} />
                      <div>
                      <a className="fw-bold fs-5 fs-lg-4 h4 fw-bolder" href='/eventdetailsone'>    <h4 className="fw-bold fs-5 fs-lg-4">Luminary Fest</h4> </a>
                        <h5 className="fs-6 fs-lg-5">
                          Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
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

      </div>
    </>
  )
}

export default Explore