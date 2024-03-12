const express = require('express')
const app = express()
const { PORT = 8000 } = process.env
const routes = require('./routes')

app.get('/', (req, res) => {
    res.json({ message: 'Ping Succesfuly!' })
})

app.use(routes)

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT} `)
})