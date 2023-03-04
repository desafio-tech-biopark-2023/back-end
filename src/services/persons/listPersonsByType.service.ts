import { AppError } from "../../errors/appError";
import AppDataSource from "../../data-source";
import { Person } from "../../entities/person.entity";

const listPersonsByTypeService = async (type: string) => {
  const personRepository = AppDataSource.getRepository(Person);

  console.log(type);

  if (!type) {
    throw new AppError("Type is required", 400);
  }

  const persons = await personRepository.find();

  const personsByType = persons.find((person) => person.type === type);

  if (!personsByType) {
    throw new AppError("No user of this type found");
  }

  return personsByType;
};

export { listPersonsByTypeService };
