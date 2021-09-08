const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Pet model
class Pet extends Model {

}
Pet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    owner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'owner',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'pet'
  }
);

module.exports = Pet;