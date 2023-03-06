import { Request, Response } from "express";
import { createSessionService } from "../../services/session/createSession.service";
import { AppError, handleError } from "../../errors/appError";

const createSessionController = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const token = await createSessionService(data);
    return res.status(200).json(token);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export { createSessionController };
