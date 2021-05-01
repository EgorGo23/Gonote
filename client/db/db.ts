import { Users, Tags, Notes } from './dataGeneration';

const usersDB = new Users().generate(1);
const tagsDB = new Tags('0').generate(['0,1,6', '0,1,6,7', '0,2,5,7', '2,4,5', '1,3,4,6']);
const notesDB = new Notes('0').generate(8, tagsDB);

export const db = {
  users: usersDB,
  tags: tagsDB,
  notes: notesDB,
};
