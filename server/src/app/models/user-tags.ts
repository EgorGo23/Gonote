import {
  Optional, DataTypes, Model, Sequelize,
} from 'sequelize';

interface UserTagAttributes {
  id: number,
}

interface UserTagCreationAttributes
  extends Optional<UserTagAttributes, 'id'> { }

interface UserTagInstance
  extends Model<UserTagAttributes,
    UserTagCreationAttributes>, UserTagAttributes { }

export function UserTagFactory(sequelize: Sequelize) {
  return sequelize.define<UserTagInstance>('user_tag', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });
}
