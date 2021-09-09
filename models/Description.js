const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Description extends Model { static appointmentDate(body, models) {
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

Description.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Owner',
        key: 'id'
      }
    },
    pet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pet',
        key: 'id'
      }
    },
    appointment_description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Description;