import { Person } from "../../entities/person.entity";
import AppDataSource from "../../data-source";
import { ILocator } from "../../interfaces/locator";
import { Address } from "../../entities/address.entity";
import { NaturalPerson } from "../../entities/naturalPerson.entity";
import { LegalPerson } from "../../entities/legalPerson.entity";
import { hash } from "bcryptjs";
import { AppError } from "../../errors/appError";

const createLocatorService = async (data: ILocator) => {
  const personRepository = AppDataSource.getRepository(Person);
  const addressRepository = AppDataSource.getRepository(Address);
  const naturalPersonRepository = AppDataSource.getRepository(NaturalPerson);
  const legalPersonRepository = AppDataSource.getRepository(LegalPerson);

  const { address } = data;

  const persons = await personRepository.find();
  const naturalPersons = await naturalPersonRepository.find();
  const legalPersons = await legalPersonRepository.find();

  const emailAlreadyExists = persons.find(
    (person) => (person.email = data.email)
  );

  data.password = await hash(data.password, 10);

  const addressSave = addressRepository.create(address);
  await addressRepository.save(addressSave);

  if (data.legalPerson) {
    const { legal_person } = data;

    const cnpjAlreadyExists = legalPersons.find(
      (legalPerson) => legalPerson.cnpj === legal_person.cnpj
    );

    if (cnpjAlreadyExists) {
      throw new AppError("CNPJ already Exists");
    }

    const legalPersonSave = legalPersonRepository.create(legal_person);
    await legalPersonRepository.save(legalPersonSave);
  } else {
    const { natural_person } = data;

    const cpfAlreadyExists = naturalPersons.find(
      (naturalPerson) => naturalPerson.cpf === natural_person.cpf
    );

    if (cpfAlreadyExists) {
      throw new AppError("CPF already Exists");
    }

    const naturalPersonSave = naturalPersonRepository.create(natural_person);
    await naturalPersonRepository.save(naturalPersonSave);
  }
};

export { createLocatorService };
