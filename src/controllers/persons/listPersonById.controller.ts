import { Request, Response } from "express";
import { listPersonByIdService } from "../../services/persons/listPersonById.service";

const listPersonByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const person = await listPersonByIdService(id);

  res.status(200).json(person);
};

export { listPersonByIdController };
