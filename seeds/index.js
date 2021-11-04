const seedMemes = require('./meme-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');
const seedImages = require('./image-seed')

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedImages();
  console.log('\n----- IMAGES SEEDED -----\n');
  
  await seedMemes();
  console.log('\n----- MEMES SEEDED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  

  process.exit(0);
};

seedAll();
