const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  title: {
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
  }
});

module.exports = mongoose.model("Movies", MovieSchema);
