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

@Entity("legal_person")
class LegalPerson {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  cnpj: string;

  @Column()
  fantasy_name: string;

  @Column()
  registration: string;

  @Column()
  incorporation_date: string;

  @Column()
  regime_type: string;

  @ManyToOne(() => Person, (person) => person.legal_person, {
    onDelete: "CASCADE",
    eager: true,
  })
  person: Person;
}

export { LegalPerson };
