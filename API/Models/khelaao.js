"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const khelaao = new Schema({
    name: {
        type: String
    },
    match: {
        type: Number
    },
    innigs: {
        type: Number
    },
    run: {
        type: Number
    },
    wicket: {
        type: Number
    },
    bestScore: {
        type: Number
    },
    avgRate: {
        type: Number
    },
    strikeRate: {
        type: Number
    },
    bestBowl: {
        type: Number
    }
});
module.exports = mongoose.model("Khelaao", khelaao)