const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()
const carsRoutes = require('./routes/routes')

app.use(express.json())

app.use(morgan('dev'))

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString()
    next()
})

app.use("/api/v1/cars/", carsRoutes)

app.get('/', (req, res) => {
    res.json({ message: 'Ping Succesfuly!' })
})

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

module.exports = app