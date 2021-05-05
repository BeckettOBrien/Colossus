#### `OPTIONS` Endpoint Creation

---
The `server.options()` function takes two arguments: the endpoint to which you'd like to assign a `OPTIONS` request, and a callback. An example of a `OPTIONS` endpoint creation can be found below:<br>
```js
server.options("/options", async (req, res) => {
    res.statusCode = 200;
    res.end("OPTIONS request!");
});
```