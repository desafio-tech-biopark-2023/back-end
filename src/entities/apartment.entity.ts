import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Building } from "./building.entity";
import { Person } from "./person.entity";
import { Rent } from "./rent.entity";

@Entity("apartment")
class Apartment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  type: string;

  @Column()
  floor: string;

  @Column()
  number: string;

  @Column()
  dorms: string;

  @Column()
  suites: string;

  @Column()
  bathrooms: string;

  @Column()
  vacancies: string;

  @Column()
  total_area: string;

  @Column()
  private_area: string;

  @Column()
  available: string;

  @Column()
  visible: string;

  @Column()
  value_rent: string;

  @ManyToOne(() => Person, (person) => person.apartment, {
    onDelete: "NO ACTION",
    eager: true,
  })
  person: Person;

  @ManyToOne(() => Building, (building) => building.apartment, {
    onDelete: "NO ACTION",
    eager: true,
  })
  building: Building;

  @OneToOne(() => Rent, (rent) => rent.apartment, {
    onDelete: "SET NULL",
  })
  @JoinColumn()
  rent: Rent;
}

export { Apartment };
