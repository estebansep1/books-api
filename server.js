require("dotenv").config();
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const PORT = process.env.PORT

//MIDDLEWEAR
app.use(express.json())


app.get('/', (req, res)=> {
    res.send('Welcome to my booksAPI homework!')
})






// LISTEN FOR CONNECTION
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`)
}) 