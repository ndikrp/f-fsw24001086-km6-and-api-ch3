const express = require('express')
const router = express.Router()
const cars = require('./cars')
const { v4: uuidv4 } = require('uuid');


// Get list of cars
router.get('/cars', (req, res) => {
    const indentedJson = JSON.stringify(cars, null, 2)
    res.setHeader('Content-Type', 'application/json')
    res.send(indentedJson)
})

// Get cars
router.get('/cars/:id', (req, res) => {
    const { id } = req.params
    const car = cars.find(car => car.id === id)
    const indentedJson = JSON.stringify(car, null, 2)
    res.setHeader('Content-Type', 'application/json')
    res.send(indentedJson)
})

router.post('/cars', (req, res) => {
    const newCarData = req.body
    const requireFields = [
        'plate', 'manufacture', 'model', 'image',
        'rentPerDay', 'capacity', 'description', 'availableAt',
        'transmission', 'available', 'type', 'year', 'options', 'specs'
    ]
    for (const field of requireFields) {
        if (!newCarData[field]) {
            return res.status(400).json({ error: `Missing required field ${field}` })
        } else if (cars.some(car => car.plate === newCarData.plate)) {
            return res.status(400).json({ error: 'Plate number cannot be the same' })
        }
    }

    const newCarId = uuidv4()
    const newCar = {
        id: newCarId,
        ...newCarData
    }
    cars.push(newCar);
    res.status(201).json({ Status: 'Success', message: 'New car added!', newCar });
})

module.exports = router

