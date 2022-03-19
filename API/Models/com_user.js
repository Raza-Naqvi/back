"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = new Schema({
    name: {
        type: String,
        unique: true
    },
    rate: {
        type: Number
        
    },
    car:{
        type: String,
        ref:"data"
    },
})
module.exports = mongoose.model("User", user)