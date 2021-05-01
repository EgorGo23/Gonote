import {
  Optional, DataTypes, Model, Sequelize,
} from 'sequelize';

interface NoteAttributes {
  id: number,
  title: string,
  // userId: number,
  imageUrl: string,
  description: string,
}

interface NoteCreationAttributes extends Optional<NoteAttributes, 'id'> {}

interface NoteInstance
  extends Model<NoteAttributes,
    NoteCreationAttributes>, NoteAttributes { }

export function NoteFactory(sequelize: Sequelize) {
  return sequelize.define<NoteInstance>('note', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
}
