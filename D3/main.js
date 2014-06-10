var http = require("http");
// var collision = require("./collision_detection");

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	// collision.collision();
	response.end();
}).listen(8888);