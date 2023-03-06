import { Request, Response } from "express";
import { deletePersonService } from "../../services/persons/deletePerson.service";

const deletePersonController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deletePerson = await deletePersonService(id);

  return res.sendStatus(204);
};

export { deletePersonController };
