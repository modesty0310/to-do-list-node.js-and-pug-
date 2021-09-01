const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
  title: String,
  date: String,
  created: {
    type : Date,
    default : Date.now,
  }
});

module.exports = mongoose.model("List", listSchema);