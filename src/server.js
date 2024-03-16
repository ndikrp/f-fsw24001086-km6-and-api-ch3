const express = require('express')
const path = require('path')
const app = express()
const routes = require('./routes')
const PORT = 8000 

app.use(express.json())

app.use(routes)

app.get('/', (req, res) => {
    res.json({ message: 'Ping Succesfuly!' })
})

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT} `)
})