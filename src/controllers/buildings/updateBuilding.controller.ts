import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { updateBuildingService } from "../../services/building/updateBuilding.service";

const updateBuildingController = async (
  request: Request,
  response: Response
) => {
  const { id } = request.params;
  const data = request.body;

  const buildingUpdated = await updateBuildingService(data, id);
  return response.status(200).json(instanceToPlain(buildingUpdated));
};

export default updateBuildingController;
