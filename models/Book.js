const mongoose = require('mongoose')

let bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String
})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book