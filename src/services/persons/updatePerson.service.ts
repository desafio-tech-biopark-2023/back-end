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

  const person = await personRepository.findOneBy({ id: id });

  const addressToUpdate: Address = await addressRepository.findOneBy({
    id: person.address.id,
  });

  if (data.address) {
    const { address } = data;

    await addressRepository.update(addressToUpdate.id, {
      city: address.city ? address.city : person.address.city,
      complement: address.complement
        ? address.complement
        : person.address.complement,
      country: address.country ? address.country : person.address.country,
      district: address.district ? address.district : person.address.district,
      number: address.number ? address.number : person.address.number,
      public_place: address.public_place
        ? address.public_place
        : person.address.public_place,
      state: address.state ? address.state : person.address.state,
      zip_code: address.zip_code ? address.zip_code : person.address.zip_code,
    });
  }

  if (data.natural_person) {
    const { natural_person } = data;

    const natural = person.natural_person.find(
      (natural) => natural.person.id === id
    );

    await naturalRepository.update(natural.id, {
      birth_date: natural_person.birth_date
        ? natural_person.birth_date
        : natural.birth_date,
      cpf: natural_person.cpf ? natural_person.cpf : natural.cpf,
      ethnicity: natural_person.ethnicity
        ? natural_person.ethnicity
        : natural.ethnicity,
      gender: natural_person.gender ? natural_person.gender : natural.gender,
      income: natural_person.income ? natural_person.income : natural.income,
      marital_status: natural_person.marital_status
        ? natural_person.marital_status
        : natural.marital_status,
      nationality: natural_person.nationality
        ? natural_person.nationality
        : natural.nationality,
      occupation: natural_person.occupation
        ? natural_person.occupation
        : natural.occupation,
      rg: natural_person.rg ? natural_person.rg : natural.rg,
    });
  }

  if (data.legal_person) {
    const { legal_person } = data;

    const legal = person.legal_person.find((legal) => legal.person.id === id);

    await legalRepository.update(legal.id, {
      cnpj: legal_person.cnpj ? legal_person.cnpj : legal.cnpj,
      fantasy_name: legal_person.fantasy_name
        ? legal_person.fantasy_name
        : legal.fantasy_name,
      incorporation_date: legal_person.incorporation_date
        ? legal_person.incorporation_date
        : legal.incorporation_date,
      regime_type: legal_person.regime_type
        ? legal_person.regime_type
        : legal.regime_type,
      registration: legal_person.registration
        ? legal_person.registration
        : legal.registration,
    });
  }

  await personRepository.update(person.id, {
    email: data.email ? data.email : person.email,
    name: data.name ? data.name : person.name,
    password: data.password ? await hash(data.password, 10) : person.password,
    telephone: data.telephone ? data.telephone : person.telephone,
  });

  return person;
};

export { updatePersonService };
