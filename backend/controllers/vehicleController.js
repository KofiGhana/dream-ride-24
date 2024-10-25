const Vehicle = require('../models/Vehicle');

exports.create = async (req, res) => {
  const { type, brand, model, year } = req.body;

  const vehicle = new Vehicle({ type, brand, model, year });

  await vehicle.save();

  res.json({ message: 'Vehicle created successfully' });
};

exports.getAll = async (req, res) => {
  const vehicles = await Vehicle.find();

  res.json(vehicles);
};
