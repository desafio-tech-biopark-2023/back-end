import AppDataSource from "../../data-source";
import { Rent } from "../../entities/rent.entity";

const listAllRentsService = async () => {
  const rentRepository = AppDataSource.getRepository(Rent);
  const rentsList = await rentRepository.find();

  return rentsList;
};

export { listAllRentsService };
