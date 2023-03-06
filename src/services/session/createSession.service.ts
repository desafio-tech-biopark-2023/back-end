import { ILogin } from "../../interfaces/login";
import { Person } from "../../entities/person.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { compareSync } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createSessionService = async (data: ILogin) => {
  if (!data.email) {
    throw new AppError("Field email is required");
  }

  if (!data.password) {
    throw new AppError("Field password is required");
  }

  const personRepository = AppDataSource.getRepository(Person);

  const persons = await personRepository.find();

  const accountPerson = persons.find((person) => person.email === data.email);

  if (!accountPerson) {
    throw new AppError("Account not found", 403);
  }

  if (!compareSync(data.password, accountPerson.password)) {
    throw new AppError("Wrong email/password");
  }

  const token = jwt.sign(
    {
      username: accountPerson.name,
      id: accountPerson.id,
      type: accountPerson.type,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: accountPerson.id,
    }
  );

  return { token: token };
};

export { createSessionService };
