const url = require("url");

const requrl = "https://localhost:900/user?country=India&city=Delhi";

const urlobj = url.parse(requrl);


console.log(urlobj.host);
console.log(urlobj.path);
console.log(urlobj.query);
console.log(urlobj.search);
console.log(urlobj.pathname);

const urlob2 = urlobj.query;
console.log(urlob2.county);
console.log(urlob2.city);

const express = require("express");
const http = require("http");
const fs = require("fs");
//const app = express();

const server = http.createServer((req, res) => {

    const urlbj3 = url.parse(req.url, true);
    const filename = "." + urlbj3.pathname // . + /user= ./user

    fs.readFile(filename, (err, data) => {
        // if (err) return console.log(err);
        if (err) {
            res.writeHead(404, { "Content-type": "text/html" });
            return res.end("Page not found");
        }

        res.writeHead(200, { "Content-type": "text/html" });
        res.write(data);
        res.end();
        // console.log(data());


    });

});
const port = process.env.port || 3000;
server.listen(port, "127.0.0.1", () => {
    console.log(`server is listening on port ${port}`);

})