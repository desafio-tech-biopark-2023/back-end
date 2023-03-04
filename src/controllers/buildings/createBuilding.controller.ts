import { Request, Response } from "express";
import { instanceToInstance } from "class-transformer";
import { createBuildingService } from "../../services/building/createBuilding.service";

const createBuildingController = async (req: Request, res: Response) => {
  const data = req.body;
  const id = req.user.id;

  const createdBuilding = await createBuildingService(data, id);
  return res.status(201).json(instanceToInstance(createdBuilding));
};

export { createBuildingController };
