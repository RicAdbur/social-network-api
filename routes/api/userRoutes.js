const router = require("express").Router();
const { getUsers, getUserById, createUser, updateUserById, deleteUserById, addFriend, removeFriend } = require("../../controllers/userController");

router.route("/")
.get(async (req, res) => {
  try {
    const users = await getUsers()
    res.json(users)
  } catch(err) {
    console.log(err);
    return res.status(500).json(err);
  }
})
.post(async (req, res) => {
  try {
    const createdUser = await createUser(req.body)
    res.json(createdUser)
  } catch(err) {
    console.log(err);
    return res.status(500).json(err)
  }
});

router.route("/:userId")
.get(async (req, res) => {
  try {
    const user = await getUserById(req.params.userId)
    res.json(user)
  } catch(err) {
    console.log(err);
    return res.status(500).json(err)
  }
})
.put(async (req, res) => {
  try {
    const updatedUser = await updateUserById(req.params.id)
    res.json(updatedUser)
  } catch(err) {
    console.log(err);
    return res.status(500).json(err)
  }
})
.delete(async (req, res) => {
  try {
    const deletedUser = await deleteUserById(req.params.id)
    res.json(deletedUser)
  } catch(err) {
    console.log(err);
    return res.status(500).json(err)
  }
});

router.route("/:userId/friends/:friendId")
.post(async (req, res) => {
  try {
    const updatedUser = await addFriend(req.params.userId, req.params.friendId)
    res.json(updatedUser)
  } catch(err) {
    console.log(err);
    return res.status(500).json(err);
  }
})
.delete(async (req, res) => {
  try {
    const updatedUser = await removeFriend(req.params.userId, req.params.friendId)
    res.json(updatedUser)
  } catch(err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;