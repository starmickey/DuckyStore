const mongoose = require("mongoose");
const schemaType = require("../../types");


const productSchema = new mongoose.Schema(
  {
    name: {
      type: schemaType.TypeString,
      required: true,
    },
    description: {
      type: schemaType.TypeString,
      default: "",
    },
    stock: {
      type: schemaType.TypeDecimal,
      default: 1,
    },
    state: {
      type: schemaType.ObjectID,
      ref: "product-states",
    },
    created_date: {
      type: schemaType.TypeDate,
      default: Date.now,
    },
    //   locations: {
    //     type: [schemaType.TypeObjectId],
    //     ref: "location",
    //   },
  },
  { timestamps: true }
);

module.exports = productSchema;