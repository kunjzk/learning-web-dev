var express = require('express');
var app = express();

app.get("/", function(req, res){
  res.send("Hi There");
});

app.get("/dogs", function(req, res){
  console.log("someone visited dogs");
  console.log(req);
  console.log("_________________===============_________________")
  console.log(res);
  res.send("Hi There dogs");
});

app.get("/r/:subRedditName", function(req,res){
  console.log(req.params);
  res.send("Welcome to a subreddit for " + req.params.subRedditName);
})

app.get("*", function(res,req){
  res.send("invalid url fk off");
});
app.listen(3000, function(){
  console.log("server has started");
});
