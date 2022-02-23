const express = require("express")
const invoiceRouter = require('./routes/invoice')
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
require('dotenv').config()

const app = express()

app.use(bodyParser.json())
app.use('/invoice', invoiceRouter)

const port = process.env.PORT || 3000
const mongo_url = process.env.MONGO_URL
mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(res => app.listen(port, () => { console.log("Server running on port ", port); }))
    .catch(err => console.log("Unable to connect to MongoDB: ", err))