var express = require('express');
var router = express.Router();
const userModel = require("./users");
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://yashag1810:admin@123@cluster07.ptuggvp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster07");

router.get("/create",async function(req,res){
   const userCreated = await userModel.create({
    username : "codyash710",
    name : "yash",
    age : 19
  });
  res.send(userCreated);
});

module.exports = router;
