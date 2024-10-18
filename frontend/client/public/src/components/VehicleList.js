// src/components/VehicleList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VehicleCard from './VehicleCard';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios.get('/api/vehicles')
      .then(response => {
        setVehicles(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Vehicle List</h1>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.id}>
            <VehicleCard vehicle={vehicle} />
          </li>
        ))}
      </ul>
    </div>
  );
};
