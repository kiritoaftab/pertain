import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';  
import LoginPage from './components/LoginPage';
import EventLogin from './components/EventAdd';
import RegisterPage from './components/RegisterPage';
import Explore from './pages/Explore';
import EventDetailOne from './pages/EventDetailOne';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/explore" element={<Explore />} /> 
        <Route exact path="/eventdetailsone" element={<EventDetailOne />} />  
        <Route exact path="/profile/:username" element={<Profile />} /> 
        <Route exact path="/login" element={<LoginPage />} /> 
        <Route exact  path="/register" element={<RegisterPage />} /> 
        <Route exact path="/evepage/:username" element={<EventLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
