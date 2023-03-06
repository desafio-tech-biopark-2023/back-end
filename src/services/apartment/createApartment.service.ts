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

  const apartmentSave = apartmentRepository.create({
    available: data.available,
    bathrooms: data.bathrooms,
    dorms: data.dorms,
    floor: data.floor,
    number: data.number,
    private_area: data.private_area,
    suites: data.suites,
    total_area: data.total_area,
    type: data.type,
    vacancies: data.vacancies,
    visible: data.visible,
    value_rent: data.value_rent,
    building: building,
  });

  const apartment = await apartmentRepository.save(apartmentSave);

  return apartment;
};

export { createApartmentService };
