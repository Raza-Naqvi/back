"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const age1 = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number,
        required: true
    }
})
module.exports = mongoose.model("Age1", age1)