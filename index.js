var express = require("express"); 
var app = express();

// let's see wether this thing works or not :P

app.get("/", function(request, response) { response.send("Hello, world!");
                                         });

  
var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
server.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});

