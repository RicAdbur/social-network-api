const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [ /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Valid Email address required." ]
  },
  // Array of _id values referencing the Thought model
  thoughts: [
    {
      type: Schema.ObjectId,
      ref: "Thought"
    }
  ],
  // Array of _id values referencing the User model (self-reference)
  friends: [
    {
      type: Schema.ObjectId,
      ref: "User"
    }
  ]
}, 
{
  toJSON: {
    virtuals: true,
  },
  virtuals: {
    friendCount: {
      get() {
        return this.friends.length
      }
    }
  },
});

const User = model("User", userSchema);

module.exports = User;