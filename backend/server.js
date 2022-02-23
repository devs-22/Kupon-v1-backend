const express = require("express")
const invoiceRouter = require('./routes/invoice')
const mongoose = require('mongoose');

const app = express()

app.use('/invoice', invoiceRouter)

const port = process.env.PORT || 3000
mongoose.connect('mongodb://localhost:27017/test', {})
    .then(app.listen(port, () => { console.log("Server running on port ", port); }))
    .catch(err => console.log("Unable to connect to MongoDB", err))