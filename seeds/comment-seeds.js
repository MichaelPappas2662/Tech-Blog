const { Comment } = require('../models');

const commentData = [
  {
    user_id: 1,
    post_id: 5,
    comment_text: 'yes'
  },
  {
    user_id: 4,
    post_id: 4,
    comment_text: 'yes2'
  },
  {
    user_id: 1,
    post_id: 4,
    comment_text: 'yes3'
  },
  {
    user_id: 3,
    post_id: 5,
    comment_text: 'yes4'
  },
  {
    user_id: 3,
    post_id: 2,
    comment_text: 'yes5'
  },
  {
    user_id: 3,
    post_id: 4,
    comment_text: 'yes6'
  },
  {
    user_id: 5,
    post_id: 3,
    comment_text: 'yes7'
  },
  {
    user_id: 2,
    post_id: 1,
    comment_text: 'Nice tool!'
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;