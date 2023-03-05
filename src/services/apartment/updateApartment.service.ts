import AppDataSource from "../../data-source";
import { Apartment } from "../../entities/apartment.entity";
import { IApartmentData } from "../../interfaces/apartment";
import { AppError } from "../../errors/appError";

const updateApartmentService = async (data: IApartmentData, id: string) => {
  const apartmentRepository = AppDataSource.getRepository(Apartment);

  if (!id) {
    throw new AppError("Id is required");
  }

  const apartment = await apartmentRepository.findOneBy({ id });

  if (!apartment) {
    throw new AppError("Apartment not found");
  }

  await apartmentRepository.update(apartment.id, {
    ...data,
  });

  const newApartment = await apartmentRepository.findOneBy({ id });

  return newApartment;
};

export { updateApartmentService };
