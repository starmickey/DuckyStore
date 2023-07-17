const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.product = require("./product");
db.price = require("./price")
db.pricingGroup = require("./pricing-group")

module.exports = db;