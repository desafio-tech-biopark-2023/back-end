import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Apartment } from "./apartment.entity";
import { Person } from "./person.entity";

@Entity("building")
class Building {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  type: string;

  @Column()
  floors: string;

  @Column()
  logo: string;

  @Column()
  apartments_per_floor: string;

  @Column()
  apartments_available: string;

  @ManyToOne(() => Person, (person) => person.building, {
    onDelete: "SET NULL",
    eager: true,
  })
  person: Person;

  @OneToMany(() => Apartment, (apartment) => apartment.building, {
    onDelete: "CASCADE",
  })
  apartment: Apartment[];
}

export { Building };
