const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://yashag1810:admin@123@cluster07.ptuggvp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster07");

const userschema = mongoose.Schema({
  username : String,
  name: String,
  age: Number
});

module.exports = mongoose.model("users",userschema);