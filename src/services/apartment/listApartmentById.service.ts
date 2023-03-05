import AppDataSource from "../../data-source";
import { Apartment } from "../../entities/apartment.entity";
import { AppError } from "../../errors/appError";

const listApartmentByIdService = async (id: string) => {
  const apartmentRepository = AppDataSource.getRepository(Apartment);

  if (!id) {
    throw new AppError("ID required", 400);
  }

  const apartment = await apartmentRepository.findOneBy({
    id: id,
  });

  if (!apartment) {
    throw new AppError("Apartment not found", 400);
  }

  return apartment;
};

export { listApartmentByIdService };
