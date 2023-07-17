const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.product = require("./product");
db.productState = require("./product-state");
db.price = require("./price")
db.pricingGroup = require("./pricing-group")
db.pricingState = require("./pricing-state");

module.exports = db;