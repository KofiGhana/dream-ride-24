// src/components/VehicleDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VehicleDetails = ({ match }) => {
  const [vehicle, setVehicle] = useState({});

  useEffect(() => {
    axios.get(`/api/vehicles/${match.params.id}`)
      .then(response => {
        setVehicle(response.data);
      })
      .catch(error => console.error(error));
  }, [match.params.id]);

  return (
    <div>
      <h2>{vehicle.model}</h2>
      <p>{vehicle.description}</p>
      <p>Price: {vehicle.price}</p>
    </div>
  );
};
