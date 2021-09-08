const Owner = require('./Owner');
const Pet = require('./Pet');
const Appointment = require('./Appointment');

module.exports = { Owner, Pet };

// create associations 
Owner.hasMany(Pet, {
  foreignKey: 'owner_id'
});

Pet.belongsTo(Owner, {
  foreignKey: 'owner_id',
});



// Owner.belongsToMany(Pet, {
//   through: Appointment,
//   as: 'Appointment_Pets',
//   foreignKey: 'Owner_id'
// });

// Pet.belongsToMany(Owner, {
//   through: Appointment,
//   as: 'Appointment_Pets',
//   foreignKey: 'Pet_id'
// });

// Appointment.belongsTo(Owner, {
//   foreignKey: 'Owner_id'
// });

// Appointment.belongsTo(Pet, {
//   foreignKey: 'Pet_id'
// });

// Owner.hasMany(Appointment, {
//   foreignKey: 'Owner_id'
// });

// Pet.hasMany(Appointment, {
//   foreignKey: 'Pet_id'
// });

module.exports = { Owner, Pet, Appointment };