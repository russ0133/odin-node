import { Entity, Property, ManyToOne, PrimaryKey } from "@mikro-orm/core";

@Entity()
export class Person {
  @PrimaryKey()
  id!: string;

  @Property()
  firstName: string;

  @Property()
  lastName: string;
}
