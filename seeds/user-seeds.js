const { User } = require('../models');

const userData = [
  {
    username: 'martin_bour',
    github: 'martinb',
    email: 'martin_b@gmail.com',
    password: 'p@ssword1'
  },
  {
    username: 'matt_b',
    github: 'mathewb',
    email: 'mathew_b@gmail.com',
    password: 'p@ssword2'
  },
  {
    username: 'shaun_c',
    github: 'shaun',
    email: 'shaun_c@gmail.com',
    password: 'p@ssword3'
  },
  {
    username: 'lee_n',
    github: 'leenorris',
    email: 'lee_n@gmail.com',
    password: 'p@ssword4'
  },
  {
    username: 'mike_m',
    github: 'mike_m',
    email: 'priya_r@gmail.com',
    password: 'p@ssword5'
  },
  {
    username: 'pooja',
    github: 'pooja',
    email: 'pooja@gmail.com',
    password: 'p@ssword6'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;