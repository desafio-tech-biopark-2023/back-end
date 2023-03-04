import { Express } from "express";
import { buildingRoutes } from "./building.routes";
import { personRoutes } from "./person.routes";
import { sessionRoutes } from "./session.routes";

const appRoutes = (app: Express) => {
  app.use("/persons", personRoutes());
  app.use("/buildings", buildingRoutes());
  app.use("/login", sessionRoutes());
};

export { appRoutes };
