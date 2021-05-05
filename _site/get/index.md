# `GET` Endpoint Creation

---
The `server.get()` function takes two arguments: the endpoint to which you'd like to assign a `GET` request, and a callback. An example of a `GET` endpoint creation can be found below:<br>
```js
server.get("/get", async (req, res) => {
    res.statusCode = 200;
    res.end("Hi there!");
});
```