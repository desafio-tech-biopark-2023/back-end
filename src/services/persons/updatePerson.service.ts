import AppDataSource from "../../data-source";
import { Person } from "../../entities/person.entity";
import { Address } from "../../entities/address.entity";
import { NaturalPerson } from "../../entities/naturalPerson.entity";
import { LegalPerson } from "../../entities/legalPerson.entity";
import { IPersonUpdate } from "../../interfaces/locator";
import { hash } from "bcryptjs";

const updatePersonService = async (data: IPersonUpdate, id: string) => {
  const personRepository = AppDataSource.getRepository(Person);
  const addressRepository = AppDataSource.getRepository(Address);
  const naturalRepository = AppDataSource.getRepository(NaturalPerson);
  const legalRepository = AppDataSource.getRepository(LegalPerson);

  const person = await personRepository.findOne({
    where: {
      id,
    },
    relations: {
      address: true,
      natural_person: true,
      legal_person: true,
    },
  });

  const addressToUpdate: Address = person.address;

  if (data.address) {
    const { address } = data;

    await addressRepository.update(addressToUpdate.id, {
      ...address,
    });
  }

  if (person.naturalPerson) {
    if (data.natural_person) {
      const { natural_person } = data;

      const naturalToUpdate = person.natural_person;

      await naturalRepository.update(naturalToUpdate.id, {
        ...natural_person,
      });
    }
  }

  if (person.legalPerson) {
    if (data.legal_person) {
      const { legal_person } = data;

      const legalToUpdate = person.legal_person;

      await legalRepository.update(legalToUpdate.id, {
        ...legal_person,
      });
    }
  }

  await personRepository.update(person.id, {
    email: data.email ? data.email : person.email,
    name: data.name ? data.name : person.name,
    password: data.password ? await hash(data.password, 10) : person.password,
    telephone: data.telephone ? data.telephone : person.telephone,
  });

  const newPerson = await personRepository.findOne({
    where: {
      id,
    },
    relations: {
      address: true,
      natural_person: true,
      legal_person: true,
    },
  });

  return newPerson;
};

export { updatePersonService };
