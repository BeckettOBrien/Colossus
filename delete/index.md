#### `DELETE` Endpoint Creation

---
The `server.delete()` function takes two arguments: the endpoint to which you'd like to assign a `DELETE` request, and a callback. An example of a `DELETE` endpoint creation can be found below:<br>
```js
server.delete("/delete", async (req, res) => {
    res.statusCode = 200;
    res.end("DELETE request!");
});
```