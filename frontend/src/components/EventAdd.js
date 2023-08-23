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


  const { username } = useParams()

  const imagesListRef = ref(storage, "images/");


  const uploadFile = (e) => {
    e.preventDefault();
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
    console.log(imageUrls)
  };

  // useEffect(() => {
  //   listAll(imagesListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageUrls((prev) => [...prev, url]);
  //       });
  //     });
  //   });

  // }, []);



  const handleEventSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      eventName: eventName,
      organizerName: organizerName,
      desc: description,
      price: price,
      date: date,
      time: time,
      location: location,
      genre: genre,
      imgUrl: imageUrls,
      username: username
    };

    const options = {
      method: 'POST',
      url: 'http://localhost:3069/addEvent',
      data: requestBody
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data + " called here");
        setImageUrls([])
        const res = response.data;
        navigate(`/profile/${username}`)
      })
      .catch(function (error) {
        console.error(error);
      })
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
                type="text"
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
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                />
                <button onClick={uploadFile}> Upload Image</button>
                {/* {imageUrls.map((url, index) => (
                  <img key={index} src={url} alt={`Image ${index}`} />
                ))} */}
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

          {/* <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <div className="container-fluid">
            <button className="btn btn-primary fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Add Event
            </button>
            <a className="btn btn-primary fw-bold" href="/profile/:username">
              Home
            </a>
          </div> */}

          {/* Modal add event */}
          {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header text-center">
                  <h3 className="modal-title fw-bold text-info" id="exampleModalLabel">
                   Add Event
                  </h3>
                  <img src={logo} alt="" height="60px" width="60px" />
                </div>
                <div className="modal-body">
                  <div className="container event-box">
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
                        />
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
                        />
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
                        ></textarea>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="price" className="form-label">
                          Pricing
                        </label>
                        <input
                          type="text"
                          name="Event-price"
                          id="price"
                          className="form-control"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
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
                        />
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
                        />
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
                        />
                      </div>

                      <hr />

                      <h4 className="text-center">Media</h4>
                      <div className="file-input mb-3">
                        <input
                          type="file"
                          onChange={(event) => {
                            setImageUpload(event.target.files[0]);
                          }}
                        />
                        <button onClick={uploadFile}> Upload Image</button>
                          {imageUrls.map((url, index) => (
                          <img key={index} src={url} alt={`Image ${index}`} />
                        ))}  
                      </div>

                      <hr />

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
                        />
                      </div>

                      <div className="my-5"></div>

                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" className="btn text-light" style={{ backgroundColor: '#1DA1F2' }}>
                          Post Event
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <ToastContainer />
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default EventAdd;
