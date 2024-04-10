const { Schema, model } = require("mongoose");

const ProductSchema = Schema(
  {
    _id: {
      type: ObjectId,
    },
    productId: {
      type: ObjectId,
    },
    userId: {
      type: ObjectId,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true, // CreatedAt , updatedAt
  }
);

module.exports = model(Product, ProductSchema)
