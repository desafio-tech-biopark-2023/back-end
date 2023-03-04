import { Router } from "express";
import { handleErrorMiddleware } from "../middlewares/handleError.middleware";
import verifyIsLocator from "../middlewares/verifyIsLocator.middleware";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";
import { createApartmentController } from "../controllers/apartments/createApartment.controller";
import { rentsRoutes } from "./rent.routes";

const apartments = Router();

const apartmentsRoutes = () => {
  apartments.post(
    "/apartments",
    verifyTokenMiddleware,
    verifyIsLocator,
    handleErrorMiddleware,
    createApartmentController
  );

  return apartments;
};

export { apartmentsRoutes };
