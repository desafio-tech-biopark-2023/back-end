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

  @Column()
  cnpj: string;

  @Column()
  fantasy_name: string;

  @Column()
  registration: string;

  @Column()
  incorporation_date: string;

  @Column()
  regime_type: string;

  @OneToOne(() => Person, (person) => person.legal_person, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  person: Person;
}

export { LegalPerson };
