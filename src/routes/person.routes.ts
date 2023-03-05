import { Router } from "express";
import { listAllProductsController } from "../controllers/persons/listAllPersons.controller";
import { createPersonController } from "../controllers/persons/createPerson.controller";
import { listPersonByIdController } from "../controllers/persons/listPersonById.controller";
import { deletePersonController } from "../controllers/persons/deletePerson.controller";
import updatePersonController from "../controllers/persons/updatePerson.controller";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";
import { handleErrorMiddleware } from "../middlewares/handleError.middleware";

const persons = Router();

const personRoutes = () => {
  persons.post("", createPersonController);
  persons.get("", listAllProductsController);
  persons.get("/:id", listPersonByIdController, handleErrorMiddleware);
  persons.patch("/:id", verifyTokenMiddleware, updatePersonController);
  persons.delete("/:id", verifyTokenMiddleware, deletePersonController);

  return persons;
};

export { personRoutes };
