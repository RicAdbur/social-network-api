const { User, Thought } = require("../models");

const getUsers = () => {
  return User.find()
};

const getUserById = (id) => {
  return User.findOne({ _id: id })
};

const createUser = (userData) => {
  return User.create(userData)
};

const updateUserById = (id, userData) => {
  return User.findByIdAndUpdate({ _id: id }, userData, { new: true })
};

const deleteUserById = async (id) => {
  // delete thoughts associated with user
  const user = await getUserById(id)
  const thoughtIds = user.thoughts
  await Thought.deleteMany({ _id: { $in: thoughtIds }})
  // delete user
  return User.findByIdAndDelete({ _id: id })
};

const addFriend = (id, friendId) => {
  return User.findOneAndUpdate({ _id: id }, { $addToSet: { friends: friendId } }, { new: true })
};

const removeFriend = (id, friendId) => {
  return User.findOneAndUpdate({ _id: id }, { $pull: { friends: friendId } }, { new: true })
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend
};