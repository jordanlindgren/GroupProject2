const { Entry } = require('../models');

const entryData = [
  {
    entry_title: "Bad Day Today",
    entry_text: "My homework is way too hard. I hope my tutor is available today.",
    user_id: 1
  },
  {
    entry_title: "I love jQuery",
    entry_text: "I really like using jQuery. It's so much faster than using the old JavaScript.",
    user_id: 2
  },
  {
    entry_title: "OOP",
    entry_text: "I dont understand this at all. Can any one out there relate?",
    user_id: 3
  },
];

const seedCategories = () => Entry.bulkCreate(entryData);

module.exports = seedCategories;
