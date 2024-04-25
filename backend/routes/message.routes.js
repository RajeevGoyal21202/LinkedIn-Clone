import express from "express";
import { requireSignIn } from "../middleware/authMiddleware.js";
import { postMessage, requestMessage } from "../controller/message.controller.js";
const router = express.Router();

router.post("/",requireSignIn,postMessage);
router.get("/:chatId",requireSignIn,requestMessage)

export default router