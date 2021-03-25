const { User } = require('../models');

const userData = [
    {
        user_name: 'acbewley',
        email: 'acbewley13@gmail.com',
        password: 'test1234'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;