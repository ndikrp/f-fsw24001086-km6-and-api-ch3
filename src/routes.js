const express = require('express')
const router = express.Router()
const cars = require('./cars')

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

module.exports = router

