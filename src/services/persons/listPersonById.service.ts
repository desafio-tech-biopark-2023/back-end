import AppDataSource from "../../data-source";
import { Person } from "../../entities/person.entity";
import { AppError } from "../../errors/appError";

const listPersonByIdService = async (id: string) => {
  const personRepository = AppDataSource.getRepository(Person);

  if (!id) {
    throw new AppError("ID required", 400);
  }

  const person = await personRepository.findOneBy({
    id: id,
  });

  if (!person) {
    throw new AppError("Person not found", 400);
  }

  return person;
};

export { listPersonByIdService };
