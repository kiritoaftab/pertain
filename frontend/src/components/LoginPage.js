import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/images/logo.png'

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the request body
    const requestBody = {
      username: username,
      password: password
    };

    const options = {
      method: 'POST',
      url: 'http://localhost:3069/login',
      data: requestBody
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        const res = response.data;
        if (res.code == 200) {
          navigate(`/evepage/${username}`)
        } else if (res.code == 301) {
          toast.warning("User does not exist, please register");
          // navigate('/register')
        } else if (res.code == 401) { }
        toast.error("Password is incorrect, please try again");
      })
      .catch(function (error) {
        console.log(error);
      })
  }



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
              <label htmlFor="username" className="form-label">User Name</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            <div className="text-center mt-3">
              <a className='text-decoration-none text-dark'>Dont have an account?<a href='/register' className='text-info fw-bold m-2'>Register Now</a></a>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
