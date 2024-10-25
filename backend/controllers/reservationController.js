const Reservation = require('../models/Reservation');

exports.create = async (req, res) => {
  const { userId, vehicleId, startDate, endDate } = req.body;

  const reservation = new Reservation({ userId, vehicleId, startDate, endDate });

  await reservation.save();

  res.json({ message: 'Reservation created successfully' });
};

exports.getAll = async (req, res) => {
  const reservations = await Reservation.find().populate('userId').populate('vehicleId');

  res.json(reservations);
};
