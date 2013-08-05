var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var indexfile = "./index.html";
var outbuffer = new Buffer(fs.readFileSync(indexfile).toString(), "utf-8");

app.get('/', function(request, response) {
  response.send(outbuffer.toString());
});

var mailfile = "./fa87cc8b5a5b.html"
var mailoutbuffer = new Buffer(fs.readFileSync(mailfile).toString(), "utf-8");

app.get('/fa87cc8b5a5b.html', function(request, response) {
  response.send(mailoutbuffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
