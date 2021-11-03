const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "OMG hilarious!",
    user_id: "3",
    meme_id: "1",
  },
  {
    comment_text: "LOL",
    user_id: "2",
    meme_id: "2",
  },
  {
    comment_text: "lame",
    user_id: "1",
    meme_id: "3",
  },
];

const seedTags = () => Comment.bulkCreate(commentData);

module.exports = seedTags;
