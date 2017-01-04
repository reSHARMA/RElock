var express = require("express"); 
var app = express();
//const net = require("net");
// let's see wether this thing works or not :P

app.get("/", function(request, response) { response.send("Hello, world!");
                                          
});
// Create a simple server
/* var server = net.createServer(function (conn) {
    console.log("Server: Client connected");

    // If connection is closed
    conn.on("end", function() {
        console.log('Server: Client disconnected');
        // Close the server
        server.close();
        // End the process
        process.exit(0);
    });

    // Handle data from client
    conn.on("data", function(data) {
        data = JSON.parse(data);
        console.log("Response from client: %s", data.response);
    });

    // Let's response with a hello message
    conn.write(
        JSON.stringify(
            { response: "Hey there client!" }
        )
    );
});
*/
// Listen for connections
app.listen(3000,function(){
  console.log("started listening on port 3000 ....");
});
});
