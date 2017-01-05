var express = require("express"); 
var app = express();

// let's see wether this thing works or not :P

app.get("/", function(request, response) { response.send("Hello, world!");
                                         });

  

app.listen(process.env.PORT,function(){
  console.log("started listening on port " + process.env.PORT);
});

