#### Starting server

---
The `server.start()` function takes one argument: a port number. Starting a server with Colossus is very easy. Once you've installed Colossus (see [install](/install)), follow this code:<br>
```js
const { Server } = require("@projectcolossus/colossus");
const server = Server;
const port = 4000;

server.start(port).then(() => {
    console.log("Hi there!")
});
```