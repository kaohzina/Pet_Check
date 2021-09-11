const Owner = require('./Owner');
const Pet = require('./Pet');
const Appointment = require('./Appointment');


module.exports = { Owner, Pet };

// create associations 
Owner.hasMany(Pet, {
  foreignKey: 'owner_name'
});

Pet.belongsTo(Owner, {
  foreignKey: 'owner_name',
});



Owner.belongsToMany(Pet, {
  through: Appointment,
  as: 'Pet_Appointment',
  foreignKey: 'owner_name'
});

Pet.belongsToMany(Owner, {
  through: Appointment,
  as: 'Pet_Appointment',
  foreignKey: 'pet_name'
});

Appointment.belongsTo(Owner, {
  foreignKey: 'owner_name'
});

Appointment.belongsTo(Pet, {
  foreignKey: 'pet_name'
});

Owner.hasMany(Appointment, {
  foreignKey: 'owner_name'
});

Pet.hasMany(Appointment, {
  foreignKey: 'pet_name'
});




module.exports = { Owner, Pet, Appointment};