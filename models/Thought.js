const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // TODO: Use getter method to format timestamp on query
    get() {
      return new Date(this.createdAt).toLocaleString()
    }
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema]
}, 
{
  toJSON: {
    virtuals: true,
  },
  virtuals: {
    reactionCount: {
      get() {
        return this.reactions.length
      }
    }
  }
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;