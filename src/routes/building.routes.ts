import { Router } from "express";
import { handleErrorMiddleware } from "../middlewares/handleError.middleware";
import verifyIsLocator from "../middlewares/verifyIsLocator.middleware";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";
import { createBuildingController } from "../controllers/buildings/createBuilding.controller";
import { listAllBuildingsController } from "../controllers/buildings/listAllBuildings.controller";
import { listBuildingByIdController } from "../controllers/buildings/listBuildingById.controller";
import { deleteBuildingController } from "../controllers/buildings/deleteBuilding.controller";
import updateBuildingController from "../controllers/buildings/updateBuilding.controller";

const buildings = Router();

const buildingRoutes = () => {
  buildings.post(
    "",
    verifyTokenMiddleware,
    verifyIsLocator,
    handleErrorMiddleware,
    createBuildingController
  );
  buildings.get("", listAllBuildingsController);
  buildings.get("/:id", listBuildingByIdController);
  buildings.patch(
    "/:id",
    verifyTokenMiddleware,
    verifyIsLocator,
    updateBuildingController
  );
  buildings.delete(
    "/:id",
    verifyTokenMiddleware,
    verifyIsLocator,
    deleteBuildingController
  );

  return buildings;
};

export { buildingRoutes };
