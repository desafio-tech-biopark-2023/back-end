import AppDataSource from "../../data-source";
import { Apartment } from "../../entities/apartment.entity";

const listAllApartmentsService = async () => {
  const apartmentrepository = AppDataSource.getRepository(Apartment);
  const apartmentList = await apartmentrepository.find();

  return apartmentList;
};

export { listAllApartmentsService };
