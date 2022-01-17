import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class FriendRequset {
  @PrimaryColumn('char', { length: 21 })
  id: string;

  @ManyToOne(() => User, (user) => user.id)
  from_user: User;

  @ManyToOne(() => User, (user) => user.id)
  to_user: User;

  @Column('int64')
  time: number;

  @Column()
  content: string;

  @Column('boolean')
  accepted: boolean;

  @Column('boolean')
  sent: boolean;
}
