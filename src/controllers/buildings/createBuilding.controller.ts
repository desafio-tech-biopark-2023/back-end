import { Request, Response } from "express";
import { instanceToInstance } from "class-transformer";
import { createBuildingService } from "../../services/building/createBuilding.service";
import { AppError, handleError } from "../../errors/appError";

const createBuildingController = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const id = req.user.id;

    const createdBuilding = await createBuildingService(data, id);
    return res.status(201).json(instanceToInstance(createdBuilding));
  } catch (error) {
    if (error instanceof AppError) {
      if (error instanceof AppError) {
        handleError(error, res);
      }
    }
  }
};

export { createBuildingController };
