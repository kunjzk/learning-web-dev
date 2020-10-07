var express = require('express');
app = express();

app.use(express.static("public"))
app.set("view engine", "ejs")

app.get("/", function(req, res){
  res.render("home");
});

app.get("/fallinlovewith/:thing", function(req,res){
  var thing = req.params.thing;
  res.render("love", {thingVar: thing})
});

app.get("/posts", function(req, res){
  var posts = [
      {title: "Post 1", author: "Susy"},
      {title: "Song 2", author: "Blur"},
      {title: "Chin 3", author: "Chin2"}
  ];

  res.render("posts", {posts:posts});
});

app.post("/", function(req, res){
  res.send("you have reached a post route");
});

app.listen(3000, function(){
  console.log("server is listening");
});
