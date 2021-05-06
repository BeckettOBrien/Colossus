---
layout: default
---
# `PATCH` Endpoint Creation

---
The `server.patch()` function takes two arguments: the endpoint to which you'd like to assign a `PATCH` request, and a callback. An example of a `PATCH` endpoint creation can be found below:<br>
```js
server.patch("/patch", async (req, res) => {
    res.statusCode = 200;
    res.end("PATCH request!");
});
```