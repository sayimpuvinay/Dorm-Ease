import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom';
import UserDashboard from './User_Dashboard/UserDashboard';
import ManagerDashboard from './Manager_Dashboard/ManagerDashboard';
import MainLogo from './Dorm-Logos/1.png';
import Signup from './Signup_page/Signup';
import './App.css';
import { AuthProvider } from './Config/AuthContext';

const SplashScreen = ({ onUserChoose }) => {
  return (
    <AuthProvider>
      <div className='d-flex flex-column justify-content-center align-items-center text-center vh-100 w-100'>
        <p>Define youselves:</p>
        <div className='d-flex flex-wrap justify-content-evenly w-50 mt-5'>
          <button className='Question-button m-2' onClick={() => onUserChoose('user')}>User</button>
          <button className='Question-button m-2' onClick={() => onUserChoose('manager')}>Manager</button>
        </div>
      </div>
    </AuthProvider>
  );
};


function App() {
  const [userRole, setUserRole] = useState(null);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLogo(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleUserChoose = (role) => {
    setUserRole(role);
  };

  return (
    <Router>
      <div className="App">
        {showLogo ? (
          <div className="logo-container">
            <img src={MainLogo} alt="Logo" className="logo" />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<SplashScreen onUserChoose={handleUserChoose} />} />
            {userRole === 'user' && <Route path="/signup" element={<Signup />} />}
            {userRole === 'manager' && <Route path="/signup" element={<Signup />} />}
          </Routes>
        )}
        {userRole && <Navigate to="/signup" />}
      </div>
    </Router>
  );
}

export default App;
