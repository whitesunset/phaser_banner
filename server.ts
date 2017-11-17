import * as node_static from 'node-static'
import * as http from 'http'

const server = new node_static.Server('./dist')
const port = 8017

http.createServer(function (request, response) {
  request.addListener('end', function () {
    server.serve(request, response)
  }).resume()
}).listen(port)