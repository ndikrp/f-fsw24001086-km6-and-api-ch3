const express = require('express')
const router = express.Router()

const carsController = require('../controllers/carsController')

router.route("/").get(carsController.getCars).post(carsController.insertCar)
router
    .route("/:id")
    .get(carsController.getCarsbyId)
    .put(carsController.updateCar)
    .delete(carsController.deleteCar)

module.exports = router

