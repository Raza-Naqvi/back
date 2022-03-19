"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Courses = new Schema({
    courses: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    // registration: {
    //     type: Schema.Types.ObjectId,
    //     ref: "registration"
    // }
})
module.exports = mongoose.model("courses", Courses)