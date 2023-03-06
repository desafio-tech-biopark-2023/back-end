import { Request, Response } from "express";
import { listAllPersonsService } from "../../services/persons/listAllPersons.service";

const listAllProductsController = async (req: Request, res: Response) => {
  const personsList = await listAllPersonsService();

  return res.status(200).json(personsList);
};

export { listAllProductsController };
