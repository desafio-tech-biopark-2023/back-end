import { Request, Response } from "express";
import { listRentByIdService } from "../../services/rent/listRentById.service";

const listRentByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const rent = await listRentByIdService(id);

  res.status(200).json(rent);
};

export { listRentByIdController };
