import express from "express"
import { requireSignIn } from "../middleware/authMiddleware.js";
import {deleteRequest, getConnection, getRequest, getSenderRequest, postRequest, updateRequest} from "../controller/connection.controller.js"
const router = express.Router();

router.post("/:userId",requireSignIn,postRequest)
router.get("/",requireSignIn,getRequest)
router.get("/sender",requireSignIn,getSenderRequest)
router.get("/:userId",requireSignIn,getConnection)
router.patch("/:userId",requireSignIn,updateRequest)
router.delete("/:userId",requireSignIn,deleteRequest)

export default router