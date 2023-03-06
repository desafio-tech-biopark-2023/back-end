import AppDataSource from "../../data-source";
import { Apartment } from "../../entities/apartment.entity";

const listAllApartmentsService = async () => {
  const apartmentrepository = AppDataSource.getRepository(Apartment);
  const apartmentList = await apartmentrepository.find({
    relations: {
      building: true,
    },
  });

  return apartmentList;
};

export { listAllApartmentsService };
