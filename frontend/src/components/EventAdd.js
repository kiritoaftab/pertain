import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import logo from "../assets/images/logo.png"
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav';

const EventAdd = () => {
  const navigate = useNavigate();
  const [eventName, setEventName] = useState('');
  const [organizerName, setOrganizerName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [genre, setGenre] = useState('');
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const [imageAdded, setImageAdded] = useState(false)
  const [file, setFile] = useState();

  const { username } = useParams()

  const imagesListRef = ref(storage, "images/");


  const uploadFile = async () => {

    if (imageUpload == null) {
      console.log(`image is null`)
      return null
    }
    const imageRef = ref(storage, `images/${username}/${imageUpload.name + v4()}`);
    // uploadBytes(imageRef, imageUpload).then((snapshot) => {
    //   getDownloadURL(snapshot.ref).then((url) => { 
    //     console.log(url + `url generated`)
    //     setImageUrls(url);
    //     return url
    //   });
    // });
    try {
      const snapshot = await uploadBytes(imageRef, imageUpload);
      const url = await getDownloadURL(snapshot.ref);
      console.log(url + `url generated`);
      setImageUrls(url);
      return url;
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }

  };


  const handleEventSubmit = async (e) => {
    e.preventDefault();
    const url = await uploadFile();
    if(url){
      const requestBody = {
      eventName: eventName,
      organizerName: organizerName,
      desc: description,
      price: price,
      date: date,
      time: time,
      location: location,
      genre: genre,
      imgUrl: url,
      username: username
    };

    try {
      console.log(`Request to add event ${JSON.stringify(requestBody)}`)
      let res = await axios({
        url: "http://localhost:3069/addEvent",
        method: "POST",
        timeout: 8000,
        headers: {
          "Content-Type": "application/json",
        },
        data: requestBody
      });
      navigate(`/profile/${username}`)
      console.log(res.data);
      // return res.data;
    } catch (error) {
      console.log(error)
    }
  }else{
    console.log("Image url is not there")
  }

  };


  return (
    <>
      <Nav />
      <div className="container">
        <h1 className="text-info fw-bolder name mb-4 mt-5 text-center text-decoration-underline">"Create Memorable Moments: Add Your Event!"</h1>
        <div className="form-box p-4 rounded border shadow-sm rounded-lg mt-5 mb-5" style={{ maxWidth: '600px', margin: '0 auto' }}>

          <form onSubmit={handleEventSubmit}>
            <h3 className="text-center fw-bold">Event Details</h3>
            <div className="mb-3">
              <label htmlFor="event-name" className="form-label">
                Event name
              </label>
              <input
                type="text"
                name="event-name"
                id="event-name"
                className="form-control"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                required />
            </div>

            <div className="mb-3">
              <label htmlFor="organizer-name" className="form-label">
                Organizer name
              </label>
              <input
                type="text"
                name="organizer-name"
                id="organizer-name"
                className="form-control"
                value={organizerName}
                onChange={(e) => setOrganizerName(e.target.value)}
                required />
            </div>

            <div className="mb-3">
              <label htmlFor="Description" className="form-label">
                Description
              </label>
              <textarea
                name="Event-Description"
                id="Description"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Pricing
              </label>
              <input
                type="number"
                name="Event-price"
                id="price"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required />
            </div>

            <hr />
            <h4 className="text-center fw-bold">Where &amp; when</h4>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required />
            </div>

            <div className="mb-3">
              <label htmlFor="time" className="form-label">
                Time
              </label>
              <input
                type="time"
                name="time"
                id="time"
                className="form-control"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required />
            </div>

            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Venue / Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className="form-control"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required />
            </div>

            <hr />
            <div className="mb-4">
              <h4 className="text-center fw-bold">Media</h4>
              <div className="file-input mb-3">
                <input
                  type="file"
                  onChange={async (event) => {
                    setImageUpload(event.target.files[0]);
                    setImageAdded(true)
                    setFile(URL.createObjectURL(event.target.files[0]));

                  }}
                />
                <img src={file} />

                {/* <div>  {imageAdded ? <img src={imageUpload ? imageUpload : ``}/>: `please add a image`} </div> */}
              </div>
            </div>

            <hr />

            <div className="mb-4">
              <h4 className="text-center fw-bold">Other Details</h4>
              <div className="mb-3">
                <label htmlFor="Genre" className="form-label">
                  Genre
                </label>
                <input
                  type="text"
                  name="Genre"
                  id="Genre"
                  className="form-control"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  required />
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button type="submit" className="btn text-light" style={{ backgroundColor: '#1DA1F2' }}>
                Post Event
              </button>
            </div>
          </form>


          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default EventAdd;
