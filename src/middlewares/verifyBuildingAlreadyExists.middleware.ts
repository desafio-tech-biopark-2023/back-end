import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";
import AppDataSource from "../data-source";
import { IBuilding } from "../interfaces/locator";
import { Building } from "../entities/building.entity";

const verifyBuildingAlreadyExists = async (
  data: IBuilding,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const buildingRepository = AppDataSource.getRepository(Building);
    const buildings = await buildingRepository.find();
    const buildingAlreadyExists = buildings.find(
      (building) => building.name === data.name
    );
    if (buildingAlreadyExists) {
      throw new AppError("Building Already Exists");
    }

    return next();
  } catch (err) {
    if (err instanceof AppError) {
      const { statusCode, message } = err;
      throw new AppError(message, statusCode);
    }
  }
};

export default verifyBuildingAlreadyExists;
