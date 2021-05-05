const Server = require('../../lib/Server/Server');
const server = new Server();
const port = 8000;
const files = [
    {
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
        res.statusCode = 200;
        res.end((await require("fs").readFileSync(Object.values(file)[0])))
    })
    console.log(`Registered ${Object.keys(file)[0]} in ${Date.now() - s} ms.`);
});

server.catchall(async (req, res) => {
    res.statusCode = 404;
    res.end((await require("fs").readFileSync(catchall)));
});
console.log(`Registered all files in ${Date.now() - fileTime} ms.`);

var start = Date.now();
server.start(port).then(() => {
    console.log(`Started up in ${Date.now() - start} ms.\nRunning on localhost:${port}`);
})