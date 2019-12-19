const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  start: {
    type: Date,
    required: true
  },
  week: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  },
  currentlyRunning: {
    type: Boolean,
    default: false
  },
  thumbnail: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Movies", MovieSchema);
