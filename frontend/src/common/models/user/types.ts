import { GetUserParams } from '@api/user/types';

export type GetUserPayload = GetUserParams;

export type LoginData = {
  login: string;
  password: string;
};
