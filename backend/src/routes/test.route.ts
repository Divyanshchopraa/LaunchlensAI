import express from "express";
import { analyzeBusiness } from "../modules/business/business.analyze.controller";

const router = express.Router();

router.post("/analyze-startup", analyzeBusiness);

export default router;