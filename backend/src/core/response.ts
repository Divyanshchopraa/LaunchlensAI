import { Response } from "express";

export const success = (
  res: Response,
  data: any,
  message: string = "Success",
  statusCode: number = 200
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data
  });
};

export const error = (
  res: Response,
  message: string = "Something went wrong",
  statusCode: number = 400
) => {
  return res.status(statusCode).json({
    success: false,
    message
  });
};