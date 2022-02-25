const Invoice = require("../models/invoice")

function getInvoice(req, res) {
    Invoice.find()
        .then(r => res.json({itemCount: r.length, items: r}))
        .catch(err => { throw (err) })
}

function createInvoice(req, res) {
    if( req.body.name != ""){
    Invoice.create({ name: req.body.name })
        .then(r => res.json(r))
        .catch(err => { throw (err) })
    } else{
        res.status(500).json({
            error: "Name cannot be blank"
        })
    }
}

module.exports.getInvoice = getInvoice

module.exports.createInvoice = createInvoice