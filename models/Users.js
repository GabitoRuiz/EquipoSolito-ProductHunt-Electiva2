const { Schema, model } = require("mongoose");

const UserSchema = Schema(
  {
    _id: {
      type: ObjectId,
    },
    username: {
      type: String,
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
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true, // CreatedAt , updatedAt
  }
);

module.exports = model(User, UserSchema)
