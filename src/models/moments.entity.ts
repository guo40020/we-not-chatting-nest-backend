import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Moments {
  @PrimaryColumn("char", { length: 21 })
  id: string;

  @Column("int64")
  time: number;

  @Column("json")
  likes: string
}
