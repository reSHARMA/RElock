var express = require ('express');
var app = express();
var server = require ('http').createServer(app);
var io = require('socket.io')(server);

app.get('/',function(req,res){
	res.send("Server running ...")

});
io.on('connection', function(client) {  
   

    client.on('client', function(data) {
        console.log(data);
client.emit("client","connection successfully established");
	    io.on('connection',function(pi){
		    console.log("pi connected ... ");
	    	pi.on('remote',function(data){
			client.emit('remote',data);
		});
	    });
    });



client.on('work',function(data){
if(data=="locked") {console.log("locking...."); client.emit('status',"locked"); }
else if(data=="unlocked"){ console.log("unlocking ...."); client.emit('status',"unlocked");}
});
});
var port = process.env.PORT || 3000;
server.listen(port);



