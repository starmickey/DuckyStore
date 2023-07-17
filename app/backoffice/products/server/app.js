const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/index.route.js")
const app = express();

// * Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// * Routes

//* This is the root route. It is used to check if the server is running. */
app.get("/api", (req, res) => {
  res.status(200).json({ alive: "True", message: "Hello from server" });
});

app.use("/products/", routes);

app.use("*", (req, res) => {
  res.send("Route not found");
});

module.exports = app;
