import { Router } from "express";
import { cofounderChat } from "./cofounder.controller";

const router = Router();

router.post("/chat", cofounderChat);

export default router;