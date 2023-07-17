const mongoose = require("mongoose");
const pricingStateSchema = require("./pricing-state-schema");

const pricingState = mongoose.model("pricing-state",pricingStateSchema);

module.exports = pricingState;