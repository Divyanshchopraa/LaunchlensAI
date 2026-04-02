import { Request, Response, NextFunction } from "express";
import { getDashboardService } from "./dashboard.service";

export const getDashboard = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const uid = req.user.uid;

    const dashboardData = await getDashboardService(uid);

    res.json({
      success: true,
      message: "Dashboard fetched successfully",
      data: dashboardData,
    });
  } catch (error) {
    next(error);
  }
};