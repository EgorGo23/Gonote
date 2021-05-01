import {
  Optional, DataTypes, Model, Sequelize,
} from 'sequelize';

interface NoteTagAttributes {
  id: number,
}

interface NoteTagCreationAttributes extends Optional<NoteTagAttributes, 'id'> {}

export interface NoteTagInstance
  extends Model<NoteTagAttributes,
    NoteTagCreationAttributes>, NoteTagAttributes { }

export function NoteTagFactory(sequelize: Sequelize) {
  return sequelize.define<NoteTagInstance>(
    'note_tag',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
  );
}
