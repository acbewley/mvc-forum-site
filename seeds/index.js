const seedUsers = require('./userSeeds')

const sequelize = require('../config/connection')

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\nDATABASE SEEDED\n')
    await seedUsers();
    console.log('\nUSERS SEEDED\n');
    process.exit(0);
};

seedAll();