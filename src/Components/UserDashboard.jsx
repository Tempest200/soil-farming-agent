// src/Components/UserDashboard.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './UserDashboard.css';

const UserDashboard = () => {
  const [soilData, setSoilData] = useState([]);
  const [distributors, setDistributors] = useState([]);

  const navigate = useNavigate();

const handleLogout = async () => {
  try {
    await signOut(auth);
    navigate('/login');
  } catch (error) {
    alert('Logout failed: ' + error.message);
  }
};

  useEffect(() => {
    const fetchSoilData = async () => {
      const querySnapshot = await getDocs(collection(db, 'soilTypes'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSoilData(data);
    };

    const fetchDistributors = async () => {
      const querySnapshot = await getDocs(collection(db, 'distributors'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDistributors(data);
    };

    fetchSoilData();
    fetchDistributors();
  }, []);

  return (
    <div>
      <div className="user-dashboard2">
          <h2>Soil Farming </h2>
        <button onClick={handleLogout} className="logout2">Logout</button>
      </div>
      <div className="user-dashboard">
          <div className='user-header'> 
        <h2>User Dashboard</h2>
          </div>

        <section className="section">
          <h3><u>  Soil Details   </u></h3>
          <ul>
            {soilData.map((soil) => (
              <li key={soil.id}>
                <t><b><strong>{soil.type}:-</strong> </b></t>
                    <ul>
                    <p>{soil.description} </p>
                    </ul> 
                    <b> Crops: </b>( {soil.crops})
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h3><u> Distributor Details</u></h3>
          <ul>
            {distributors.map((d) => (
              <li key={d.id}>
                <strong>{d.name}</strong> - {d.crops} (Region: {d.region}, Contact: {d.contact})
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default UserDashboard;
