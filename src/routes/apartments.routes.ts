import { Router } from "express";
import { handleErrorMiddleware } from "../middlewares/handleError.middleware";
import verifyIsLocator from "../middlewares/verifyIsLocator.middleware";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";
import { createApartmentController } from "../controllers/apartments/createApartment.controller";
import { listAllApartmentsController } from "../controllers/apartments/listAllApartments.controller";
import { listApartmentByIdController } from "../controllers/apartments/listApartmentById.controller";
import { deleteApartmentController } from "../controllers/apartments/deleteApartment.controller";

const apartments = Router();

const apartmentsRoutes = () => {
  apartments.post(
    "/apartments",
    verifyTokenMiddleware,
    verifyIsLocator,
    handleErrorMiddleware,
    createApartmentController
  );
  apartments.get("/apartments", listAllApartmentsController);
  apartments.get("/apartments/:id", listApartmentByIdController);
  apartments.delete("/apartments/:id", deleteApartmentController);

  return apartments;
};

export { apartmentsRoutes };
