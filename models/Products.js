const { Schema, model } = require("mongoose");

const ProductSchema = Schema(
  {
    _id: {
      type: ObjectId,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
    tags: {
      type: [String],
    },
    userId: {
        type: ObjectId,
      },
  },
  {
    timestamps: true, // CreatedAt , updatedAt
  }
);

module.exports = model(Product, ProductSchema)
