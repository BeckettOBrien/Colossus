---
layout: default
---
# `PUT` Endpoint Creation

---
The `server.put()` function takes two arguments: the endpoint to which you'd like to assign a `PUT` request, and a callback. An example of a `PUT` endpoint creation can be found below:<br>
```js
server.put("/put", async (req, res) => {
    res.statusCode = 200;
    res.end("PUT request!");
});
```