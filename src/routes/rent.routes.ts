import { Router } from "express";
import { handleErrorMiddleware } from "../middlewares/handleError.middleware";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";
import { createRentController } from "../controllers/rents/createRent.controller";
import { listAllRentsController } from "../controllers/rents/listAllRents.controller";
import { listRentByIdController } from "../controllers/rents/listRentById.controller";
import { deleteRentController } from "../controllers/rents/deleteRent.controller";

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
  rents.delete("/rents/:id", deleteRentController);

  return rents;
};

export { rentsRoutes };
