const app = require('./src/app')

const PORT = 8000 

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT} `)
})