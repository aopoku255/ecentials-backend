// file for all schemas
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    status: {
      type: Boolean,
      required: false,
    },
    profile_image: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      max: 1024,
      min: 6,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      min: 6,
    },
    career: [
      {
        career_enrolled: {
          type: String,
          required: true,
        },
        mentors: {
          type: Number,
          require: true,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
