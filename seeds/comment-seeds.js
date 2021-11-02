const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Saaaaame. Good luck!",
    user_id: "2",
    entry_id: "1",
  },
  {
    comment_text: "Spot on. It's such a time saver!",
    user_id: "3",
    entry_id: "2",
  },
  {
    comment_text: "I am starting to understand if you wanna do a study group.",
    user_id: "1",
    entry_id: "3",
  },
  
];

const seedTags = () => Comment.bulkCreate(commentData);

module.exports = seedTags;
