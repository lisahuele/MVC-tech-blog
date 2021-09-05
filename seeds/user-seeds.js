const { User } = require('../models');

const userData = [{
        username: 'sideblinded',
        email: 'sideblinded@email.com',
        password: 'password'

    },
    {
        username: 'wolfsoundz',
        email: 'wolfsoundz@email.com',
        password: 'password'
    },
    {
        username: 'n0n0nsense',
        email: 'n0n0nsense@email.com',
        password: 'password'
    },
    {
        username: 'astrospud3',
        email: 'astrospud3@email.com',
        password: 'password'
    }

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;