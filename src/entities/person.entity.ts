import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Address } from "./address.entity";
import { Apartment } from "./apartment.entity";
import { Building } from "./building.entity";
import { LegalPerson } from "./legalPerson.entity";
import { NaturalPerson } from "./naturalPerson.entity";
import { Rent } from "./rent.entity";

@Entity("person")
class Person {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  telephone: string;

  @Column()
  naturalPerson: boolean;

  @Column()
  legalPerson: boolean;

  @Column()
  type: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => NaturalPerson, (natural_person) => natural_person.person, {
    onDelete: "CASCADE",
  })
  natural_person: NaturalPerson;

  @OneToOne(() => LegalPerson, (legal_person) => legal_person.person, {
    onDelete: "CASCADE",
  })
  legal_person: LegalPerson;

  @OneToOne(() => Address, (address) => address.person, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  address: Address;

  @OneToOne(() => Rent, (rent) => rent.person, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  rent: Rent;

  @OneToMany(() => Building, (building) => building.person)
  building: Building[];

  @OneToMany(() => Apartment, (apartment) => apartment.person)
  apartment: Apartment[];
}

export { Person };
