import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EventAdd = () => {
  const [eventName, setEventName] = useState('');
  const [organizerName, setOrganizerName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [genre, setGenre] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [hostId, setHostId] = useState(''); 

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', imageFile);

    axios.post('http://localhost:8080/event/uploadEventImage', formData)
      .then((response) => {
        const imageUrl = response.data.imageUrl; 
        saveEventDetails(imageUrl);
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
        toast.error('Error uploading image');
      });
  };


  const saveEventDetails = (imageUrl) => {
    const requestBody = {
      eventName: eventName,
      organizerName: organizerName,
      description: description,
      price: price,
      date: date,
      time: time,
      location: location,
      genre: genre,
      imageUrl: imageUrl,
    };

    axios.post('http://localhost:8080/event/save', requestBody)
      .then((response) => {
        const hostId = response.data.hostId;
        console.log('Event saved:', response.data);
        toast.success('Event saved successfully');
        setEventName('');
        setOrganizerName('');
        setDescription('');
        setPrice('');
        setDate('');
        setTime('');
        setLocation('');
        setGenre('');
        setHostId(hostId);
      })
      .catch((error) => {
        console.error('Error saving event:', error);
        toast.error('Error saving event');
      });
  };

  return (
    <>
      <div className="container">


        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <div className="container-fluid">
            <button className="btn btn-primary fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Add Event
              <img src="/Images/plus.png" className="mx-2" alt="" style={{ marginTop: '-7px' }} />
            </button>
          </div>

          {/* Modal add event */}
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header text-center">
                  <h1 className="modal-title fw-bold text-primary" id="exampleModalLabel">
                    Logo
                  </h1>
                  <img src="/Images/creatve connect.png" alt="" height="60px" width="150px" />
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
                        <input type="file" id="image" className="inputfile form-control" onChange={handleImageChange} />
                        <label htmlFor="imageData">
                          <span className="icon"></span>
                          Choose a File
                        </label>
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
                        <button type="button" className="btn btn-secondary" data-bsdismiss="modal">Cancel</button>
                        <button type="submit" className="btn text-light" style={{ backgroundColor: '#1DA1F2' }}>
                          Post Event
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default EventAdd;
