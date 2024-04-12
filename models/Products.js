const { Schema, model } = require("mongoose");
const mongoose = require('mongoose')

const ProductSchema = Schema(
  {
    // _id: {
    //   type: Schema.Types.ObjectId
    // },
    name: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
    },
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  {
    timestamps: true, // CreatedAt , updatedAt
  }
);

const Product = model('products', ProductSchema);

module.exports = Product
