const { Schema, model } = require("mongoose");
const mongoose = require('mongoose')

const CommentSchema = Schema(
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

module.exports = model('comments', CommentSchema)
