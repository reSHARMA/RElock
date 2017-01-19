var express = require ('express');
var app = express();
var server = require ('http').createServer(app);
var io = require('socket.io')(server);

app.get('/',function(req,res){
	res.send("Server running ...")

});
io.on('connection', function(client) {  
// server-client 
client.on('client', function(data) {
        console.log(data);
client.emit("client","connection successfully established");
 });
client.on('remote',function(data){
		client.emit('remote',data);
		console.log(data);
});
client.on('status',function(data){
		client.emit('status',data);
		console.log(data);
});
client.on('work',function(data){
console.log(data+"ing...."); client.emit('pi',data);  
});
client.on('error',function(data){
	alert(data);
});
//server-client closed ...
//server-pi

	    io.on('connection',function(pi){
		       // server-client 
			client.on('client', function(data) {
        		console.log(data);
			client.emit("client","connection successfully established");
			 });
			client.on('remote',function(data){
			console.log(data);
			client.emit('remote',data);
			});
		        client.on('status',function(data){
			console.log(data);
		        client.emit('status',data);
                        });
			client.on('work',function(data){
                        console.log(data+"ing...."); client.emit('pi',data);  
                        });
		    	client.on('error',function(data){
	                alert(data);
			});
			//server-client closed ...
	    });
});
var port = process.env.PORT || 3000;
server.listen(port);



