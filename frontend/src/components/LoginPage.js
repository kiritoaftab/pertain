import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/images/logo.png'
const LoginPage = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the request body
    const requestBody = {
      userEmail: userEmail,
      password: password
    };

    // Make a POST request to the login endpoint
    fetch('http://20.189.113.198:8080/authenticate/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Response data from the API
        if (data.message==='SUCCESS') {
          toast.success('Login successful'); // Display success toast message
          navigate('/evepage'); // Redirect to the protected page
        } else {
          toast.error('Login failed'); // Display error toast message
        }
      })
      .catch(error => {
        toast.error('Invalid Credentials');
      });
  };

  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-4 border shadow-lg p-5 mt-5">
        <div className="text-center">
          <img src={logo} alt="Logo" className="logo" height={100} />
        </div>
        <h2 className="text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userEmail" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="userEmail"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
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
          <div className="text-center">
            <button type="submit" className="btn btn-info fw-bold">Login</button>
          </div>
        </form>
      </div>
    </div>
    <ToastContainer />
  </div>
  );
};

export default LoginPage;
