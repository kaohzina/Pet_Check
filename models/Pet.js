const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Pet model
class Pet extends Model {
 static appointmentDate(body, models) {
  return models.Appointment.create({
    owner_id: body.owner_id,
    pet_id: body.pet_id
  }).then(() => {
    return Pet.findOne({
      where: {
        id: body.pet_id
      },
    });
  });
 }
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
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    owner_fullname: {
      type: DataTypes.STRING,
      references: {
        model: 'owner',
        key: 'fname lname'
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