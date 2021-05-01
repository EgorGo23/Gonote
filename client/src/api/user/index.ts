import { AxiosPromise } from 'axios';

import { createHttpClient } from '@common/utils/request';
import { IUser } from '@common/types/server-responses';
import { config } from '@common/config';

import { buildEndpointCreator } from '@api/helpers';
import { GetUserParams } from './types';

const createEndpoint = buildEndpointCreator(config.api, 'users');

const { get } = createHttpClient();

export const getUserRequest = ({
  login,
  password,
}: GetUserParams): AxiosPromise<IUser> =>
  get({ url: createEndpoint(`?login=${login}&password=${password}`) });
