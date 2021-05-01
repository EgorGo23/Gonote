import { Sequelize } from 'sequelize';
import { UserFactory } from './users';
import { NoteTagFactory } from './note-tags';
import { NoteFactory } from './notes';
import { SimilarNoteFactory } from './similar-notes';
import { TagFactory } from './tags';
import { UserTagFactory } from './user-tags';

const sequelize = new Sequelize(
  process.env.DB_NAME = 'gonote',
  process.env.DB_USER = 'postgres',
  process.env.DB_PASSWORD = 'user',
  {
    dialect: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
  },
);

const User = UserFactory(sequelize);
const NoteTag = NoteTagFactory(sequelize);
const Note = NoteFactory(sequelize);
const SimilarNote = SimilarNoteFactory(sequelize);
const Tag = TagFactory(sequelize);
const UserTag = UserTagFactory(sequelize);

User.hasMany(Note);
Note.belongsTo(User);

User.hasMany(UserTag);

Note.hasMany(SimilarNote);
SimilarNote.belongsTo(Note);

Note.hasMany(NoteTag);
NoteTag.belongsTo(Note);

NoteTag.belongsTo(Tag);
UserTag.belongsTo(Tag);

export const db = {
  sequelize,
  User,
  NoteTag,
  Note,
  SimilarNote,
  Tag,
  UserTag,
};
