const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postModel = new Schema({
    myFile: String
})
module.exports = mongoose.model("image", postModel);