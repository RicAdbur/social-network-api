const { Schema } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.ObjectId,
    default: () => new Schema.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // TODO: Use getter method to format timestamp on query
  },
});

module.exports = reactionSchema;