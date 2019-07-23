const express = require('express')
const bodyParser = require('body-parser')

require('dotenv').config()

require('./models')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(require('./routes/index').router)

app.get('/', (req, res) => {
    return res.send({ greet: "Hello"})
})

app.listen(process.env.PORT, () => console.log(`the server is working on port ${process.env.PORT}`))