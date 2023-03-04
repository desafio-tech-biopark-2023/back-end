import AppDataSource from "../../data-source";
import { Person } from "../../entities/person.entity";
import { Building } from "../../entities/building.entity";
import { IBuilding } from "../../interfaces/locator";
import { AppError } from "../../errors/appError";

const createBuildingService = async (data: IBuilding, id: string) => {
  const personRepository = AppDataSource.getRepository(Person);
  const buildingRepository = AppDataSource.getRepository(Building);

  const personLocator = await personRepository.findOneBy({
    id: id,
  });

  const buildings = await buildingRepository.find();

  const buildingAlreadyExists = buildings.find(
    (building) => building.name === data.name
  );

  if (buildingAlreadyExists) {
    throw new AppError("Building Already Exists");
  }

  const buildingSave: Building = buildingRepository.create({
    person: personLocator,
    ...data,
  });

  const building = await buildingRepository.save(buildingSave);

  return building;
};

export { createBuildingService };
