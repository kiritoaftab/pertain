import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare, faComment, faPoll, faTentArrowLeftRight } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faClock, faLocation, faMapLocation, faMapMarker, faTicket, faTicketAlt, fa } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/images/logo.png"
import Nav from '../components/Nav';

function Share() {
    const [event, setEvent] = useState();
    const { username, eventId } = useParams();
    const shareUrl = `${window.location.origin}/${username}/${eventId}`;
    const whatsappShareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`;

    console.log(`${username} -- ${eventId}`)
    async function getData() {
        try {
            let res = await axios({
                url: 'http://localhost:3069/getPost',
                method: 'GET',
                params: {
                    "username": username,
                    "postId": eventId
                },
                timeout: 8000,
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            console.log(res.data)
            return res.data
        } catch (error) {
            console.error(error);
        }
    }

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            alert('Copied to clipboard');
        } catch (error) {
            console.error('Error copying to clipboard:', error);
        }
    };

    useEffect(() => {
        getData().then(res => {
            setEvent(res);
            console.log("This is my post in share page" + event)
        });
    }, []);

    return (
        <>

            <Nav />
            <div className='row justify-content-center my-5'>
                <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                    <div className=" card border rounded shadow-sm mt-3 " style={{ maxWidth: '700px' }}>
                        <div className="d-flex align-items-center">
                            <img src={logo} alt="profileImage" className="rounded-circle mx-4" height={60} />
                            <div>
                            <a className='text-decoration-none' href={`/profile/${username}`}>
                                <h5 className="fw-bold mt-0 mb-0 text-info" style={{ fontSize: '18px' }}>{username}</h5>
                            </a>
                                <p className="fw-bold mt-2 mb-0 text-muted" style={{ fontSize: '16px' }}>Organised By :</p>
                                <div className='row'>
                                    <div className="col-lg-8">
                                        <h2 className="fw-bold mt-1 mb-0" style={{ fontSize: '18px' }}> {event?.data.organizerName ? event?.data.organizerName : ''}</h2>
                                    </div>
                                    <div className="col-lg-4">
                                        <p className="fw-bold mt-1 mb-0 badge bg-info text-white" style={{ fontSize: '14px' }}>{event?.data.genre ? event.data.genre : ''}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="event-banner mt-4 mb-4">
                            <img src={event?.data.imgUrl ? event.data.imgUrl : ''} alt="event-banner" className="rounded img-fluid" />
                            <div className='row mt-4'>
                                <div className="col-lg-8 d-flex justify-content-center align-items-center">
                                    <h2 className="fw-bolder">
                                        {event?.data.eventName ? event.data.eventName : ''}
                                    </h2>
                                </div>
                                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                                    <p className='fs-5'><span className='text-info fw-bolder fs-4 me-2'>&#x20B9;</span> {event?.data.price ? event.data.price : ''}</p>
                                </div>
                            </div>

                            <h5 className="fs-6 text-center">
                                {event?.data.desc ? event.data.desc : ''}
                            </h5>
                        </div>
                        <div className='row'>
                            <div className="col-lg-4 d-flex justify-content-center ">
                                <p className='fs-6'> <FontAwesomeIcon icon={faCalendar} size="lg" className="me-1 text-info" />{event?.data.time ? event.data.time : ''}</p>
                            </div>
                            <div className="col-lg-3 d-flex justify-content-center ">
                                <p className='fs-6'> <FontAwesomeIcon icon={faClock} size="lg" className="me-1 text-info" />{event?.data.date ? event.data.date : ''}</p>
                            </div>
                            <div className="col-lg-5 d-flex justify-content-center ">
                                <p className='fs-6'>  <FontAwesomeIcon icon={faMapLocation} size="lg" className="me-1 text-info" />{event?.data.location ? event.data.location : ''}</p>
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className="col-lg-12 d-flex justify-content-around">
                                <p className='fw-bold fs-5 text-center'>Sharing  events keeps you Breezy.</p>
                                <a className='fs-6 btn btn-outline-success px-3' style={{ cursor: 'pointer' }} href={whatsappShareLink}>Whatsapp Share</a>
                                <a className='fs-6 btn btn-outline-info ' style={{ cursor: 'pointer' }} onClick={copyToClipboard}>Copy to clipboard</a>
                            </div>  
                           
                        </div>
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default Share