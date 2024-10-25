const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  type: String,
  brand: String,
  model: String,
  year: Number,
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
