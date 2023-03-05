import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { Apartment } from "../../entities/apartment.entity";

const deleteApartmentService = async (id: string) => {
  const apartmentRepository = AppDataSource.getRepository(Apartment);

  const apartments = await apartmentRepository.find();

  const apartment = apartments.find((apartment) => apartment.id === id);

  if (!apartment) {
    throw new AppError("Apartment not found", 404);
  }

  await apartmentRepository.delete(id);
};

export { deleteApartmentService };
