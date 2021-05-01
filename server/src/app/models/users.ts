import {
  Optional, DataTypes, Model, Sequelize,
} from 'sequelize';

interface UserAttributes {
  id: number,
  firstName: string,
  lastName: string,
  login: string,
  password: string,
  role: string,
}

interface UserCreationAttributes
  extends Optional<UserAttributes, 'id'> { }

interface UserInstance
  extends Model<UserAttributes,
    UserCreationAttributes>, UserAttributes { }

export function UserFactory(sequelize: Sequelize) {
  return sequelize.define<UserInstance>('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'USER',
    },
  });
}
