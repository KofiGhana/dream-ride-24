// src/components/Booking.js
import React, { useState } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const Booking = () => {
  const [vehicle, setVehicle] = useState({});
  const [bookingDate, setBookingDate] = useState('');
  const [totalCost, setTotalCost] = useState(0);

  const handleBooking = async () => {
    const response = await axios.post('/api/booking', {
      vehicleId: vehicle.id,
      bookingDate,
      totalCost,
    });
    console.log(response.data);
  };

  const handleToken = async (token) => {
    const response = await axios.post('/api/booking/checkout', {
      token,
      vehicleId: vehicle.id,
      bookingDate,
      totalCost,
    });
    console.log(response.data);
  };

  return (
    <div>
      <h2>Book {vehicle.model}</h2>
      <p>Booking Date: {bookingDate}</p>
      <p>Total Cost: {totalCost}</p>
      <StripeCheckout
        token={handleToken}
        stripeKey="YOUR_STRIPE_KEY"
      />
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
};
