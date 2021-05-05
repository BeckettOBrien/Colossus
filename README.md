#### Colossus
A speedy, lightweight Express JS alternative.<br>
**Lead Developers**:
- [Monotrix](https://github.com/Monotrix)
- [iCraze](https://github.com/iCrazeiOS)

**Credits**:
- [Constanze](https://github.com/Julz4455) - Fixing up Server.js

---
**How to Use**<br>
For this example, I'll make a simple `POST` request that returns "Hi there!" and a `catchall` that returns "Page not found."
```js
const Server = require("/path/to/Server.js");
const server = new Server();
const port = 1337;

server.post("/test", async (req, res) => {
    res.statusCode == 200;
    res.end("Hi there!");
});

server.catchall(async (req, res) => {
    res.statusCode == 400;
    res.end("Page not found.");
});

server.start(port).then(() => {
    console.log("Server is up!");
});
```

**Looking to webhost with Colossus?**<br>
Not a problem! Take a look at this example:
```js
const { Server } = require('/path/to/Server.js');
const server = Server;
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
});
```