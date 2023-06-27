const jsonServer = require("json-server");
const server = jsonServer.create();
const apiRouter = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

server.get(["/", "/share/*"], function (req, res) {
  res.sendFile("index.html", { root: "./public/" });
});

// Use api router
server.use("/api", apiRouter);

server.listen(80, () => {
  console.log("Server is running");
});
