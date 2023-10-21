const sensorDAO = require('../DAO/sensor.dao');
const sensorController = {}

sensorController.getAll = async(req, res) => {
    sensorDAO.getAll()
    .then(sensors => {
        res.json(sensors)
    })
    .catch(err => {
        res.json({
            status: "request failed"
        })
    });
}

sensorController.getAllFront = async(req, res) => {
    sensorDAO.getAll()
    .then(sensors => {
        res.render('../src/views/index',{sensors})
    })
    .catch(err => {
        res.json({
            status: "request failed"
        })
    });
}

sensorController.insertOne = async(req, res) => {
    sensorDAO.insertOne(req.body)
    .then(result => {
        res.json({
            status: "request succesfull"
        })
    })
    .catch(err => {
        res.json({
            status: "request failed"
        })
    });

}

module.exports = sensorController;