const mongoose = require("mongoose");
const productStateSchema =  require("./product-state-schema");

const productState = mongoose.model("product-state",productStateSchema);

module.exports = productState;