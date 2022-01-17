import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Contact {
  @PrimaryColumn("char", { length: 21 })
  id: string;

  @ManyToOne(() => User, (user) => user.id)
  owner: User

  @ManyToOne(() => User, (user) => user.id)
  friend: User

  @Column("char", { length: 35, nullable: true })
  remarks?: string
}
