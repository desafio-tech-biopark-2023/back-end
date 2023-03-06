import { Request, Response } from "express";
import { deleteRentService } from "../../services/rent/deleteRent.service";

const deleteRentController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await deleteRentService(id);

  return res.sendStatus(204);
};

export { deleteRentController };
