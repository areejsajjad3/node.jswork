//to create a web server in Node.js you need require http module

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("Hello from the home side")
    } else if (req.url == "/about") {
        res.end('hello from the about side');
    } else if (req.url == "/contact") {
        res.end('hello from the contact side');
    } else if (req.url == "/userapi") {
        //template string in ec6
        fs.readFile(`${__dirname}/UserApi/userapi.json`, "utf-8", (err, data) => {
            console.log(data);
            const objdata = JSON.parse(data);
            console.log(objdata[0].firstName);
            res.end(data);
        });

    } else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1>404. Page not found</h1>");
    }
});

//we have to listen to the request
//request is listen on port
//first is port no, second is IP or local host name
server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port 8000")
});