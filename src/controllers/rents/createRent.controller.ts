import { Request, Response } from "express";
import { createRentService } from "../../services/rent/createRent.service";
import { handleError } from "../../errors/appError";
import { AppError } from "../../errors/appError";
import { instanceToInstance } from "class-transformer";

const createRentController = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const { idApartment } = req.params;
    const idPerson = req.user.id;

    const createdRent = await createRentService(data, idApartment, idPerson);

    return res.status(201).json(instanceToInstance(createdRent));
  } catch (error) {
    if (error instanceof AppError) {
      if (error instanceof AppError) {
        handleError(error, res);
      }
    }
  }
};

export { createRentController };
