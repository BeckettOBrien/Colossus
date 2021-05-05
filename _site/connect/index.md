# `CONNECT` Endpoint Creation

---
The `server.connect()` function takes two arguments: the endpoint to which you'd like to assign a `CONNECT` request, and a callback. An example of a `CONNECT` endpoint creation can be found below:<br>
```js
server.connect("/connect", async (req, res) => {
    res.statusCode = 200;
    res.end("CONNECT request!");
});
```