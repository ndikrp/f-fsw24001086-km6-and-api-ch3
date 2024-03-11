const express = require('express')
const router = express.Router()
const cars = require('./cars')


router.get('/cars', (req, res) => {
    const indentedJson = JSON.stringify(cars, null, 2);
    res.setHeader('Content-Type', 'application/json');
    res.send(indentedJson);
});

module.exports = router
