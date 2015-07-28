var net = require('net');
var port = 3000;

var answers = ["yes, definitely\r\n", "don't count on it\r\n", "the future is uncertain\r\n", "ask later\r\n", "the sun smiles\r\n", "I weep for you\r\n", "the answer is known\r\n", "It is so\r\n", "Please be clear. This is hard work\r\n", "Greater questions have been asked by lesser men\r\n" ];

var server = net.createServer(function(c){

  c.on('data', function(data){
    var input = data.toString().trim();

    if (/\?/.test(input)) {
      var response = Math.floor(Math.random()*answers.length);
      c.write(answers[response]);

    } else {
      c.write("Please ask a question.\r\n");
    }
  })





  c.on('end', function(){
    console.log("client disconnected");
  })
});


server.listen(port, function(){
  console.log("listening on", port);
});
