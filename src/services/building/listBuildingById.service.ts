import AppDataSource from "../../data-source";
import { Building } from "../../entities/building.entity";
import { AppError } from "../../errors/appError";

const listBuildingByIdService = async (id: string) => {
  const buildingrepository = AppDataSource.getRepository(Building);

  if (!id) {
    throw new AppError("ID required", 400);
  }

  const building = await buildingrepository.findOneBy({
    id: id,
  });

  if (!building) {
    throw new AppError("Building not found", 400);
  }

  return building;
};

export { listBuildingByIdService };
