const Sensor = require('../models/sensor.model')
const sensorDAO = {}

sensorDAO.getAll = async () => {
    const sensors = await Sensor.find();
    return sensors;
}

sensorDAO.insertOne = async(sensor) => {
    const sensorSaved = new Sensor(sensor);
    await sensorSaved.save();
    return "sensor saved";
}

module.exports = sensorDAO;