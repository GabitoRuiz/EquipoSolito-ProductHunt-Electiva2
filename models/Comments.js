const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const CommentSchema = Schema(
  {
    // _id: {
    //   type: Schema.Types.ObjectId,
    // },
    productId: {
      type: { type: Schema.Types.ObjectId, ref: "Product" },
    },
    userId: {
      type: { type: Schema.Types.ObjectId, ref: "User" },
    },
    rating: {
      type: Number,
      required : true,
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true, // CreatedAt , updatedAt
  }
);

const Comment = model("comments", CommentSchema);
