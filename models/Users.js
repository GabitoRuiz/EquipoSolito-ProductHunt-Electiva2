const { Schema,model } = require("mongoose");
const mongoose = require('mongoose')

const UserSchema = Schema(
  {
    username: String,
    email: String,
    password: String,
    bio: String,
    avatar:  String,
  },
  {
    timestamps: true, // CreatedAt , updatedAt
  }
);

module.exports = model('users', UserSchema)


