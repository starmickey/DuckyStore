const mongoose = require("mongoose");
const schemaType = require("../../types");


const pricingStateSchema = new mongoose.Schema(
    {
        name: {
            type: schemaType.TypeString,
            required: true
        },
        rmDate: {
            type: schemaType.TypeDate,
            default: null
        }
    }
);


module.exports = pricingStateSchema;