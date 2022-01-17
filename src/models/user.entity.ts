import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn("char", { length: 16 })
  id: string;

  @Column("char", { length: "11" })
  phone: string;

  @Column("char varying")
  password: string;

  @Column("text")
  nickname: string;

  @Column("text")
  avatar: string;

  @Column("text")
  moments_bg: string;

  @Column("char", { length: 32 })
  wx_id: string;
}
