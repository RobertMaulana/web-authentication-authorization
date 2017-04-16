const mongoose = require('mongoose');
const db = require('./db');

let userSchema = new mongoose.Schema({
  email: String,
  password: String
});

let User = db.model("User", userSchema);

module.exports = User
