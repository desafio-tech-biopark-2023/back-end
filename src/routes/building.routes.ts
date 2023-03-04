import { Router } from "express";
import { handleErrorMiddleware } from "../middlewares/handleError.middleware";
import verifyBuildingAlreadyExists from "../middlewares/verifyBuildingAlreadyExists.middleware";
import verifyIsLocator from "../middlewares/verifyIsLocator.middleware";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";
import { createBuildingController } from "../controllers/buildings/createBuilding.controller";

const buildings = Router();

const buildingRoutes = () => {
  buildings.post(
    "",
    verifyTokenMiddleware,
    verifyIsLocator,
    handleErrorMiddleware,
    createBuildingController
  );

  return buildings;
};

export { buildingRoutes };
