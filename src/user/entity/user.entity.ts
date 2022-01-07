import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserStatus } from './user.constants';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  status: UserStatus;

  static signup(email: string, firstName: string, lastName: string): User {
    const user = new User();
    user.email = email;
    user.firstName = firstName;
    user.lastName = lastName;
    user.status = UserStatus.Activated;

    return user;
  }

  static of(
    email: string,
    firstName: string,
    lastName: string,
    status: UserStatus,
  ): User {
    const user = new User();
    user.email = email;
    user.firstName = firstName;
    user.lastName = lastName;
    user.status = status;

    return user;
  }
}
