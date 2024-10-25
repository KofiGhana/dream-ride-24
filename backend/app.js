const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRoutes = require('./routes/auth');
const vehicleRoutes = require('./routes/vehicles');
const reservationRoutes = require('./routes/reservations');

app.use('/api/auth', authRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/reservations', reservationRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
