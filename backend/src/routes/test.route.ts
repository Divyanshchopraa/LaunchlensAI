import express from "express";
import { analyzeBusiness } from "../modules/business/business.analyze.controller";
import cofounderRoute from "../modules/cofounder/cofounder.route";


const router = express.Router();

router.post("/analyze-startup", analyzeBusiness);
router.use("/cofounder", cofounderRoute);
export default router;