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
    status: {
      type: schemaType.TypeString,
      enum: ['ACTIVE','DEACTIVATED'],
      default: 'ACTIVE'
    },
    created_date: {
      type: schemaType.TypeDate,
      default: Date.now(),
    },
    price: {
      type: schemaType.ObjectID,
      ref: "price"
    }
    //   locations: {
    //     type: [schemaType.TypeObjectId],
    //     ref: "location",
    //   },
  },
  { timestamps: true }
);

module.exports = productSchema;