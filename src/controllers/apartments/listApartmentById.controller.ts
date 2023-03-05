import { Request, Response } from "express";
import { listApartmentByIdService } from "../../services/apartment/listApartmentById.service";

const listApartmentByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const apartment = await listApartmentByIdService(id);

  res.status(200).json(apartment);
};

export { listApartmentByIdController };
