#### Colossus
A speedy, lightweight Express JS alternative.<br>
**Developers**:
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

server.post("/test", async function(req, res) {
    res.statusCode == 200;
    res.end("Hi there!");
});

server.catchall(async function(req, res) {
    res.statusCode == 400;
    res.end("Page not found.");
});

server.start(port).then(() => {
    console.log("Server is up!");
});
```