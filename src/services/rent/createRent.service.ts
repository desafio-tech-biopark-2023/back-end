import { IRentData } from "../../interfaces/rent";
import AppDataSource from "../../data-source";
import { Person } from "../../entities/person.entity";
import { Apartment } from "../../entities/apartment.entity";
import { Rent } from "../../entities/rent.entity";
import { AppError } from "../../errors/appError";

const createRentService = async (
  data: IRentData,
  idApartment: string,
  idPerson: string
) => {
  const personRepository = AppDataSource.getRepository(Person);
  const apartmentRepository = AppDataSource.getRepository(Apartment);
  const rentRepository = AppDataSource.getRepository(Rent);

  const person = await personRepository.findOneBy({
    id: idPerson,
  });

  const apartment = await apartmentRepository.findOneBy({
    id: idApartment,
  });

  if (apartment.available !== "Sim") {
    throw new AppError("Apartment is not available");
  }

  const rentSave: Rent = rentRepository.create({
    ...data,
    person: person,
    apartment: apartment,
  });

  const rent = await rentRepository.save(rentSave);

  const newRent = await rentRepository.findOne({
    where: {
      id: rent.id,
    },
    relations: {
      apartment: true,
      person: true,
    },
  });

  await personRepository.update(newRent.person.id, {
    rent: newRent,
  });

  await apartmentRepository.update(newRent.apartment.id, {
    rent: newRent,
    person: newRent.person,
    available: "Não",
  });

  return newRent;
};

export { createRentService };
