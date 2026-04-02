import { Request, Response } from "express";
import { askCofounder } from "../../services/cofounder.service";

export const cofounderChat = async (req: Request, res: Response) => {

  try {

    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required"
      });
    }

    const reply = await askCofounder(message);

    res.json({
      success: true,
      reply
    });

  } catch (error) {

    console.error("Cofounder error:", error);

    res.status(500).json({
      success: false,
      message: "AI Cofounder failed"
    });

  }

};