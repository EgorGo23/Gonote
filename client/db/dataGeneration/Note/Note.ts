import {
  image, name, random, date, lorem,
} from 'faker';

import { INote, ITag } from '@common/types/server-responses';

export class Note implements INote {
  public id: string;

  public noteInd: number;

  public userId: string;

  public title: string;

  public imageUrl: string;

  public desctiption: string;

  public tags: ITag[];

  public creationDate: Date;

  public numViews: number;

  constructor({
    userId = random.uuid(),
    title = name.title(),
    imageUrl = image.nature(),
    desctiption = [...Array(2)].map(() => lorem.paragraphs()).join(' '),
    tags = [],
    creationDate = date.past(),
    numViews = 0,
    noteInd,
  }: Partial<INote & { noteInd: number }> = {}) {
    const noteId = `user-${userId}-note-${noteInd}`;

    const noteTags = tags.filter((tag) => tag.noteIds.includes(noteId));

    this.id = noteId;
    this.userId = userId;
    this.title = title;
    this.imageUrl = imageUrl;
    this.desctiption = desctiption;
    this.tags = noteTags;
    this.creationDate = creationDate;
    this.numViews = numViews;
  }
}
