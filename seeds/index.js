const seedPet = require('./pet-seeds');
const seedOwner = require('./owner-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
	await sequelize.sync({ force: true }); // drops db and rescma
	console.log('\n----- DATABASE SYNCED -----\n');
	
	// user data doesn't rely on any constraints so we put it first
	await seedPet();
	console.log('\n----- PET SEEDED -----\n');
	
	await seedOwner();
	console.log('\n----- OWNER SEEDED -----\n');

	process.exit(0);
};

seedAll();