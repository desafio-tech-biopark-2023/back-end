import "reflect-metadata";
import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";
import { Person } from "./entities/person.entity";
import { NaturalPerson } from "./entities/naturalPerson.entity";
import { LegalPerson } from "./entities/legalPerson.entity";
import { Building } from "./entities/building.entity";
import { Apartment } from "./entities/apartment.entity";
import { Address } from "./entities/address.entity";
import { Rent } from "./entities/rent.entity";
import { entityRent1677888955568 } from "./migrations/1677888955568-entityRent";

const setDataSourceConfig = (): DataSourceOptions => {
  const nodeEnv = process.env.NODE_ENV;

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [
        Person,
        NaturalPerson,
        LegalPerson,
        Building,
        Apartment,
        Address,
      ],
    };
  }

  if (nodeEnv === "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [
        Person,
        NaturalPerson,
        LegalPerson,
        Building,
        Apartment,
        Address,
      ],
      migrations: [entityRent1677888955568],
    };
  }

  return {
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: parseInt(process.env.POSTGRES_PORT),
    database: process.env.POSTGRES_DB,
    synchronize: false,
    logging: true,
    entities: [
      Person,
      NaturalPerson,
      LegalPerson,
      Building,
      Apartment,
      Address,
      Rent,
    ],
    migrations: [entityRent1677888955568],
  };
};

const dataSourceConfig = setDataSourceConfig();
export default new DataSource(dataSourceConfig);
