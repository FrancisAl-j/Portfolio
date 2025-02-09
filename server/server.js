import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import emailRouter from "./email/emailRouter.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/email", emailRouter);

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Connected to port http://localhost:${PORT}`);
});
