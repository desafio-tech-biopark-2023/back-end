import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { Rent } from "../../entities/rent.entity";

const deleteRentService = async (id: string) => {
  const rentRepository = AppDataSource.getRepository(Rent);

  const rents = await rentRepository.find();

  const rent = rents.find((rent) => rent.id === id);

  if (!rent) {
    throw new AppError("Apartment not found", 404);
  }

  await rentRepository.delete(id);
};

export { deleteRentService };
