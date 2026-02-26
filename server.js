/**
 * @module server
 * @description A minimal HTTP server that listens on a configurable hostname and port,
 * responding to every incoming request with a plain-text "Hello, World!" message.
 * This server serves as a Backprop integration test harness.
 * @author hxu
 * @version 1.0.0
 * @license MIT
 * @requires module:http
 * @see {@link https://nodejs.org/api/http.html} Node.js HTTP module documentation
 */
const http = require('http');

/**
 * The IP address on which the HTTP server will listen.
 * Set to the IPv4 loopback address, restricting connections to the local machine only.
 * @const {string}
 * @default '127.0.0.1'
 */
const hostname = '127.0.0.1';
/**
 * The TCP port number on which the HTTP server will listen for incoming connections.
 * @const {number}
 * @default 3000
 */
const port = 3000;

/**
 * HTTP server instance created with a request handler that responds to all incoming
 * requests with a plain-text "Hello, World!" message and a 200 OK status code.
 *
 * The request handler callback performs the following for every request:
 * 1. Sets the response status code to 200 (OK)
 * 2. Sets the Content-Type header to "text/plain"
 * 3. Ends the response with the body "Hello, World!\n"
 *
 * @const {http.Server}
 * @param {http.IncomingMessage} req - The incoming HTTP request object.
 * @param {http.ServerResponse} res - The HTTP response object used to send data back to the client.
 */
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

/**
 * Starts the HTTP server, binding it to the configured hostname and port.
 * Once the server is ready to accept connections, the callback logs the server
 * URL to the console as a readiness signal.
 * @listens {number} port
 * @see hostname
 * @see port
 */
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
