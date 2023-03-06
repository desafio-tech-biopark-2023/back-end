import AppDataSource from "../../data-source";
import { Person } from "../../entities/person.entity";

const listAllPersonsService = async () => {
  const personRepository = AppDataSource.getRepository(Person);
  const personsList = await personRepository.find();

  return personsList;
};

export { listAllPersonsService };
