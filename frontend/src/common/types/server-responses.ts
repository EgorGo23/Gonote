import { RoleCode } from '@common/constants';

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  login: string;
  password: string;
  role: RoleCode;
}

export interface ITag {
  id: string,
  label: string,
  userId: string,
  noteIds: string[],
}

export interface INote {
  id: string;
  title: string;
  imageUrl: string;
  desctiption: string;
  tags: ITag[];
  creationDate: Date;
  userId: string;
  numViews: number;
}

