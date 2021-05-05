#### `TRACE` Endpoint Creation

---
The `server.trace()` function takes two arguments: the endpoint to which you'd like to assign a `TRACE` request, and a callback. An example of a `TRACE` endpoint creation can be found below:<br>
```js
server.trace("/trace", async (req, res) => {
    res.statusCode = 200;
    res.end("TRACE request!");
});
```