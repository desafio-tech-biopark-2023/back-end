import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { updateApartmentService } from "../../services/apartment/updateApartment.service";

const updateApartmentController = async (
  request: Request,
  response: Response
) => {
  const { id } = request.params;
  const data = request.body;

  const apartmentUpdated = await updateApartmentService(data, id);
  return response.status(200).json(instanceToPlain(apartmentUpdated));
};

export default updateApartmentController;
