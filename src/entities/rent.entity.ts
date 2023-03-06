import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
} from "typeorm";
import { Apartment } from "./apartment.entity";
import { Person } from "./person.entity";

@Entity("rent")
class Rent {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  monthly_rent_value: string;

  @Column()
  date_start_rent: string;

  @Column()
  date_end_rent: string;

  @OneToOne(() => Person, (person) => person.rent, {
    onDelete: "SET NULL",
  })
  @JoinColumn()
  person: Person;

  @OneToOne(() => Apartment, (apartment) => apartment.rent, {
    onDelete: "SET NULL",
  })
  @JoinColumn()
  apartment: Apartment;
}

export { Rent };
