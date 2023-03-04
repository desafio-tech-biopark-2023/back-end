import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Person } from "./person.entity";

@Entity("address")
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  public_place: string;

  @Column()
  number: string;

  @Column()
  zip_code: string;

  @Column()
  complement: string;

  @Column()
  district: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @OneToOne(() => Person, (person) => person.address, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  person: Person;
}

export { Address };
