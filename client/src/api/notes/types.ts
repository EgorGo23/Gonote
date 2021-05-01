import { INote } from '@common/types/server-responses';

export type GetNotesParams = {
  userId: string;
};

export type GetNoteParams = {
  id: string;
};

export type IncNumViews = INote;
