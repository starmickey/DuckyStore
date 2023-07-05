const mongoose = require("mongoose");
const pricingGroupSchema = require("./pricing-group-schema");

const pricingGroup = mongoose.model("pricing-state",pricingGroupSchema);

module.exports = pricingGroup;