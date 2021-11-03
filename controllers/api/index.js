const router = require("express").Router();
const userRoutes = require("./user-routes");
const memeRoutes = require("./meme-routes");
const commentRoutes = require("./comment-routes");

router.use("/users", userRoutes);
router.use("/memes", memeRoutes);
router.use("/comments", commentRoutes);

module.exports = router;