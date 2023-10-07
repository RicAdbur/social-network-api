const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://127.0.0.1:27127/social-DB");

module.exports = connection;