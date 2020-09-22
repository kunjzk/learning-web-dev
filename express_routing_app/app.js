var express = require('express');
var app = express();

app.get("/speak/:animal", function(req, res){
  var sounds_dict = {'pig': 'Oink!',
                    'cow': 'Moo!',
                    'dog': 'Woof Woof!'};
  var animal = req.params.animal.toLowerCase();
  if (animal in sounds_dict){
    res.send("The " + animal + " says " + sounds_dict[animal]);
  }
  else{
    res.redirect("/*");
  }
});

app.get("/repeat/:word/:count", function(req, res){
  var c = req.params.count;
  var word = req.params.word;
  var response = "";
  for (var i=0; i<c-1; i++){
    response += word + " ";
  }
  response += word;
  res.send(response);
});

app.get("*", function(req,res){
  res.send("Wrong");
});


app.listen(3000, function(){
  console.log("server has started");
});
