import express from "express";
import userROutes from "./user.js";

const router = express.Router();

router.use("/user", userROutes);

export default router;