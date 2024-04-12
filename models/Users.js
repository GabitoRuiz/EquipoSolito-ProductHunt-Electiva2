const { Schema,model } = require("mongoose");
const mongoose = require('mongoose')

const UserSchema = Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    bio:{
      type: String,
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true, // CreatedAt , updatedAt
  }
);

const User = model('users', UserSchema)

module.exports = User
