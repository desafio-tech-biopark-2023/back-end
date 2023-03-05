import { Request, Response } from "express";
import { listAllRentsService } from "../../services/rent/listAllRents.service";

const listAllRentsController = async (req: Request, res: Response) => {
  const rentsList = await listAllRentsService();

  return res.status(200).json(rentsList);
};

export { listAllRentsController };
