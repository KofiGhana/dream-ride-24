// src/components/VehicleCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const VehicleCard = ({ vehicle }) => {
  return (
    <div>
      <h2>{vehicle.model}</h2>
      <p>{vehicle.description}</p>
      <Link to={`/vehicles/${vehicle.id}`}>View Details</Link>
    </div>
  );
};
