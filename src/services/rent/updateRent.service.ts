import AppDataSource from "../../data-source";
import { Rent } from "../../entities/rent.entity";
import { IRentPartial } from "../../interfaces/rent";
import { AppError } from "../../errors/appError";

const updateRentService = async (data: IRentPartial, id: string) => {
  const rentRepository = AppDataSource.getRepository(Rent);

  if (!id) {
    throw new AppError("Id is required");
  }

  const rent = await rentRepository.findOneBy({ id });

  if (!rent) {
    throw new AppError("Rent not found");
  }

  await rentRepository.update(rent.id, {
    ...data,
  });

  const newRent = await rentRepository.findOneBy({ id });

  return newRent;
};

export { updateRentService };
