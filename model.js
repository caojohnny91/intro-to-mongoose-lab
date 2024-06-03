const mongoose = require('mongoose');

// define the cutomer schema
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
});

// create the model
const Customer = mongoose.model('Customer', customerSchema);

// export the model
module.exports = Customer;




