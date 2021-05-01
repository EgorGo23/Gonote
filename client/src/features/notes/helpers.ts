import { INote } from '@common/types/server-responses';

export const getSimilarNotes = (
  { tags, id: noteId }: INote,
  noteList: INote[],
  noteNum = 4,
): INote[] => {
  if (Array.isArray(tags) && Array.isArray(noteList)) {
    const tagIds = tags?.map(({ id }) => id);

    const notes = noteList?.reduce((acc, currentNote) => {
      if (currentNote.id === noteId) {
        return acc;
      }

      currentNote.tags.forEach((tag) => {
        const isNoteExist = acc.find(({ id }) => id === currentNote.id);

        if (tagIds.includes(tag.id) && !isNoteExist) {
          acc.push(currentNote);
        }
      });

      return acc;
    }, []);

    return notes.slice(0, typeof noteNum !== 'number' || noteNum < 0 ? 1 : noteNum);
  }

  return [];
};
