const express = require("express")
const invoiceRouter = require('./routes/invoice')
const userRouter = require('./routes/user')
const mongoose = require('mongoose');
require('dotenv').config()

const app = express()
app.use(express.json());
app.use('/public', express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));

app.use('/invoice', invoiceRouter)
app.use('/users', userRouter)

const port = process.env.PORT || 3000
const mongo_url = process.env.MONGO_URL

mongoose.connect(mongo_url, {})
    .then(res => app.listen(port, () => { console.log("Server running on port ", port); }))
    .catch(err => console.log("Unable to connect to MongoDB: ", err))