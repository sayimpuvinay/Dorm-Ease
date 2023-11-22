import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Signup from './Authentication/Signup';
import Login from './Authentication/Login';
import UserDashboard from './User_Dashboard/UserDashboard';
import WelcomePage from './Authentication/WelcomePage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path='/userdashboard' element={<UserDashboard />} />
    </Routes>
  </Router>
);

export default App;
