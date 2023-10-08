const router = require("express").Router();

router.route("/")
.get()

router.route("/:id")
.get()
.put()
.delete()

router.route("/:userId")
.post()

router.route("/:thoughtId/reactions")
.post()

router.route("/:thoughtId/reaction/:reactionId")
.delete()

module.exports = router;