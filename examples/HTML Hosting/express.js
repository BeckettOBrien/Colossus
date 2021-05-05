const express = require('express');
const server = express();
const port = 8000;
const files = [{
        "/": "./index.html"
    },
    {
        "/testing": "./testing.html"
    }
]
const catchall = "./404.html";

var fileTime = Date.now();
files.forEach(async (file) => {
    var s = Date.now();
    server.use(Object.keys(file)[0], async (req, res) => {
        var st = Date.now();
        await res.status(200).send((await require("fs").readFileSync(Object.values(file)[0])))
        console.log(`Responded in ${Date.now() - st} ms.`);
    })
    console.log(`Registered ${Object.keys(file)[0]} in ${Date.now() - s} ms.`);
});

server.use(async (req, res) => {
    var st = Date.now();
    await res.status(404).send((await require("fs").readFileSync(catchall)))
    console.log(`Responded to catchall in ${Date.now() - st} ms.`);
});
console.log(`Registered all files in ${Date.now() - fileTime} ms.`);

var start = Date.now();
server.listen(port, () => {
    console.log(`Started up in ${Date.now() - start} ms.\nRunning on localhost:${port}`);
});