import {
  random, lorem,
} from 'faker';

import { ITag } from '@common/types/server-responses';

export class Tag implements ITag {
  public id: string;

  public userId: string;

  public label: string;

  public tagIndex: number;

  public positions: string;

  public noteIds: string[];

  constructor({
    userId = random.uuid(),
    label = lorem.word(),
    tagIndex = 0,
    positions = '',
  }: Partial<ITag & { tagIndex: number, positions: string }> = {}) {
    this.id = `user-${userId}-tag-${tagIndex}`;
    this.userId = userId;
    this.label = label;
    this.noteIds = positions.split(',').map((pos) => `user-${userId}-note-${pos}`);
  }
}
