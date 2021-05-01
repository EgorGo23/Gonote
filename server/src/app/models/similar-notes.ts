import {
  Optional, DataTypes, Model, Sequelize,
} from 'sequelize';

interface SimilarNoteAttributes {
  id: number,
  title: string,
  imageUrl: string,
}

interface SimilarNoteCreationAttributes
  extends Optional<SimilarNoteAttributes, 'id'> { }

interface SimilarNoteInstance
  extends Model<SimilarNoteAttributes,
    SimilarNoteCreationAttributes>, SimilarNoteAttributes { }

export function SimilarNoteFactory(sequelize: Sequelize) {
  return sequelize.define<SimilarNoteInstance>('similar_note', {
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
  });
}
