import { Person } from "../../entities/person.entity";
import AppDataSource from "../../data-source";
import { ILocator, ILocatorRequest } from "../../interfaces/locator";
import { Address } from "../../entities/address.entity";
import { NaturalPerson } from "../../entities/naturalPerson.entity";
import { LegalPerson } from "../../entities/legalPerson.entity";
import { hash } from "bcryptjs";
import { AppError } from "../../errors/appError";

const createPersonService = async (data: ILocator) => {
  const personRepository = AppDataSource.getRepository(Person);
  const addressRepository = AppDataSource.getRepository(Address);
  const naturalPersonRepository = AppDataSource.getRepository(NaturalPerson);
  const legalPersonRepository = AppDataSource.getRepository(LegalPerson);

  const persons = await personRepository.find();
  const naturalPersons = await naturalPersonRepository.find();
  const legalPersons = await legalPersonRepository.find();

  const emailAlreadyExists = persons.find(
    (person) => person.email === data.email
  );
  if (emailAlreadyExists) {
    throw new AppError("Email already Exists");
  }

  data.password = await hash(data.password, 10);

  const addressSave = addressRepository.create(data.address);
  await addressRepository.save(addressSave);

  const address = await addressRepository.findOneBy({ id: addressSave.id });

  const person: Person = personRepository.create({
    address: address,
    name: data.name,
    email: data.email,
    legalPerson: data.legalPerson,
    naturalPerson: data.naturalPerson,
    password: data.password,
    telephone: data.telephone,
    type: data.type,
  });

  await personRepository.save(person);

  await addressRepository.update(address.id, {
    person: person,
  });

  if (data.legalPerson) {
    const { legal_person } = data;

    const cnpjAlreadyExists = legalPersons.find(
      (legalPerson) => legalPerson.cnpj === legal_person.cnpj
    );

    if (cnpjAlreadyExists) {
      throw new AppError("CNPJ already Exists");
    }

    const legalPersonSave = legalPersonRepository.create({
      person: person,
      ...legal_person,
    });
    await legalPersonRepository.save(legalPersonSave);
  }

  if (data.naturalPerson) {
    const { natural_person } = data;

    const cpfAlreadyExists = naturalPersons.find(
      (naturalPerson) => naturalPerson.cpf === natural_person.cpf
    );

    if (cpfAlreadyExists) {
      throw new AppError("CPF already Exists");
    }

    const naturalPersonSave = naturalPersonRepository.create({
      person: person,
      ...natural_person,
    });
    await naturalPersonRepository.save(naturalPersonSave);
  }

  return person;
};

export { createPersonService };
