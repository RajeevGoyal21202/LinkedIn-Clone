import express from "express";
import { postController } from "../controller/index.js";
import { requireSignIn } from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.middleware.js";
const router = express.Router();

router.post("/",upload.array('images', 12), postController.createPost);
router.get("/", requireSignIn, postController.getAllPost);
router.delete("/:id", requireSignIn, postController.deletePost);
router.put("/:id", requireSignIn, postController.updatePost);

export default router;
