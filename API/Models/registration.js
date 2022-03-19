"use strict";
//Import Mongoose
const mongoose = require("mongoose");
//Declare schema and assign schema class
const Schema = mongoose.Schema;
// //create schema instance and add schema properties
const Registration = new Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    enrolled:[{
        type:String,
        ref:"Courses"
    }]
})
module.exports = mongoose.model("registration", Registration)