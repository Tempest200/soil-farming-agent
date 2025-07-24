// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import { BrowserRouter } from 'react-router-dom';
import Register from './Components/Register';
import AdminDashboard from './Components/AdminDashboard';
import UserDashboard from './Components/UserDashboard';

const App = () => {
  return (
    <BrowserRouter basename="/soil-farming-agent">
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
