const { User, Thought } = require("../models");

const getUsers = () => {
  return User.find()
}


const getUserById = (id) => {
  return User.findOne({ _id: id })
}

const createUser = async (userData) => {
  return User.create(userData)
}








const addFriend = async (id, friendId) => {
  return User.findOneAndUpdate({ _id: id }, { $addToSet: { friends: friendId } }, { new: true })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  addFriend,
}