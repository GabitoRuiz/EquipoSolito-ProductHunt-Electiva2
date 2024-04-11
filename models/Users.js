const { Schema,model } = require("mongoose");
const mongoose = require('mongoose')

const UserSchema = Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
    },
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
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
