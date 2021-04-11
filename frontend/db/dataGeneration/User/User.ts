import { name as fakerName, internet, random } from 'faker';

import { IUser } from '@common/types/server-responses';
import { RoleCode } from '../../../src/common/constants';

export class User implements IUser {
  public id: string;

  public firstName: string;

  public lastName: string;

  public email: string;

  public login: string;

  public password: string;

  public role: RoleCode;

  constructor({
    id = random.uuid(),
    firstName = fakerName.firstName(),
    lastName = fakerName.lastName(),
    email = internet.email(),
    login = internet.userName(),
    password = internet.password(),
    role = RoleCode.User,
  }: Partial<IUser> = {}) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.login = login;
    this.password = password;
    this.role = role;
  }
}
