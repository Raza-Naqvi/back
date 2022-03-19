"use strict";
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const loginSchema = new Schema({
    userName: {
        type: String
    },
    password: {
        type: String
    }
})
loginSchema.pre("save",async function(next){
    try {
        console.log("Called before saving a user");
        const salt = await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(this.password,salt)
        this.password=hashedPassword
        next()
    } catch (error) {
        next(error)
    }
})
loginSchema.methods.comparePassword = function(plainPassword,cb){
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if (err) return cb(err);
        cb(null, isMatch)
    })
}
module.exports = mongoose.model("Login", loginSchema)