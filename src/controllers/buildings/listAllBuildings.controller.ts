import { Request, Response } from "express";
import { listAllBuildingsService } from "../../services/building/listAllBuildings.service";

const listAllBuildingsController = async (req: Request, res: Response) => {
  const buildingsList = await listAllBuildingsService();

  return res.status(200).json(buildingsList);
};

export { listAllBuildingsController };
