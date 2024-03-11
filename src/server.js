const express = require('express')
const app = express()
const { PORT = 8000 } = process.env

app.get('/', (req, res) => {
    res.json({ message: 'Ping Succesfuly!' })
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT} `)
})