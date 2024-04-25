import express from "express";
import {reactionController} from "../controller/index.js";
import { requireSignIn } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/", requireSignIn, reactionController.saveReactions);
router.get("/", requireSignIn, reactionController.getReactions);
router.delete("/:id", requireSignIn, reactionController.removeReaction);
router.put("/:id", requireSignIn, reactionController.updateReaction);

export default router;
