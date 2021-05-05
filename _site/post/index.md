# `POST` Endpoint Creation

---
The `server.post()` function takes two arguments: the endpoint to which you'd like to assign a `POST` request, and a callback. An example of a `POST` endpoint creation can be found below:<br>
```js
server.post("/post", async (req, res) => {
    res.statusCode = 200;
    res.end("POST request!");
});
```