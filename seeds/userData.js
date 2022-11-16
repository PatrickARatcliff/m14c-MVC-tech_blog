const { User } = require('../models');

const userData =
[
    {
        "name": "Patrick",
        "email": "patrickdev@hotmail.com",
        "password": "password12345"
    },
    {
        "name": "Bob",
        "email": "bobdev@gmail.com",
        "password": "password12345"
    },
    {
        "name": "Sue",
        "email": "suedev@aol.com",
        "password": "password12345"
    },
    {
        "name": "Paul",
        "email": "pauldev@gmail.com",
        "password": "password12345"
    },
    {
        "name": "Izzy",
        "email": "izzydev@hotmail.com",
        "password": "password12345"
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true, returning: true});

module.exports = seedUsers;