const Invoice = require("../models/invoice")

function getInvoice(req, res) {
    res.json(Invoice.find())
}

function createInvoive(req, res) {
    res.send("<h1>Hello</h1>")
}

module.exports.getInvoice = getInvoice