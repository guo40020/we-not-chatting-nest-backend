import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class ChatHistory {
  @PrimaryColumn('char', { length: 32 })
  id: string;

  @ManyToOne(() => User, (user) => user.id)
  from_user: User;

  @ManyToOne(() => User, (user) => user.id)
  to_user: User;

  @Column('int64')
  time: number;

  @Column()
  content: number;

  @Column()
  content_type: number;

  @Column('boolean', { default: true })
  sent: boolean;
}
