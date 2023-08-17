import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faLocation, faMapLocation, faMapMarker, faTicket, faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import '../assets/style/core.css'
import rectangle44 from '../assets/images/Rectangle 29.png'
import Navbar from '../components/Navbar';

function EventDetailOne() {
    return (
        <>
            <Navbar />
            <div className='container mt-5'>
                <div className="home-section">
                    <div className="row" id="gallery">
                        <div className="col-lg-8">
                            <img
                                className="w-100 img-fluid mb-2"
                                src={rectangle44}
                                alt="Image 1"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                width="700"
                                height="450"
                            />
                        </div>
                        <div className="col">
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <img
                                            className="w-100 img-fluid"
                                            src={rectangle44}
                                            alt="Image 2"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                            width="500"
                                            height="220"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mt-2">
                                        <img
                                            className="w-100 img-fluid"
                                            src={rectangle44}
                                            alt="Image 3"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                            width="500"
                                            height="220"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img src={rectangle44} class="d-block w-100" alt="..." />
                                            </div>
                                            <div class="carousel-item">
                                                <img src={rectangle44} class="d-block w-100" alt="..." />
                                            </div>
                                            <div class="carousel-item">
                                                <img src={rectangle44} class="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                                            data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                                            data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <h1 className="text-dark fw-bold" style={{ fontSize: '64px' }}>
                            Club Meet 2023
                        </h1>
                        <h3 className="text-info mt-1">By YoungMinds Club</h3>
                        <p className="mt-3" style={{ width: '85%' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi beatae ex commodi. Eaque alias, amet in
                            ipsa pariatur harum? Lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi beatae ex commodi. Eaque alias, amet in
                            ipsa pariatur harum? Lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi beatae ex commodi. Eaque alias, amet in
                            ipsa pariatur harum? Lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi beatae ex commodi. Eaque alias, amet in
                            ipsa pariatur harum? LoremLorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi beatae ex commodi. Eaque alias, amet in
                            ipsa pariatur harum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi beatae ex commodi. Eaque alias, amet in
                            ipsa pariatur harum?
                        </p>
                    </div>

                    <div className='row'>
                        <div className='col-lg-6 d-flex justify-content-center align-items-center mt-4'>
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

                        <div className="col-lg-6 mt-4">
                            <h1 className="mx-5"><FontAwesomeIcon icon={faTicket} size="lg" className="me-4 text-info" /><span>&#8377;</span>799</h1>
                            <button className="btn text-dark mx-5 my-3" style={{ backgroundColor: 'white', border: '0.5px solid black' }}>Select Seat</button>

                            <h3 className="mx-5 text-muted">Genre:<br />
                                Meetups & Conferences</h3>

                        </div>

                    </div>
                    <hr className='mt-4 mb-4 text-dark fw-bolder' />
                </div>
            </div>
        </>
    )
}

export default EventDetailOne