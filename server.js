var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("/home/huta/Documents/angular/webfolder/project"));
app.listen(5000);


// var http = require("http");
//
// http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }).listen(8000);
