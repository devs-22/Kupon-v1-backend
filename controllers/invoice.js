const Invoice = require("../models/invoice")

function getInvoice(req, res) {
    Invoice.find()
        .then(r => res.json(r))
        .catch(err => { throw (err) })
}

function createInvoice(req, res) {
    Invoice.create({ name: req.body.name })
        .then(r => res.json(r))
        .catch(err => { throw (err) })
}

module.exports.getInvoice = getInvoice

module.exports.createInvoice = createInvoice