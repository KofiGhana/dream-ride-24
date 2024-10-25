const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

router.post('/create', reservationController.create);
router.get('/getAll', reservationController.getAll);

module.exports = router;
