import { Express } from "express";
import { personRoutes } from "./person.routes";

const appRoutes = (app: Express) => {
  app.use("/persons", personRoutes());
};

export { appRoutes };
