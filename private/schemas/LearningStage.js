const mongoose = require("mongoose");

const learningStage = mongoose.Schema({
  lessons: {
    type: Number,
    require: true,
    default: 0,
  },
});

module.exports = mongoose.model("LearningStage", learningStage);
