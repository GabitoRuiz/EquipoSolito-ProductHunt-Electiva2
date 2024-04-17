const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const CommentSchema = Schema(
  {
    // _id: {
    //   type: Schema.Types.ObjectId,
    // },
    productId: {
      type: { type: Schema.Types.ObjectId, ref: "products" },
    },
    userId: {
      type: { type: Schema.Types.ObjectId, ref: "users" },
    },  
    rating: Number,
    content:String,

  },
  {
    timestamps: true, // CreatedAt , updatedAt
  }
);

module.exports = model("comments", CommentSchema);
