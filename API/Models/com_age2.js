"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const age2 = new Schema({
    name: {
        type: String,
        // required: true
    },
    age: {
        type: Number,
        // required: true
    }
})
module.exports = mongoose.model("Age2", age2)