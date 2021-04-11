import { ITag } from '@common/types/server-responses';

import { Tag } from '../Tag';

interface ITags {
  userId: string;
  tags: ITag[];
  generate: (tagPositions: string[]) => ITag[];
}

export class Tags implements ITags {
  public tags: ITag[];

  constructor(public userId: string) {
    this.userId = userId || '';
    this.tags = [];
  }

  public generate(tagPositions: string[] = []): ITag[] {
    if (Array.isArray(tagPositions)) {
      for (let ind = 0; ind < tagPositions.length; ind += 1) {
        this.tags.push(new Tag({
          userId: this.userId,
          tagIndex: ind,
          positions: tagPositions[ind],
        }));
      }

      return this.tags;
    }

    return [];
  }
}

