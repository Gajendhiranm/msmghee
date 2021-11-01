const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address:{type:String,default:null},
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  number:{type:String,required:true},
  details:[{type:Object ,default:null}],
});

module.exports = mongoose.model("user", userSchema);