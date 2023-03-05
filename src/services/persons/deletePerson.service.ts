import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { Person } from "../../entities/person.entity";

const deletePersonService = async (id: string) => {
  const personRepository = AppDataSource.getRepository(Person);

  const persons = await personRepository.find();

  const person = persons.find((person) => person.id === id);

  if (!person) {
    throw new AppError("Person not found", 404);
  }

  await personRepository.delete(id);
};

export { deletePersonService };
