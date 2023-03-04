import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import { handleError } from "../../errors/appError";
import { AppError } from "../../errors/appError";
import { createApartmentService } from "../../services/apartment/createApartment.service";

const createApartmentController = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const { idBuilding } = req.params;

    const createdApartment = await createApartmentService(data, idBuilding);

    return res.status(201).json(instanceToInstance(createdApartment));
  } catch (error) {
    if (error instanceof AppError) {
      if (error instanceof AppError) {
        handleError(error, res);
      }
    }
  }
};

export { createApartmentController };
