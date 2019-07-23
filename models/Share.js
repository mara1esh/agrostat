const mongoose = require('mongoose')

const ShareSchema = new mongoose.Schema({
    square: Number,
    code: String,
    contractUntil: Date
})

mongoose.model('Share', ShareSchema)