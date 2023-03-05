import { Request, Response } from "express";
import { listAllApartmentsService } from "../../services/apartment/listAllApartments.service";

const listAllApartmentsController = async (req: Request, res: Response) => {
  const apartmentsList = await listAllApartmentsService();

  return res.status(200).json(apartmentsList);
};

export { listAllApartmentsController };
