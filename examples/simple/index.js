const { Server, Plugins } = require('../../lib/Server/Server')
const server = Server;
const port = 8000

Plugins.enable();

server.get("/", async (_req, res) => {
  res.statusCode = 200
  res.end("Hello!")
})

server.post("/", async (_req, res) => {
  res.statusCode = 200
  res.end("Hi there!")
})

server.patch("/", async (_req, res) => {
  res.statusCode = 200
  res.end("Howdy!")
})

server.catchall(async (_req, res) => {
  res.statusCode = 400
  res.end("Unknown error")
})

server.start(port).then(() => {
  console.log(`Running on port ${port}`)
})
