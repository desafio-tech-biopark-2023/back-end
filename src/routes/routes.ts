import { Express } from "express";
import { apartmentsRoutes } from "./apartments.routes";
import { buildingRoutes } from "./building.routes";
import { personRoutes } from "./person.routes";
import { rentsRoutes } from "./rent.routes";
import { sessionRoutes } from "./session.routes";

const appRoutes = (app: Express) => {
  app.use("/persons", personRoutes());
  app.use("/buildings", buildingRoutes());
  app.use("/login", sessionRoutes());
  app.use("/apartments", apartmentsRoutes());
  app.use("/rents", rentsRoutes());
};

export { appRoutes };
