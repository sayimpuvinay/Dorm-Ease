// WelcomePage.js
import React from 'react';
import MainLogo from '../Dorm-Logos/5.png';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
  return (
    <div className='d-flex align-items-center flex-sm-column flex-md-column flex-lg-row flex-xl-row justify-content-center vh-100 welcome-container'>
      <div className='text-center w-50 w-sm-100 vh-100 welcome-img-div d-flex flex-column align-items-center justify-content-center img-div'>
        <img className="welcome-img" src={MainLogo} alt="DormEase Logo" />
        <p className='welcome-text'>Please select with the following --{'>'} </p>
      </div>
      <div className='d-flex flex-column justify-content-center w-50'>
        <div className="button-container">
          <Link to="/signup" className='entry-links'>
            <button className='entry-buttons'>Signup</button>
          </Link>
        </div>
        <div className="button-container">
          <Link to="/login" className='entry-links'>
            <button className='entry-buttons'>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
