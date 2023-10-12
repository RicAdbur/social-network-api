const { Thought } = require("../models");

const getThoughts = () => {
  return Thought.find()
};

const getThoughtById = (thoughtId) => {
  return Thought.findOne({ _id: thoughtId })
};

const createThought = (thoughtData) => {
  return Thought.create(thoughtData)
};

const updateThoughtById = (thoughtId, thoughtData) => {
  return Thought.findByIdAndUpdate({ _id: thoughtId }, thoughtData, { new: true })
};

const deleteThoughtById = (thoughtId) => {
  return Thought.findByIdAndDelete({ _id: thoughtId })
};

const addReaction = (thoughtId, reactionData) => {
  return Thought.findByIdAndUpdate({ _id: thoughtId }, { $push: { reactions: reactionData }}, { new: true })
};

const deleteReaction = (thoughtId, reactionId) => {
  return Thought.findByIdAndUpdate({ _id: thoughtId }, { $pull: { reactions: reactionId }}, { new: true })
};


module.exports = {
  getThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
  addReaction,
  deleteReaction
};