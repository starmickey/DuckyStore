const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("./config/db");
const app = express();

// * Database connection
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("db connected!");
});

// * Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.json({ message: "Hola desde el servidor!" });
});

let PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));