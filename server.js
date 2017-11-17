"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_static = require("node-static");
var http = require("http");
var server = new node_static.Server('./dist');
var port = 8017;
http.createServer(function (request, response) {
    request.addListener('end', function () {
        server.serve(request, response);
    }).resume();
}).listen(port);
