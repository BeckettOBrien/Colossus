#### `USE` Endpoint Creation

---
A `USE` endpoint is an endpoint that is accessible via any request.
The `server.use()` function takes two arguments: the endpoint to which you'd like to assign a `USE` request, and a callback. An example of a `USE` endpoint creation can be found below:<br>
```js
server.use("/use", async (req, res) => {
    res.statusCode = 200;
    res.end("USE request!");
});
```