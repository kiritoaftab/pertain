
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/images/logo.png'

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the request body
    const requestBody = {
      email: email,
      password: password,
      phone: phone,
      userName: userName
    };

    // Make a POST request to the registration endpoint
    fetch('http://localhost:8080/host/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Response data from the API
        if (data.message==='User Saved Successfully') {
          toast.success('Registration successful'); // Display success toast message
          navigate('/login'); // Redirect to the login page
        } else {
          toast.error('Registration failed'); // Display error toast message
        }
      })
      .catch(error => {
       // console.error('Error:', error);
       console.error("Error")
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6  border shadow-lg p-5 mt-5">
        <div className="text-center">
          <img src={logo} alt="Logo" className="logo" height={100} />
        </div>
          <h2 className="text-center mt-4">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-info">Register</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterPage;
