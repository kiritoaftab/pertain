import React from 'react'
import '../assets/style/core.css'
import proImg from "../assets/images/proImg.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import rectangle44 from '../assets/images/Rectangle 29.png'

function Profile() {
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
                        <h1>YoungMinds</h1>
                        <p className="text-info">Lorem ipsum dolor sit</p>
                        <a href="#" className="link-dark">
                            <p>Edit profile</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container">
                {/* Tabs navs */}
                <ul className="nav nav-tabs mb-3 " id="ex1" role="tablist">
                    <li className="nav-item mb-3" role="presentation">
                        <a className="btn btn-outline-info active me-4" id="ex1-tab-1" data-bs-toggle="tab" href="#ex1-tabs-1" role="tab" aria-controls="ex1-tabs-1" aria-selected="true" style={{ height: '77px', width: '370px' }}>
                            <span style={{ position: 'relative', top: '19px' }}>Edit Events</span>
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
                    {/* Edit Events Tab */}
                    <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="">
                                    <div className="d-flex">
                                        <img src={rectangle44} alt="" className="img-fluid" />
                                    </div>
                                    <div style={{ float: 'right', position: 'relative', top: '10px' }}>
                                        <a href="#"><FontAwesomeIcon icon={faTrashAlt} /></a>
                                    </div>
                                    <h1 className="fw-bold my-2">Club Meet</h1>
                                    <p>It is a long established fact that a reader will be distracted by the readable content</p>
                                    <button className="btn btn-info text-white fw-bold">Edit Event</button>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="">
                                    <div className="d-flex">
                                        <img src={rectangle44} alt="" className="img-fluid" />
                                    </div>
                                    <div style={{ float: 'right', position: 'relative', top: '10px' }}>
                                        <a href="#"><FontAwesomeIcon icon={faTrashAlt} /></a>
                                    </div>
                                    <h1 className="fw-bold my-2">Club Meet</h1>
                                    <p>It is a long established fact that a reader will be distracted by the readable content</p>
                                    <button className="btn btn-info text-white fw-bold">Edit Event</button>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="">
                                    <div className="d-flex">
                                        <img src={rectangle44} alt="" className="img-fluid" />
                                    </div>
                                    <div style={{ float: 'right', position: 'relative', top: '10px' }}>
                                        <a href="#"><FontAwesomeIcon icon={faTrashAlt} /></a>
                                    </div>
                                    <h1 className="fw-bold my-2">Club Meet</h1>
                                    <p>It is a long established fact that a reader will be distracted by the readable content</p>
                                    <button className="btn btn-info text-white fw-bold">Edit Event</button>
                                </div>
                            </div>
                        </div>
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
                </div>
                {/* Tabs content Ended */}
            </div>


        </>
    )
}

export default Profile