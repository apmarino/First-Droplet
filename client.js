var net = require('net');

var client = net.Socket();

client.connect(3000, function(){
	console.log('connected to server');
	client.write("Hello Server");

	client.on('data', function(data){
		console.log(data.toString().trim())
	});

	process.stdin.on("data", function(input) {
		console.log(input)
    // client.write(input.toString().trim());

  });

	client.on('end', function(){
		console.log('disconnected from server')
	});

});