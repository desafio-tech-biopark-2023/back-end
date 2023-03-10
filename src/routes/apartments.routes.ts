import { Router } from "express";
import { handleErrorMiddleware } from "../middlewares/handleError.middleware";
import verifyIsLocator from "../middlewares/verifyIsLocator.middleware";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";
import { createApartmentController } from "../controllers/apartments/createApartment.controller";
import { listAllApartmentsController } from "../controllers/apartments/listAllApartments.controller";
import { listApartmentByIdController } from "../controllers/apartments/listApartmentById.controller";
import { deleteApartmentController } from "../controllers/apartments/deleteApartment.controller";
import updateApartmentController from "../controllers/apartments/updateApartment.controller";

const apartments = Router();

const apartmentsRoutes = () => {
  apartments.post(
    "/:id_building",
    verifyTokenMiddleware,
    verifyIsLocator,
    handleErrorMiddleware,
    createApartmentController
  );
  apartments.get("", listAllApartmentsController);
  apartments.get("/:id", listApartmentByIdController);
  apartments.patch(
    "/:id",
    verifyTokenMiddleware,
    verifyIsLocator,
    updateApartmentController
  );
  apartments.delete(
    "/:id",
    verifyTokenMiddleware,
    verifyIsLocator,
    deleteApartmentController
  );

  return apartments;
};

export { apartmentsRoutes };
