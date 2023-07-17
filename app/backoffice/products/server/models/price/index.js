const mongoose = require("mongoose");
const priceSchema = require("./price-schema");

const price = mongoose.model("price", priceSchema);

module.exports = price;