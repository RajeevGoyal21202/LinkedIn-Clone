import express from "express";
import userRoute from "./user.routes.js";
import postRoutes from "./post.routes.js";
import commentRoutes from "./comment.routes.js";
import reactionRoutes from "./reaction.routes.js";
import connectionRoutes from "./connection.routes.js";
import messageRoutes from "./message.routes.js"
import chatRoute from "./chat.routes.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to Linkedin");
});

router.use("/users", userRoute);
router.use("/posts", postRoutes);
router.use("/comment", commentRoutes);
router.use("/reaction", reactionRoutes);
router.use("/connection", connectionRoutes);
router.use("/chat", chatRoute);
router.use("/message",messageRoutes)
export default router;
