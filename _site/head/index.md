# `HEAD` Endpoint Creation

---
The `server.head()` function takes two arguments: the endpoint to which you'd like to assign a `HEAD` request, and a callback. An example of a `HEAD` endpoint creation can be found below:<br>
```js
server.head("/head", async (req, res) => {
    res.statusCode = 200;
    res.end("Head request creation!");
});
```