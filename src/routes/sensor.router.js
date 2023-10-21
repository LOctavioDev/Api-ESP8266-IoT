const sensorController = require('../controllers/sensor.controller');
const {Router} = require('express');
const router = Router();

router.get('/getAll', sensorController.getAll);
router.get('/getAllF', sensorController.getAllFront);
router.post('/insertOne', sensorController.insertOne)

module.exports = router;