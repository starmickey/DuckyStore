const mongoose = require("mongoose");
const schemaType = require("../../types")


const priceSchema = new mongoose.Schema(
    {
        price: {
            type: schemaType.TypeNumber,
            required: true
        },
        product: {
            type: schemaType.ObjectID,
            ref: "product"
        },
        pricingGroup: {
            type: schemaType.ObjectID,
            ref: "pricing-group"
        }
    },
    { timestamps: true }
);


module.exports = priceSchema;