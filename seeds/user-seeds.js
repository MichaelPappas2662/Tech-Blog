const { User } = require('../models');

const userData = [{
  username: 'Jesse',
  github: 'Jesse',
  email: 'jesse@gmail.com',
  password: '12345'

},
{
  username: 'Francis',
  github: 'Powerman',
  email: 'francis@gmail.com',
  password: 'Powerman5000'
},
{
  username: 'JefferyD',
  github: 'JeD',
  email: 'jeD@gmail.com',
  password: 'CannibalCorpse!58'
},
{
  username: 'RecklessRalph',
  github: 'Ralph',
  email: 'RR@gmail.com',
  password: 'Wanderburger29'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;