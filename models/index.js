const animals = require("./pets");
const user = require("./members");

user.hasMany(animals, {
  foreignKey: 'user_id'
});

animals.belongsTo(user, {
  foreignKey: 'user_id',
})

module.exports = { user, animals };