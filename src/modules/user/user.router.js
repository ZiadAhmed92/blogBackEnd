import express from "express"
import { getAllUsers, signIn, signUp } from "./user.controller.js";

let router = express.Router();

router.get("/allUsers", getAllUsers)
router.post("/signIn", signIn)
router.post("/signUp", signUp)


export default router;