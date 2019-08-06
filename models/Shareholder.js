const mongoose = require('mongoose')

const Shareholder = mongoose.Schema({
    name: String,
    shares: [
        {
            type: mongoose.Schema.Types.Mixed, ref: 'shares' 
        }
    ],
})

mongoose.model('Shareholder', Shareholder)