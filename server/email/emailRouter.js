import express from "express";
import { sendEmail } from "./sendEmail.js";

const router = express.Router();

router.post("/send", sendEmail);

export default router;
