import { Request, Response } from "express";
import { createPersonService } from "../../services/persons/createPerson.service";
import { instanceToInstance } from "class-transformer";

const createPersonController = async (req: Request, res: Response) => {
  const data = req.body;
  const createdPerson = await createPersonService(data);

  return res.status(201).json(instanceToInstance(createdPerson));
};

export { createPersonController };
