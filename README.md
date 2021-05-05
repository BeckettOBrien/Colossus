#### Colossus

<img title="Colossus" alt="Colossus Logo" src="./img/Colossus.png" width="50px" height="50px">


A speedy, lightweight Express JS alternative.<br>
**Lead Developers**:
- [Monotrix](https://github.com/Monotrix)
- [iCraze](https://github.com/iCrazeiOS)

**Credits**:
- [Constanze](https://github.com/Julz4455) - Fixing up Server.js
- [Korfi](https://twitter.com/Korfi8267) - Icon

---

**Why use Colossus over Express?**<br>
Honestly, Colossus is, in its current state, a project that I only see myself using. As of right now (5/5/21), Colossus is still in an early (although functioning) stage. Despite all this, Colossus is marginally faster than Express. When running tests comparing Express' and Colossus' times for certain vital tasks, Colossus almost always wins. Below are the statistics for these tests:<br>
- Startup Time
    - Colossus
        - 0 to 4 ms
    - Express
        - 3 to 8 ms
- Response Time
    - Colossus
        - 0 to 14 ms
    - Express
        - 5 to 20 ms
        </a>

If you'd like to run these tests yourself, see examples/HTML Hosting.<br>
In addition to this, Colossus is also dep-less and completely in one file. Colossus also has native "plugin" (a substitute for Express' middleware) support, but this feature is in an early beta.

**How to Use**<br>
For this example, I'll make a simple `POST` request that returns "Hi there!" and a `catchall` that returns "Page not found."
```js
const { Server } = require("/path/to/Server.js");
const server = Server;
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