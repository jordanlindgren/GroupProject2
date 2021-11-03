const { Meme } = require('../models');

const memeData = [
  {
    meme_text: "When I fix a bug in my instructor's code",
    user_id: 1,
    img_id: 1
  },
  {
    meme_text: "Me after 8 weeks of boot camp",
    user_id: 2,
    img_id: 2
  },
  {
    meme_text: "The pineapple before it hits Gary's pizza",
    user_id: 3,
    img_id: 3
  },
  
];

const seedCategories = () => Meme.bulkCreate(memeData);

module.exports = seedCategories;
