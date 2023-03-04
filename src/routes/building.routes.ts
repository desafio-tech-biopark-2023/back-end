import { Router } from "express";
import { handleErrorMiddleware } from "../middlewares/handleError.middleware";
import verifyIsLocator from "../middlewares/verifyIsLocator.middleware";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";
import { createBuildingController } from "../controllers/buildings/createBuilding.controller";
import { apartmentsRoutes } from "./apartments.routes";

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
