import express from "express";
import { register, activateAccount, login } from "../controllers/User.js";

const router = express.Router();

router.post("/register", register);
router.post("/activate", activateAccount);
router.post("/login", login);

export default router;
