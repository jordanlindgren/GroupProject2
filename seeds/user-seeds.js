const { User } = require('../models');

const userData = [
  {
    username: "dev22",
    password: "$2b$10$Ec1i4nh6QGREvF4ubRZ/v.YYzFidoRmidmE9QsxKSsgKRxAcwtNQC"
  },
  {
    username: "techie27",
    password: "$2b$10$DwElOqu44llXHh2m.ZkGjO2kbJsJfmh1wdgBy.CqHDyURppvyHnYO"
  },
  {
    username: "devminnie",
    password: "$2b$10$4g1.VxO/nnkFHgBnHN1MDuws10LtdIw4PXY7xIlh/zFarTbo9F6dS"
  },
  
];

const seedProducts = () => User.bulkCreate(userData);

module.exports = seedProducts;
