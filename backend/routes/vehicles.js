const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.post('/create', vehicleController.create);
router.get('/getAll', vehicleController.getAll);

module.exports = router;
