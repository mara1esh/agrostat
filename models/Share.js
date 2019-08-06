const mongoose = require('mongoose')
// TODO change isShare field to isShareholder
const ShareSchema = new mongoose.Schema({
    square: Number,
    code: String,
    contractUntil: Date,
    isShare: Boolean
})

mongoose.model('Share', ShareSchema)