
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the request body
    const requestBody = {
      email: email,
      password: password,
      phone: phone,
      name: name,
      username: userName
    };

    const options = {
      method: 'POST',
      url: 'http://localhost:3069/register',
      data: requestBody
    };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          const res = response.data;
          if(res.code == 200){
            toast.success('Login successful');
            navigate('/login')
          } else if(res.code ==500){
            toast.error('Something went wrong');
          }else if(res.code == 301){
            toast.warning('Username Already Exists, Please Login ');
          }else {
            toast.info('Server Down');
          }
        })
        .catch(function (error) {
          console.error(error);
        })
 
  }
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
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
