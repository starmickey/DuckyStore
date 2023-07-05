const mongoose = require("mongoose");
const schemaType = require("../../types");


const pricingGroupSchema = new mongoose.Schema(
    {
        startDate: {
            type: schemaType.TypeDate,
            required: true
        },
        endDate: {
            type: schemaType.TypeDate,
            default: null
        },
        state: {
            type: schemaType.ObjectID,
            ref: "pricing-states"
        }
    },
    { timestamps: true }
);


module.exports = pricingGroupSchema;