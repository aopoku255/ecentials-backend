// file for all schemas
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  status: {
    type: Number,
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
    // unique: true,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  usertype: {
    //0 = normal user
    type: Number,
    required: false,
  },

  education: [
    {
      school_name: {
        type: String,
        required: false,
      },
      course: {
        type: String,
        required: false,
      },
      duration: {
        type: String,
        required: false,
      },
      highest_level: {
        type: String,
        required: false,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
