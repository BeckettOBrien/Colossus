# Plugin Adding

---
`Plugins.add()` takes one argument: a callback function that your plugin resides in. You can return your `req` and `res` parameters in the callback, and Colossus will set your modified parameters to be used globally. Check out the example below:<br>
```js
// After including `Plugins` in your `const` statement for Colossus

// To modify `req` and `res` globally
Plugins.add(async (req, res) => {
    req = "req!"
    res = "res!"
    // This is what tells Colossus to make your `req` and `res` parameters global
    return {req: req, res: res};
});

// You can also only return `req`, for example
Plugins.add(async (req, res) => {
    req = "req!"
    return {req: req};
});

// Or, return nothing at all and just log a nice little message
Plugins.add(async (req, res) => {
    console.log("Hi there! I hope you're having a great day!");
});

```

Keep in mind that plugins are **always** run before the endpoint gets forwarded. To use the original `req` and `res`, you can do something like this:<br>
```js
server.post("/post", async (req, res, reqOrig, resOrig) => {
    res.statusCode = 200;
    res.end(reqOrig);
});

```
