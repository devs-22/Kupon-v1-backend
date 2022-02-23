const express = require("express")
var {getInvoice} = require("../controllers/invoice")


const invoiceRouter = express.Router()

invoiceRouter.get("/", getInvoice)

invoiceRouter.post("/", getInvoice)

module.exports = invoiceRouter