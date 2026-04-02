import express from "express";
import cors from "cors";

import testRoutes from "./routes/test.route";
import { errorHandler } from "./core/errorHandler";

const app = express();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "LaunchLens backend running"
  });
});



app.use("/api", testRoutes);

/*
---------------------------
Error Handler
---------------------------
*/

app.use(errorHandler);

export default app;