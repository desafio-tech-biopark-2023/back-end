import { Request, Response } from "express";
import { handleError } from "../../errors/appError";
import { AppError } from "../../errors/appError";
import { listPersonByIdService } from "../../services/persons/listPersonById.service";

const listPersonByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const person = await listPersonByIdService(id);

    res.status(200).json(person);
  } catch (error) {
    if (error instanceof AppError) {
      if (error instanceof AppError) {
        handleError(error, res);
      }
    }
  }
};

export { listPersonByIdController };
