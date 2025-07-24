// src/Components/AdminDashboard.js
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { IoMdExit } from "react-icons/io";
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [soil, setSoil] = useState({ type: '', description: '', crops: '' });
  const [distributor, setDistributor] = useState({ name: '', crops: '', region: '', contact: '' });

  const handleSoilSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'soilTypes'), soil);
      alert('Soil details added');
      setSoil({ type: '', description: '', crops: '' });
    } catch (error) {
      alert('Error adding soil details');
    }
  };
const navigate = useNavigate();

const handleLogout = async () => {
  try {
    await signOut(auth);
    navigate('/login');
  } catch (error) {
    alert('Logout failed: ' + error.message);
  }
};
  const handleDistributorSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'distributors'), distributor);
      alert('Distributor details added');
      setDistributor({ name: '', crops: '', region: '', contact: '' });
    } catch (error) {
      alert('Error adding distributor details');
    }
  };

  return (
    <div className="admin-dashboard">
        <div className="admin-header">
      <h2>Admin Dashboard</h2>
      <button onClick={handleLogout} className="logout1"><IoMdExit  className='exit-logo'/>Logout</button>
        </div>
      <form className="admin-form" onSubmit={handleSoilSubmit}>
        <h3>Post Soil Details</h3>
        <input type="text" placeholder="Soil Type" value={soil.type} onChange={(e) => setSoil({ ...soil, type: e.target.value })} required />
        <input type="text" placeholder="Description" value={soil.description} onChange={(e) => setSoil({ ...soil, description: e.target.value })} required />
        <input type="text" placeholder="Suitable Crops" value={soil.crops} onChange={(e) => setSoil({ ...soil, crops: e.target.value })} required />
        <button type="submit">Add Soil</button>
      </form>

      <form className="admin-form" onSubmit={handleDistributorSubmit}>
        <h3>Post Distributor Details</h3>
        <input type="text" placeholder="Distributor Name" value={distributor.name} onChange={(e) => setDistributor({ ...distributor, name: e.target.value })} required />
        <input type="text" placeholder="Crops" value={distributor.crops} onChange={(e) => setDistributor({ ...distributor, crops: e.target.value })} required />
        <input type="text" placeholder="Region" value={distributor.region} onChange={(e) => setDistributor({ ...distributor, region: e.target.value })} required />
        <input type="text" placeholder="Contact Info" value={distributor.contact} onChange={(e) => setDistributor({ ...distributor, contact: e.target.value })} required />
        <button type="submit">Add Distributor</button>
      </form>
    </div>
  );
};

export default AdminDashboard;
