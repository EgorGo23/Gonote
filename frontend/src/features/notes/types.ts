import { INote } from '@common/types/server-responses';

import { GetNotesParams, GetNoteParams } from '@api/notes/types';

export type GetNotesPayload = GetNotesParams;

export type GetNotePayload = GetNoteParams;

export type IncNumViewsPayload = INote;
