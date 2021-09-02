const { DataTypes } = require('sequelize/types');
const sequelize = require('../config/connection');

class pets extends Model {

}

// Making an animal
pets.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    animal:{
      type:DataTypes.STRING,
      allowNull: false
    },
    breed:{
      type:DataTypes.STRING,
      allowNull: false
    },
    age:{
      type:DataTypes.INTEGER,
      allowNull: false
    },
    desc:{
      type: DataTypes.STRING,
      allowNull: false
    },
    adoptable:{
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  })

  module.exports = pets;