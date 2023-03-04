import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
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
  date_start_rent: Date;

  @Column()
  date_end_rent: Date;

  @OneToOne(() => Person, (person) => person.rent, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  person: Person;

  @OneToOne(() => Apartment, (apartment) => apartment.rent, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  apartment: Apartment;
}

export { Rent };
