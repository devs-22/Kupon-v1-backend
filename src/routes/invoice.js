const express = require("express")
const {getInvoice} = require("../controllers/invoice");


const invoiceRouter = express.Router()

invoiceRouter.get("/", getInvoice)

invoiceRouter.post("/", getInvoice)

module.exports = invoiceRouter