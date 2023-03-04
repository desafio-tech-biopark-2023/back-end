import { Express } from "express";
import { buildingRoutes } from "./building.routes";
import { personRoutes } from "./person.routes";

const appRoutes = (app: Express) => {
  app.use("/persons", personRoutes());
  app.use("/buildings", buildingRoutes());
};

export { appRoutes };
