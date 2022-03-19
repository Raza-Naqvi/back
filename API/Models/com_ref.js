"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const coinRef = new Schema({
    rate: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        ref: "user"
    },
    car: {
        type: String,
        ref: "coin"
    },
})
module.exports = mongoose.model("coinRef", coinRef)