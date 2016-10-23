var http = require('http');
var PORT = 8009;

//servidor de archivos estaticos
var node_static = require("node-static");
var static_files = new node_static.Server(__dirname);

var http_server = http.createServer(function(request, response) {
    if (request.method === 'GET') {
      if (/^\/\d+(?=$|[\/?#])/.test(request.url)) {
	request.addListener("end", function() {
	  var file1 = request.url.substring(1);
	  var res = file1.concat(".html");
    console.log(res);
	  request.url = request.url.replace(/^\/(\d+).*$/, res);
	  static_files.serve(request, response);
	});
	request.resume();
      }
    }
}).listen(PORT);

console.log('Escuchando en '+PORT);
