import { Router } from "express";
import { listAllProductsController } from "../controllers/persons/listAllPersons.controller";
import { createPersonController } from "../controllers/persons/createPerson.controller";
import { listPersonByIdController } from "../controllers/persons/listPersonById.controller";
import { listPersonsByTypeController } from "../controllers/persons/listPersonsByType.controller";

const persons = Router();

const personRoutes = () => {
  persons.post("", createPersonController);
  persons.get("", listAllProductsController);
  persons.get("/:id", listPersonByIdController);
  // persons.get("/", listPersonsByTypeController);

  return persons;
};

export { personRoutes };
