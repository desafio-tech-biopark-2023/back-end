import AppDataSource from "../../data-source";
import { Building } from "../../entities/building.entity";

const listAllBuildingsService = async () => {
  const buildingRepository = AppDataSource.getRepository(Building);
  const buildingList = await buildingRepository.find();

  return buildingList;
};

export { listAllBuildingsService };
