import { Request, Response } from "express";
import { listBuildingByIdService } from "../../services/building/listBuildingById.service";

const listBuildingByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const building = await listBuildingByIdService(id);

  res.status(200).json(building);
};

export { listBuildingByIdController };
