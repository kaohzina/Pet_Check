const pets = require("./pets");
const member = require("./members");

user.hasMany(pets, {
  foreignKey: 'user_id'
});

pets.belongsTo(member, {
  foreignKey: 'user_id',
})

module.exports = { member, pets };