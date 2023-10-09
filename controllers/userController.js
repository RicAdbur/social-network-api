const { User } = require("../models");

const getUsers = () => {
  return User.find()
};

const getUserById = (id) => {
  return User.findOne({ _id: id })
};

const createUser = (userData) => {
  return User.create(userData)
};

const updateUserById = (id) => {
  return User.findByIdAndUpdate({ _id: id }, { new: true })
};

const deleteUserById = (id) => {
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