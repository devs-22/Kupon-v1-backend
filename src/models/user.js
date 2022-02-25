const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: { type:String, default:null },
    last_name: { type:String, default:null },
    business_name: { type:String, default:null },
    phone_number: { type:String },
    address: { type:String },
    email: { type:String, unique:true },
    logo: { type:String },
    password: { type:String },
    token: { type:String }
})

userSchema.set('toJSON', {
    versionKey: false,
    transform: function (doc, ret) {
        delete ret.password;
    }
});

module.exports = mongoose.model("user", userSchema);