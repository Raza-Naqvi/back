"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const coin = new Schema({
    name: {
        type: String
    }
})
module.exports = mongoose.model("Coin", coin)