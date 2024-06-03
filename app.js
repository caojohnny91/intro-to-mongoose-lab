const prompt = require("prompt-sync")();

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

// load the customer model
const Customer = require("./models/customer.js");


function startApp() {
    console.log('Welcome to the CRM (Customer Relationship Magagement');
    console.log('What would you like to do?');
    console.log('   1. Create a customer');
    console.log('   2. View all customers');
    console.log('   3. Update a customer');
    console.log('   4. Delete a customer');
    console.log('   5. Quit');
}