"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const coinRef = new Schema({
    name: {
        type: String
    }
})
module.exports = mongoose.model("CoinRef", coinRef);