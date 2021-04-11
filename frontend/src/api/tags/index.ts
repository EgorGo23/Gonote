import { AxiosPromise } from 'axios';

import { createHttpClient } from '@common/utils/request';
import { ITag } from '@common/types/server-responses';
import { config } from '@common/config';

import { buildEndpointCreator } from '@api/helpers';
import { GetUserTagsParams } from './types';

const createEndpoint = buildEndpointCreator(config.api, 'tags');

const { get } = createHttpClient();

export const getUserTagsRequest = ({ userId }: GetUserTagsParams): AxiosPromise<ITag> =>
  get({ url: createEndpoint(`?userId=${userId}`) });
