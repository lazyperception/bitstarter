var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var infile ="index.html";

var buffer = fs.readFileSync(infile);

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
