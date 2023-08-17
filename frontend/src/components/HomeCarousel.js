import React from 'react';
import '../assets/style/core.css'
import rectangle44 from '../assets/images/Rectangle 29.png'

import rectangle48 from '../assets/images/Rectangle 48.png'

const HomeCarousel = () => {

    return (
        <div className='home-section'>  
            <div className="d-flex mt-5">
                <div className="container">
                <h1 className="text-info fw-bolder name mb-4">Happening Today</h1>
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>


                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={rectangle44} className="d-block w-100" alt="..." height={500} />
                                <div className="carousel-caption ">
                                    <h1 className="text-white fw-bolder">Harmony Fest</h1> 
                                    <a className='btn btn-outline-info text-white fw-bolder'>Know More</a>
                                </div>
                            </div>


                            <div className="carousel-item">
                                <img src={rectangle48} className="d-block w-100" alt="..." height={500} />
                                <div className="carousel-caption ">
                                    <h1 className="text-white fw-bolder">Club Meet 2023</h1> 
                                    <a className='btn btn-outline-info text-white fw-bolder'>Know More</a>
                                </div>
                            </div>


                            <div className="carousel-item">
                                <img src={rectangle44} className="d-block w-100" alt="..." height={500} />
                                <div className="carousel-caption">
                                    <h1 className="text-white fw-bolder">Requery Fest</h1> 
                                    <a className='btn btn-outline-info text-white fw-bolder'>Know More</a>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCarousel;
