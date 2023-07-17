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
        status: {
            type: schemaType.TypeString,
            enum: ['ACTIVE','DEACTIVATED'],
            default: 'ACTIVE'
        },
    },
    { timestamps: true }
);


module.exports = pricingGroupSchema;