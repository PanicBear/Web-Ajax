var http = require('http');
var template = require("./lib/fetch.js");

var app = http.createServer(function (request, response) {
    response.end(template.html());
})
app.listen(3000);