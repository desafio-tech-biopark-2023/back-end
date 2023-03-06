import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { Building } from "../../entities/building.entity";

const deleteBuildingService = async (id: string) => {
  const buildingRepository = AppDataSource.getRepository(Building);

  const buildings = await buildingRepository.find();

  const building = buildings.find((building) => building.id === id);

  if (!building) {
    throw new AppError("Building not found", 404);
  }

  await buildingRepository.delete(id);
};

export { deleteBuildingService };
