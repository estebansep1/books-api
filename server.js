//DEPENDENCIES
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

//CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT
mongoose.connect(process.env.MONGO_URI)
.then(() => {console.log('Connected to mongo: ', process.env.MONGO_URI) })

//MIDDLEWEAR
app.use(cors())
app.use(express.json())







app.get('/', (req, res)=> {
    res.send('Welcome to my booksAPI homework!')
})

// LISTEN FOR CONNECTION
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`)
}) 