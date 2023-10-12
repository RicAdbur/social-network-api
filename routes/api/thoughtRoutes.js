const router = require("express").Router();
const { getThoughts, getThoughtById, createThought, updateThoughtById, deleteThoughtById, addReaction, deleteReaction, } = require("../../controllers/thoughtController");

router.route("/")
.get(async (req, res) => {
  try {
    const thoughts = await getThoughts()
    res.json(thoughts)
  } catch(err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.route("/:id")
.get(async (req, res) => {
  try {
    const thought = await getThoughtById(req.params.thoughtId)
    res.json(thought)
  } catch(err) {
    console.log(err);
    return res.status(500).json(err)
  }
})
.put(async (req, res) => {
  try {
    const updatedThought = await updateThoughtById(req.params.thoughtId, req.body)
    res.json(updatedThought)
  } catch(err) {
    console.log(err);
    return res.status(500).json(err)
  }
})
.delete(async (req, res) => {
  try {
    const deletedThought = await deleteThoughtById(req.params.thoughtId)
    res.json(deletedThought)
  } catch(err) {
    console.log(err);
    return res.status(500).json(err)
  }
});

router.route("/:userId")
.post(async (req, res) => {
  try {
    const newThought = await createThought(req.body)
    res.json(newThought)
  } catch(err) {
    console.log(err);
    return res.status(500).json(err)
  }
});

router.route("/:thoughtId/reactions")
.post(async (req, res) => {
  try {
    const newReaction = await addReaction(req.params.thoughtId, req.body)
    res.json(newReaction)
  } catch(err) {
    console.log(err);
    return res.status(500).json(err)
  }
});

router.route("/:thoughtId/reaction/:reactionId")
.delete(async (req, res) => {
  try {
    const removedReaction = await deleteReaction(req.params.thoughtId, req.params.reactionId)
    res.json(removedReaction)
  } catch(err) {
    console.log(err);
    return res.status(500).json(err)
  }
});

module.exports = router;