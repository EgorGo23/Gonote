import { INote, ITag } from '@common/types/server-responses';

import { Note } from '../Note';

interface INotes {
  userId: string;
  notes: INote[];
  generate: (num: number, tags: ITag[]) => INote[];
}

export class Notes implements INotes {
  public notes: INote[];

  constructor(public userId: string) {
    this.userId = userId || '';
    this.notes = [];
  }

  public generate(num = 5, tags: ITag[] = []): INote[] {
    if (typeof num === 'number' && Array.isArray(tags)) {
      for (let ind = 0; ind < Math.trunc(Math.abs(num)); ind += 1) {
        this.notes.push(new Note({
          userId: this.userId,
          noteInd: ind,
          tags: tags.filter((tag) => tag.userId === this.userId),
        }));
      }

      return this.notes;
    }

    return [];
  }
}


