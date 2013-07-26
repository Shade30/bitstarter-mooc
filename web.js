var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var indexfile = "./index.html";
var outbuffer = new Buffer(fs.readFileSync(indexfile).toString(), "utf-8");

app.get('/', function(request, response) {
  response.send(outbuffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
