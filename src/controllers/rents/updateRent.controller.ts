import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { updateRentService } from "../../services/rent/updateRent.service";

const updateRentController = async (request: Request, response: Response) => {
  const { id } = request.params;
  const data = request.body;

  const rentUpdated = await updateRentService(data, id);
  return response.status(200).json(instanceToPlain(rentUpdated));
};

export default updateRentController;
