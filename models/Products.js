const { Schema, model } = require("mongoose");
const mongoose = require('mongoose')

const ProductSchema = Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    url: {
      type: String,
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
