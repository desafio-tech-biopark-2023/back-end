import { Router } from "express";
import { listAllProductsController } from "../controllers/persons/listAllPersons.controller";
import { createPersonController } from "../controllers/persons/createPerson.controller";
import { listPersonByIdController } from "../controllers/persons/listPersonById.controller";
import { listPersonsByTypeController } from "../controllers/persons/listPersonsByType.controller";
import { deletePersonController } from "../controllers/persons/deletePerson.controller";
import updatePersonController from "../controllers/persons/updatePerson.controller";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";

const persons = Router();

const personRoutes = () => {
  persons.post("", createPersonController);
  persons.get("", listAllProductsController);
  persons.get("/:id", listPersonByIdController);
  persons.patch("/:id", verifyTokenMiddleware, updatePersonController);
  persons.delete("/:id", deletePersonController);
  // persons.get("/", listPersonsByTypeController);

  return persons;
};

export { personRoutes };
