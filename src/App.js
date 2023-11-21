import React from 'react';
import MainLogo from './Dorm-Logos/5.png';
import './App.css';
import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Signup from './Authentication/Signup';
import Login from './Authentication/Login';
import UserDashboard from './User_Dashboard/UserDashboard';

const Home = () => (
  <div className='d-flex align-items-center justify-content-center vh-100'>
    <div className='text-center w-50 vh-100 welcome-img-div align-items-center justify-content-center'>
      <img className="welcome-img" src={MainLogo} alt="DormEase Logo" />
      <p className='welcome-text'>Please select with the following --{'>'} </p>
    </div>
    <div className='d-flex flex-column justify-content-center mx-3 w-50'>
      <div className="button-container">
        <Link to="/signup">
          <button className='entry-buttons'>Signup</button>
        </Link>
      </div>
      <div className="button-container">
        <Link to="/login">
          <button className='entry-buttons'>Login</button>
        </Link>
      </div>
    </div>
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path='/userdashboard' element={<UserDashboard />} />
    </Routes>
  </Router>
);

export default App;
