const express = require("express")
var {getInvoice, createInvoice} = require("../controllers/invoice")


const invoiceRouter = express.Router()

invoiceRouter.get("/", getInvoice)

invoiceRouter.post("/", createInvoice)

module.exports = invoiceRouter