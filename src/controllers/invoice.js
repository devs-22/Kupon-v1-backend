const Invoice = require("../models/invoice")

function getInvoice(req, res) {
    Invoice.find()
        .then(r => res.json({itemCount: r.length, items: r}))
        .catch(err => { throw (err) })
}

function createInvoice(req, res) {
    let {name, email, date, number, items} = req.body
    if(name && email && date && number && items){
    Invoice.create({ name, email, date, number, items })
        .then(r => res.json(r))
        .catch(err => res.status(500).json({error: "Failed to create invoice"}))
    } else{
        res.status(500).json({
            error: "Please include all fields"
        })
    }
}

module.exports.getInvoice = getInvoice

module.exports.createInvoice = createInvoice