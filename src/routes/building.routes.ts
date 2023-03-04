import { Router } from "express";
import { createBuildingController } from "../controllers/buildings/createBuilding.controller";

const buildings = Router();

const buildingRoutes = () => {
  buildings.post("", createBuildingController);

  return buildings;
};

export { buildingRoutes };
