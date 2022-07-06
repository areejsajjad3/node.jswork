const http = require("http");
const data = [{
        name: "areej",
        age: 23,
        email: "areejsajjad@gmail.com"
    },
    {
        name: "Mahnoor",
        age: 25,
        email: "mahnoorkhan@gmail.com"
    },
]
http.createServer(function(req, res) {

    // res.writeHead(200, { "Content-type": "application/json" })
    //res.write(JSON.stringify(data));
    res.write(data.toString());

    res.end();


}).listen(3900);