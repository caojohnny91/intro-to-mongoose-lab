const prompt = require("prompt-sync")();

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const Customer = require("./model.js");

const username = prompt("What is your name? ");

console.log(`Your name is ${username}`);
