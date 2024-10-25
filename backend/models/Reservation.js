const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' },
  startDate: Date,
  endDate: Date,
});

module.exports = mongoose.model('Reservation', reservationSchema);
