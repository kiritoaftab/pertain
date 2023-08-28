import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';  
import LoginPage from './components/LoginPage';
import EventLogin from './components/EventAdd';
import RegisterPage from './components/RegisterPage';
import Explore from './pages/Explore';
import EventDetailOne from './pages/EventDetailOne';
import Profile from './pages/Profile';
import About from './pages/About'
import Share from './pages/Share';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/about" element={<About />} /> 
        <Route exact path="/explore" element={<Explore />} /> 
        <Route exact path="/eventdetailsone" element={<EventDetailOne />} />  
        <Route exact path="/profile/:username" element={<Profile />} /> 
        <Route exact path="/login" element={<LoginPage />} /> 
        <Route exact  path="/register" element={<RegisterPage />} /> 
        <Route exact path="/evepage/:username" element={<EventLogin />} />
        <Route exact path="/:username/:eventId" element={<Share />} />

      </Routes>
    </Router>
  );
}

export default App;
