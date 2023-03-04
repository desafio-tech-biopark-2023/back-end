import { Express } from "express";
import { apartmentsRoutes } from "./apartments.routes";
import { buildingRoutes } from "./building.routes";
import { personRoutes } from "./person.routes";
import { sessionRoutes } from "./session.routes";

const appRoutes = (app: Express) => {
  app.use("/persons", personRoutes());
  app.use("/buildings", buildingRoutes(), apartmentsRoutes());
  app.use("/login", sessionRoutes());
  // app.use("/apartments", );
};

export { appRoutes };
