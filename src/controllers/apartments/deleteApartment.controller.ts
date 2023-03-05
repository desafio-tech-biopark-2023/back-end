import { Request, Response } from "express";
import { deleteApartmentService } from "../../services/apartment/deleteApartment.service";

const deleteApartmentController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await deleteApartmentService(id);

  return res.sendStatus(204);
};

export { deleteApartmentController };
