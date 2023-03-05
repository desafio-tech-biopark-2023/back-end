import AppDataSource from "../../data-source";
import { Rent } from "../../entities/rent.entity";
import { AppError } from "../../errors/appError";

const listRentByIdService = async (id: string) => {
  const rentRepository = AppDataSource.getRepository(Rent);

  if (!id) {
    throw new AppError("ID required", 400);
  }

  const rent = await rentRepository.findOneBy({
    id: id,
  });

  if (!rent) {
    throw new AppError("Rent not found", 400);
  }

  return rent;
};

export { listRentByIdService };
