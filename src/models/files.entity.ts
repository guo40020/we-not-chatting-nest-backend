import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Files {
  @PrimaryColumn('char', { length: 32 })
  id: string;

  @Column('char', { length: 21 })
  storage_name: string;

  @Column()
  file_name: string;

  @Column()
  type: string;
}
