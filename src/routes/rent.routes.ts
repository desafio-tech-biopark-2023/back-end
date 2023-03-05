import { Router } from "express";
import { handleErrorMiddleware } from "../middlewares/handleError.middleware";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";
import { createRentController } from "../controllers/rents/createRent.controller";
import { listAllRentsController } from "../controllers/rents/listAllRents.controller";
import { listRentByIdController } from "../controllers/rents/listRentById.controller";
import { deleteRentController } from "../controllers/rents/deleteRent.controller";
import updateRentController from "../controllers/rents/updateRent.controller";
import verifyIsLocator from "../middlewares/verifyIsLocator.middleware";

const rents = Router();

const rentsRoutes = () => {
  rents.post(
    "/rents",
    verifyTokenMiddleware,
    handleErrorMiddleware,
    createRentController
  );
  rents.get("/rents", listAllRentsController);
  rents.get("/rents/:id", listRentByIdController);
  rents.patch(
    "/rents/:id",
    verifyTokenMiddleware,
    verifyIsLocator,
    updateRentController
  );
  rents.delete(
    "/rents/:id",
    verifyTokenMiddleware,
    verifyIsLocator,
    deleteRentController
  );

  return rents;
};

export { rentsRoutes };
