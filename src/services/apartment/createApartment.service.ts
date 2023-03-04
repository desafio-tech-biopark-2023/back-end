import { Apartment } from "../../entities/apartment.entity";
import { IApartment } from "../../interfaces/apartment";
import AppDataSource from "../../data-source";
import { Building } from "../../entities/building.entity";
import { AppError } from "../../errors/appError";

const createApartmentService = async (data: IApartment, idbuilding: string) => {
  const apartmentRepository = AppDataSource.getRepository(Apartment);
  const buildingRepository = AppDataSource.getRepository(Building);

  const apartments = await apartmentRepository.find();

  const apartmentAlreadyExists = apartments.find(
    (apartment) => apartment.number === data.number
  );

  if (apartmentAlreadyExists) {
    throw new AppError("Apartment already exists");
  }

  const building = await buildingRepository.findOneBy({
    id: idbuilding,
  });

  const apartmentSave: Apartment = apartmentRepository.create({
    ...data,
    building: building,
  });

  const apartment = await apartmentRepository.save(apartmentSave);

  return apartment;
};

export { createApartmentService };
