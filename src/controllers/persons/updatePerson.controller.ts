import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { updatePersonService } from "../../services/persons/updatePerson.service";

const updatePersonController = async (request: Request, response: Response) => {
  const { id } = request.params;
  const data = request.body;

  const personUpdated = await updatePersonService(data, id);
  return response.status(200).json(instanceToPlain(personUpdated));
};

export default updatePersonController;
