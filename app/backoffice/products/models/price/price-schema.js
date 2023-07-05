const mongoose = require("mongoose");
const schemaType = require("../../types")


const pricingDetailSchema = new mongoose.Schema(
    {
        price: {
            type: schemaType.TypeNumber,
            required: true
        },
        product: {
            type: schemaType.ObjectID,
            ref: "products"
        },
        pricingType: {
            type: schemaType.ObjectID,
            ref: "pricing-groups"
        }
    },
    { timestamps: true }
);


module.exports = pricingDetailSchema;