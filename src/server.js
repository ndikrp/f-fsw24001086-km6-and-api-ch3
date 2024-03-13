const express = require('express')
const app = express()
const { PORT = 8000 } = process.env
const routes = require('./routes')
app.use(express.json())

app.use(routes)

app.get('/', (req, res) => {
    res.json({ message: 'Ping Succesfuly!' })
})

app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' })
})


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT} `)
})