"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const data = new Schema({
    model: {
        type: String,
        unique: true,
    },
    make: {
        type: String,
    },
    year: {
        type: Number,
        
    },
    type: {
        type: String
    },
    competition: [{
        type: String,
    }]
})
module.exports = mongoose.model("Data", data)