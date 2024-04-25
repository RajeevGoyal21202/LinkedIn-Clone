import express from "express";
import { userController } from "../controller/index.js";
import { requireSignIn } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/", requireSignIn, userController.getUser);
router.post("/profile", requireSignIn, userController.update);

export default router;
