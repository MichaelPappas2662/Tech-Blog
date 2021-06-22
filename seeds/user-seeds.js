const { User } = require('../models');

const userData = [
  {
    username: 'martin_bour',
    github: 'martinb',
    email: 'martin_b@gmail.com',
    password: 'p@ssword12'
  },
  {
    username: 'matt_b',
    github: 'mathewb',
    email: 'mathew_b@gmail.com',
    password: 'p@ssword22'
  },
  {
    username: 'shaun_c',
    github: 'shaun',
    email: 'shaun_c@gmail.com',
    password: 'p@ssword32'
  },
  {
    username: 'lee_n',
    github: 'leenorris',
    email: 'lee_n@gmail.com',
    password: 'p@ssword42'
  },
  {
    username: 'mike_m',
    github: 'mike_m',
    email: 'priya_r@gmail.com',
    password: 'p@ssword52'
  },
  {
    username: 'pooja',
    github: 'pooja',
    email: 'pooja@gmail.com',
    password: 'p@ssword62'
  }
];

const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;