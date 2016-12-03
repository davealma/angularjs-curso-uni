var connect = require('connect');
var serveStatic = require('serve-static');
var PORT = 3000;
connect().use(serveStatic(__dirname))
    .listen(PORT, function () {
        console.log('Server corriendo en '+PORT);
    });
