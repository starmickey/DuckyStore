const mongoose = require("mongoose");
const pricingGroupSchema = require("./pricing-group-schema");

const pricingGroup = mongoose.model("pricing-group",pricingGroupSchema);

module.exports = pricingGroup;