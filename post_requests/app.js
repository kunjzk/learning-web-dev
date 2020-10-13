var express = require("express");
var app = express();
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
var friends = ["tony", "miranda", "justin", "pierre", "lily"];

app.get("/", function(req, res){
  res.render("home");
});

app.get("/friends", function(req, res){
  res.render("friends", {friends:friends});
});

app.post("/addfriend", function(req, res){
  var newFriend = req.body.friendName;
  friends.push(newFriend)
  res.redirect("/friends")
});

app.listen(1234, function(){
  console.log("Server started.");
});
