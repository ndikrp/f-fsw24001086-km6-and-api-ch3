const { v4: uuidv4 } = require('uuid')
const cars = require('../data/cars')

// Get all cars
const getCars = (req, res) => {
    const car = JSON.parse(JSON.stringify(cars))
    res.status(200).json({
        status: 'Success',
        totalData: cars.length,
        data: {
            car
        }
    })
}

// Get car details by Id
const getCarsbyId = (req, res) => {
    const { id } = req.params
    const car = cars.find(car => car.id === id)
    if (!car) {
        return res.status(404).json({
            status: 'fail',
            message: `Car with ID : ${id} not found!`
        })
    }
    res.status(200).json({
        status: 'Success',
        data: {
            car
        }
    })
}

// Insert new car
const insertCar = (req, res) => {
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
}

// Update car by Id
const updateCar = (req, res) => {
    const { id } = req.params;
    const carIndex = cars.findIndex(car => car.id === id);

    if (carIndex === -1) {
        return res.status(404).json({ error: `Car with ID : ${id} not found!` });
    }

    const updatedCarData = req.body;
    const existingCar = cars[carIndex];

    const updatedCar = {
        ...existingCar,
        ...updatedCarData
    };
    cars[carIndex] = updatedCar;

    res.status(200).json({ Status: 'Success', message: 'Car updated!', updatedCar });
}

// Delete car by Id
const deleteCar = (req, res) => {
    const id = req.params.id
    const carIndex = cars.findIndex(car => car.id === id);

    if (carIndex === -1) {
        return res.status(404).json({ error: `Car with ID : ${id} not found!` });
    }

    cars.splice(carIndex, 1)

    res.status(200).json({ Status: 'Success', message: `Car with ID : ${id} deleted!` });
}

module.exports = {
    getCars,
    getCarsbyId,
    insertCar,
    updateCar,
    deleteCar
}