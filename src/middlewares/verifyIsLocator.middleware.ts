import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";
import AppDataSource from "../data-source";
import { Person } from "../entities/person.entity";

const verifyIsLocator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.user.id;

    const personRepository = AppDataSource.getRepository(Person);

    const person = await personRepository.findOne({
      where: { id },
    });

    if (person.type !== "Locador") {
      throw new AppError(
        "Registration of buildings allowed only for Locador",
        401
      );
    }

    return next();
  } catch (err) {
    if (err instanceof AppError) {
      const { statusCode, message } = err;
      throw new AppError(message, statusCode);
    }
  }
};

export default verifyIsLocator;
