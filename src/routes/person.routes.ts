import { Router } from "express";
import { createPersonController } from "../controllers/persons/createPerson.controller";

const persons = Router();

const personRoutes = () => {
  persons.post("", createPersonController);

  return persons;
};

export { personRoutes };
