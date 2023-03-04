import { Router } from "express";
import { handleErrorMiddleware } from "../middlewares/handleError.middleware";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";
import { createRentController } from "../controllers/rents/createRent.controller";

const rents = Router();

const rentsRoutes = () => {
  rents.post(
    "/rents",
    verifyTokenMiddleware,
    handleErrorMiddleware,
    createRentController
  );

  return rents;
};

export { rentsRoutes };
