const { Schema,model } = require("mongoose");
const mongoose = require('mongoose')

const UserSchema = Schema(
  {
    // _id: {
    //   type: Schema.Types.ObjectId,
    // },
    username: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
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
