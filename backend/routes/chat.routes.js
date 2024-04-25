import express from "express";
import { requireSignIn } from "../middleware/authMiddleware.js";
import { createChat, createGroupChat, fetchChat } from "../controller/chat.controller.js";
const router = express.Router();

router.post("/", requireSignIn, createChat);
router.get("/",requireSignIn,fetchChat);
router.post("/group",requireSignIn,createGroupChat)

export default router;
