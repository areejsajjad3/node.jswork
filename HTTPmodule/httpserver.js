//to create a web server in Node.js you need require http module

const http = require("http");
const server = http.createServer((req, res) => {
    res.end('hello from the other side');
});

//we have to listen to the request
//request is listen on port
//first is port no, second is IP or local host name
server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port 8000")
});