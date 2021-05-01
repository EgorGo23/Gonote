import {
  Optional, DataTypes, Model, Sequelize,
} from 'sequelize';

interface TagAttributes {
  id: number,
  label: string,
}

interface TagCreationAttributes
  extends Optional<TagAttributes, 'id'> { }

interface TagInstance
  extends Model<TagAttributes,
    TagCreationAttributes>, TagAttributes { }

export function TagFactory(sequelize: Sequelize) {
  return sequelize.define<TagInstance>('tag', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
}
