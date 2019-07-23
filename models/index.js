const mongoose = require('mongoose')

async function dbConnector() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});
    } catch (error) {
        console.error(`connect error: ${error}`);
    }
}

dbConnector()

const db = mongoose.connection;

db.on('open', () => {
  console.log(`connect to ${process.env.MONGODB_URI}`);
})

db.on('error', () => {
  console.log(`connection error: ${err}`);
})

db.on('close', () => {
  console.log(`connection was closed: ${process.env.MONGODB_URI}`);
})


require('./Share')
require('./Shareholder')