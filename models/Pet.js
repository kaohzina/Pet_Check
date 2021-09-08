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
      attributes: ['id', 'name', 'type', 'breed', 'age', 'owner_id', [sequelize.literal('(SELECT COUNT(*) FROM appointment WHERE pet.id = appoinment.pet_id)'), 'appointment_count']
      ]  
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