const Member = require('./Member');
const Pet = require('./Pet');
const Vote = require('./Vote');

module.exports = { Member, Pet };

// create associations 
Member.hasMany(Pet, {
  foreignKey: 'Member_id'
});

Pet.belongsTo(Member, {
  foreignKey: 'Member_id',
});



Member.belongsToMany(Pet, {
  through: Vote,
  as: 'voted_Pets',
  foreignKey: 'Member_id'
});

Pet.belongsToMany(Member, {
  through: Vote,
  as: 'voted_Pets',
  foreignKey: 'Pet_id'
});

Vote.belongsTo(Member, {
  foreignKey: 'Member_id'
});

Vote.belongsTo(Pet, {
  foreignKey: 'Pet_id'
});

Member.hasMany(Vote, {
  foreignKey: 'Member_id'
});

Pet.hasMany(Vote, {
  foreignKey: 'Pet_id'
});

module.exports = { Member, Pet, Vote };