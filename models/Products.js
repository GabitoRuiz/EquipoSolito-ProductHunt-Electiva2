const { Schema, model } = require("mongoose");
const mongoose = require('mongoose')



const ProductSchema = Schema(
  {
    name: String,
    description: String,
    url: String,
    tags:  [String],
    userId: { type: Schema.Types.ObjectId, ref: 'users' }
  },
  {
    timestamps: true, // CreatedAt , updatedAt
  }
);

module.exports = model('products', ProductSchema);


