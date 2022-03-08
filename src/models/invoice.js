const mongoose = require("mongoose")

const ItemSchema = new mongoose.Schema({
  amount: String,
  quantity: String,
  name: String,
  price: String
})


const invoiceSchema = new mongoose.Schema({
    name: {type: String, default: ""},
    email: { type: String, unique: true },
    date: String,
    number: {type: String, default: ""},
    items: [ItemSchema]
  });

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice  