const Owner = require('./Owner');
const Pet = require('./Pet');
const Vote = require('./Appointment');

module.exports = { Owner, Pet };

// create associations 
Owner.hasMany(Pet, {
  foreignKey: 'Owner_id'
});

Pet.belongsTo(Owner, {
  foreignKey: 'Owner_id',
});



Owner.belongsToMany(Pet, {
  through: Vote,
  as: 'voted_Pets',
  foreignKey: 'Owner_id'
});

Pet.belongsToMany(Owner, {
  through: Vote,
  as: 'voted_Pets',
  foreignKey: 'Pet_id'
});

Vote.belongsTo(Owner, {
  foreignKey: 'Owner_id'
});

Vote.belongsTo(Pet, {
  foreignKey: 'Pet_id'
});

Owner.hasMany(Vote, {
  foreignKey: 'Owner_id'
});

Pet.hasMany(Vote, {
  foreignKey: 'Pet_id'
});

module.exports = { Owner, Pet, Vote };