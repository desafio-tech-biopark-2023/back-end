import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Person } from "./person.entity";

@Entity("natural_person")
class NaturalPerson {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  rg: string;

  @Column()
  cpf: string;

  @Column()
  birth_date: string;

  @Column()
  gender: string;

  @Column()
  ethnicity: string;

  @Column()
  occupation: string;

  @Column()
  income: string;

  @Column()
  marital_status: string;

  @Column()
  nationality: string;

  @OneToOne(() => Person, (person) => person.natural_person, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  person: Person;
}

export { NaturalPerson };
