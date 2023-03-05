import { Request, Response } from "express";
import { deleteBuildingService } from "../../services/building/deleteBuilding.service";

const deleteBuildingController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await deleteBuildingService(id);

  return res.sendStatus(204);
};

export { deleteBuildingController };
