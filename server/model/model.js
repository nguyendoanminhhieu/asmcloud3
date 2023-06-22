const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
    },
    
    price: {
        type: String,
    },
    // price: String,
    
    category: String
    // category: {
    //     type: String,
    //     required: true,
    //     unique: true
    // }
})
const Userdb = mongoose.model('userdb', schema);
module.exports = Userdb;