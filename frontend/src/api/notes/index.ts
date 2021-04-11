import { AxiosPromise } from 'axios';

import { createHttpClient } from '@common/utils/request';
import { INote } from '@common/types/server-responses';
import { config } from '@common/config';

import { buildEndpointCreator } from '@api/helpers';
import { GetNotesParams, GetNoteParams, IncNumViews } from './types';

const createEndpoint = buildEndpointCreator(config.api, 'notes');

const { get, post, put } = createHttpClient();

export const getNotesRequest = ({
  userId,
}: GetNotesParams): AxiosPromise<INote[]> =>
  get({ url: createEndpoint(`?userId=${userId}`) });

export const getNoteRequest = ({ id }: GetNoteParams): AxiosPromise<INote> =>
  get({ url: createEndpoint(`?id=${id}`) });

export const incNumViewsRequest = (note: IncNumViews): AxiosPromise<INote> =>
  put({
    url: createEndpoint(`${note.id}`),
    data: note,
    headers: { 'Content-Type': 'application/json' },
  });
