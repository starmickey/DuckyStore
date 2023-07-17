const mongoose = require("mongoose");
const productSchema = require("./product-schema");

const product = mongoose.model("product", productSchema);

module.exports = product;