import { IUser } from '@common/types/server-responses';
import { RoleCode } from '../../../src/common/constants';

import { User } from '../User';

interface IUsers {
  users: IUser[];
  generate: (num: number) => IUser[];
}

export class Users implements IUsers {
  public users: IUser[];

  constructor() {
    this.users = [];
  }

  public generate(num = 1): IUser[] {
    if (typeof num === 'number') {
      this.users.push({
        id: '0',
        firstName: 'User',
        lastName: 'User',
        email: '',
        login: 'user',
        password: 'user',
        role: RoleCode.User,
      });

      for (let ind = 0; ind < Math.trunc(Math.abs(num)) - 1; ind += 1) {
        this.users.push(new User());
      }

      return this.users;
    }

    return [];
  }
}
