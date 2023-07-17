const mongoose = require("./config/db");
const app = require("./app");
let PORT = process.env.PORT || 3001;

require("dotenv").config();

// * Database connection
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("db connected!");
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));