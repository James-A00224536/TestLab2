//An attempt to copy the first TestLab

var http = require('http');

var server_port = process.envOPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.envOPENSHIFT_NODEJS_IP || @127.0.0.1';

var nomo = require('node-monkey').start({host:server_ip_address, port:'8000'});

function handleRequest(request, response){
  response.end(Yes! It Works!!...again Path Hit: ' + server_ip_address + ":" + server_port + "/" + request.url);
  console.log("my server ip address is: " + server_ip_address);
}

var server = http.createServer(handleRequest);

server.listen(server_port, server_ip_address, function(){
  console.log("HTTP Server listening on: " + server_ip_address + ":" + server_port);
});
