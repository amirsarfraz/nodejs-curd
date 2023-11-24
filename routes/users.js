const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/test");
const userNames = mongoose.Schema({
  userName: String,
  name: String,
  age: Number,
  category:{
    type :Array,
    default: []
  },
  dataCreate:{
    type: Date,
    default: Date.now()
  }
});
module.exports = mongoose.model("user", userNames);
