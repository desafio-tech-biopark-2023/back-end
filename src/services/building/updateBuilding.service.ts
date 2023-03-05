import AppDataSource from "../../data-source";
import { Building } from "../../entities/building.entity";
import { IBuilding } from "../../interfaces/locator";
import { AppError } from "../../errors/appError";

const updateBuildingService = async (data: IBuilding, id: string) => {
  const buildingRepository = AppDataSource.getRepository(Building);

  if (!id) {
    throw new AppError("Id is required");
  }

  const building = await buildingRepository.findOneBy({ id });

  if (!building) {
    throw new AppError("Building not found");
  }

  await buildingRepository.update(building.id, {
    ...data,
  });

  const newBuilding = await buildingRepository.findOneBy({ id });

  return newBuilding;
};

export { updateBuildingService };
